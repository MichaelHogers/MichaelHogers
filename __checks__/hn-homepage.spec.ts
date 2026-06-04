import { test, expect } from '@playwright/test'

test('HN Homepage loads successfully', async ({ page }) => {
  const response = await page.goto('https://www.hackernews.com')
  expect(response?.status()).toBeLessThan(400)
  await expect(page).toHaveTitle(/.+/)
  // Verify key page elements are visible
  await expect(page.locator('body')).toBeVisible()
})
