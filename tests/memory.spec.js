const { test, expect } = require('@playwright/test');

const delay = time => new Promise(resolve => setTimeout(resolve, time))

test('Card is visible during 1000ms', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/main/memory.html')
    let card = page.locator('#row_0-col_0').first()
    await expect(card).toHaveAttribute('src','images/back.jpeg')
    await card.click()
    await delay(600)
    await expect(card).not.toHaveAttribute('src','images/back.jpeg')
    await delay(600)
    await expect(card).toHaveAttribute('src','images/back.jpeg')
});