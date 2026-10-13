// @ts-check

const { test, expect } = require('@playwright/test');

test('SystemJS does not 404 core-js modules required by app.bundle', async ({
  page,
}) => {
  const coreJs404s = [];
  page.on('response', (response) => {
    if (response.status() === 404 && response.url().includes('core-js')) {
      coreJs404s.push(response.url());
    }
  });
  await page.goto('/#!/home');
  await expect(page.getByTestId('jspm-user-form')).toBeVisible({
    timeout: 20000,
  });
  await expect(page.getByLabel('username')).toBeVisible({ timeout: 20000 });
  expect(coreJs404s, coreJs404s.join('\n')).toEqual([]);
});
