import { expect, test } from '@playwright/test'

test('portfolio homepage loads', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('navigation', { name: 'Main navigation' }),
  ).toBeVisible()

  await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Research' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Skills' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible()
})
