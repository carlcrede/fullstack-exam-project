import { test, expect } from '@playwright/test';

test('User logs in and goes to profile page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.waitForURL(/login/);
  await page.getByPlaceholder('Enter Username or Email').click();
  await page.getByPlaceholder('Enter Username or Email').fill('carlcrede');
  await page.getByPlaceholder('Enter Username or Email').press('Tab');
  await page.getByPlaceholder('Enter Password').fill('xyu67yvx');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.waitForURL(/me/);
  await page.textContent('text=carlcrede');
});
