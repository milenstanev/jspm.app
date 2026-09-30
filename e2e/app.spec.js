// @ts-check

const { test, expect } = require('@playwright/test');



test.describe('App', () => {

  test('loads successfully', async ({ page }) => {

    const response = await page.goto('/');

    expect(response && response.status()).toBe(200);

  });



  test('has nav with feature links', async ({ page }) => {

    await page.goto('/');

    await expect(page.locator('nav')).toBeVisible({ timeout: 10000 });

    await expect(page.locator('nav a[href="#!/counter"]')).toContainText('Counter');

    await expect(page.locator('nav a[href="#!/timer"]')).toContainText('Timer');

    await expect(page.locator('nav a[href="#!/notes"]')).toContainText('Notes');

    await expect(page.locator('div[ui-view]')).toBeAttached({ timeout: 5000 });

  });



  test('navigation works - hash URL reflects route', async ({ page }) => {

    await page.goto('/');

    await page.waitForURL((url) => url.hash.includes('#!/'), { timeout: 15000 });

    await expect(page).toHaveURL(/home/);

    await page.goto('/#!/counter');

    await expect(page).toHaveURL(/counter/, { timeout: 10000 });

  });



  test('navigation works - Counter via click and increment', async ({ page }) => {

    await page.goto('/');

    await page.waitForURL((url) => url.hash.includes('home'), { timeout: 20000 });

    await page.locator('nav').locator('a[href="#!/counter"]').first().click();

    await expect(page).toHaveURL(/counter/, { timeout: 10000 });

    await page.waitForFunction(
      () => !!window['angular'] && !!window['angular'].element(document.body).injector(),
      { timeout: 20000 }
    );

    await expect(page.locator('.counter-display')).toBeVisible({ timeout: 15000 });

    await expect(page.locator('.counter-display')).toContainText('0');

    await page.click('button:has-text("Increment")');

    await expect(page.locator('.counter-display')).toContainText('1');

  });



  test('navigation works - Timer and Notes visible', async ({ page }) => {

    await page.goto('/#!/timer');

    await expect(page).toHaveURL(/timer/);

    await page.waitForFunction(
      () => !!window['angular'] && !!window['angular'].element(document.body).injector(),
      { timeout: 20000 }
    );

    await expect(page.locator('.timer-display')).toBeVisible({ timeout: 15000 });

    await page.goto('/#!/notes');

    await expect(page).toHaveURL(/notes/);

    await expect(page.locator('input[placeholder="New note..."]')).toBeVisible({ timeout: 15000 });

  });



  test('navigation works - direct URL /counter returns 200', async ({ page }) => {

    const response = await page.goto('/counter');

    expect(response && response.status()).toBe(200);

  });

});

