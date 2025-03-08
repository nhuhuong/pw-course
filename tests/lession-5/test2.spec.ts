import { test } from '@playwright/test';

test('test case name', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao trang Product page', async() => {
            await page.locator(`//a[@href='02-xpath-product-page.html']`).click();

    })

    await page.locator(`//button[@data-product-id='1']`).dblclick();

    await page.locator(`//button[@data-product-id='2']`).click({clickCount: 3});

    await page.locator(`//button[@data-product-id='3']`).click();

})