const { test, expect } = require('@playwright/test');

const delay = time => new Promise(resolve => setTimeout(resolve, time))

test('Single card stays visible', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/main/memory.html')
    let card = page.locator('#row_0-col_0').first()
    await expect(card).toHaveAttribute('src','images/back.jpeg')
    await card.click()
    await expect(card).not.toHaveAttribute('src','images/back.jpeg')
    await delay(1000)
    await expect(card).not.toHaveAttribute('src','images/back.jpeg')
});

test('Bad peer disappears', async ({ page }) => {
    let card1, card2

    await page.goto('http://127.0.0.1:5500/main/memory.html')

    card1 = page.locator('#row_1-col_1').first()
    expect(await card1.getAttribute('src')).toEqual('images/back.jpeg')
    card2 = page.locator('#row_2-col_2').first()
    expect(await card2.getAttribute('src')).toEqual('images/back.jpeg')
    await card1.click()
    expect(await card1.getAttribute('src')).not.toEqual('images/back.jpeg')
    await delay(2000)
    expect(await card1.getAttribute('src')).not.toEqual('images/back.jpeg')
    
    await card2.click()
    await delay(100)
    expect(await card2.getAttribute('src')).not.toEqual('images/back.jpeg')
    await delay(600)
    expect(await card1.getAttribute('src')).not.toEqual('images/back.jpeg')
    expect(await card2.getAttribute('src')).not.toEqual('images/back.jpeg')
    expect(await card2.getAttribute('src')).not.toEqual(await card1.getAttribute('src'))
    await delay(400)
    expect(await card1.getAttribute('src')).toEqual('./images/back.jpeg')
    expect(await card2.getAttribute('src')).toEqual('./images/back.jpeg')
});

test('Matching peer stays visible', async ({ page }) => {
    let card1, card2, src1, src2

    await page.goto('http://127.0.0.1:5500/main/memory.html')

    card1 = page.locator('#row_0-col_0').first()
    src1 = await card1.getAttribute('src')
    expect(src1).toEqual('images/back.jpeg')
    for(let row=0; row<5; row++){
        for(let column=0; column<4; column++){
            if(row==0 && column ==0){
                continue
            }
            card2 = page.locator('#row_'+row+'-col_'+column).first()
            src2 = await card2.getAttribute('src')
            expect(src2).toEqual('images/back.jpeg')
            await card1.click()
            await delay(100)
            src1 = await card1.getAttribute('src')
            await card2.click()
            await delay(100)
            src2 = await card2.getAttribute('src')
            if(src1 !== src2){
                await delay(1500)
            }else{
                await testMatchingCards(card1, card2)
                return
            }
        }
    }
});

async function testMatchingCards(card1, card2){
    expect(await card1.getAttribute('src')).not.toEqual('images/back.jpeg')
    expect(await card1.getAttribute('src')).toEqual(await card2.getAttribute('src'))
    await delay(1500)
    expect(await card1.getAttribute('src')).not.toEqual('images/back.jpeg')
    expect(await card1.getAttribute('src')).toEqual(await card2.getAttribute('src'))
}