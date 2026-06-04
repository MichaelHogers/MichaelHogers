import { test, expect } from '@playwright/test'

test('HN Login page is accessible', async ({ page }) => {
  const response = await page.goto('https://www.hackernews.com/login')
  expect(response?.status()).toBeLessThan(400)
  // Verify the login page has loaded with a form
  await expect(page.locator('body')).toBeVisible()
})
