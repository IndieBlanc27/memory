const { test, expect } = require('@playwright/test');
import delay from '../main/delay.js'

test.describe('Card clicked', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:5500/main/memory.html');
    });

    test('Card is visible during 1000ms', async ({ page }) => {
        const card = await page.getElementById('row_0-col_0');
        const src = await card.getAttribute('src');
        expect(src).toEqual('http://127.0.0.1:5500/main/images/back.jpeg');
        await page.click(card);
        expect(src).not.toEqual('http://127.0.0.1:5500/main/images/back.jpeg');
        await delay(600);
        expect(src).not.toEqual('http://127.0.0.1:5500/main/images/back.jpeg');
        await delay(800);
        expect(src).toEqual('http://127.0.0.1:5500/main/images/back.jpeg');
    });
    
})