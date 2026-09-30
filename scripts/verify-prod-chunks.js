#!/usr/bin/env node
'use strict';

const { chromium } = require('@playwright/test');

const baseUrl = process.env.PROD_URL || 'http://127.0.0.1:3010';

(async () => {
  const bundles = [];
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('request', (request) => {
    const url = request.url();
    if (url.includes('.bundle.js')) {
      bundles.push(url);
    }
  });

  await page.goto(baseUrl);
  await page.waitForURL(/home/, { timeout: 20000 });
  await page.locator('nav a[href="#!/counter"]').click();
  await page.waitForURL(/counter/, { timeout: 20000 });
  await page.waitForSelector('.counter-display', { timeout: 20000 });

  const uniqueBundles = [...new Set(bundles)];
  await browser.close();

  if (!uniqueBundles.some((url) => url.includes('counter.bundle.js'))) {
    throw new Error('counter.bundle.js was not requested on navigation');
  }
  if (!uniqueBundles.some((url) => url.includes('core.bundle.js'))) {
    throw new Error('core.bundle.js was not loaded at startup');
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
