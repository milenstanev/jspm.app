// @ts-check

const { test, expect } = require('@playwright/test');

const SCHEMA = {
  username: { formType: 'text', required: [true, 'Field is Required'] },
  mobileNumber: { formType: 'text' },
  OtherNewProp: { formType: 'checkbox', default: false },
  LastBoolean: { formType: 'checkbox', default: true },
  selectItem: {
    default: 1,
    formType: 'select',
    options: [
      { val: 1, text: '--' },
      { val: 2, text: 'option' },
      { val: 3, text: 'third' },
    ],
  },
  phone: { formType: 'text' },
};

test.describe('Users schema form', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('https://schema-ui-mf-remote.vercel.app/api/users/schema', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(SCHEMA),
      })
    );
    await page.route('https://schema-ui-mf-remote.vercel.app/api/users', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          { _id: 'user-demo', username: 'mstanev', phone: '555-0000' },
        ]),
      })
    );
    await page.route('https://schema-ui-mf-remote.vercel.app/api/users/user-demo', (route) => {
      if (route.request().method() === 'PUT') {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: route.request().postData() || '{}',
        });
      }
      return route.continue();
    });
  });

  test('home is a Bootstrap 3 schema form, not a todo list', async ({ page }) => {
    await page.goto('/#!/home');
    const form = page.getByTestId('jspm-user-form');
    await expect(form).toBeVisible({ timeout: 20000 });
    await expect(form.getByLabel('username')).toBeVisible();
    await expect(form.getByLabel('phone')).toHaveValue('555-0000');
    await expect(form.getByRole('button', { name: 'Update user' })).toBeVisible();
    await expect(form.locator('.list-group-item')).toHaveCount(0);
    await expect(form.getByText('remove')).toHaveCount(0);
  });

  test('submit emits userUpdated for the desktop-ui SDK', async ({ page }) => {
    await page.goto('/#!/home');
    const form = page.getByTestId('jspm-user-form');
    await expect(form.getByLabel('username')).toBeVisible({ timeout: 20000 });
    await page.evaluate(() => {
      window.__guestEvents = [];
      window.desktopUi = {
        ready: function () {},
        setTitle: function () {},
        emit: function (name, payload) {
          window.__guestEvents.push({ name: name, payload: payload });
        },
      };
    });
    await form.getByLabel('username').fill('synced-user');
    await form.getByRole('button', { name: 'Update user' }).click();
    await expect(form.getByRole('status')).toHaveText('Dashboard synced');
    const events = await page.evaluate(() => window.__guestEvents);
    expect(events[0].name).toBe('userUpdated');
    expect(events[0].payload.entity).toBe('users');
    expect(events[0].payload.record._id).toBe('user-demo');
    expect(events[0].payload.record.username).toBe('synced-user');
  });
});
