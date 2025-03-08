import { test } from '@playwright/test';

test('test case name', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao bai Register page', async() => {
            await page.locator(`//a[@href='01-xpath-register-page.html']`).click();

    })

    await test.step('Fill information', async() => {
        await page.locator(`//input[@id='username']`).fill('Huong');

    })

    await test.step('Fill information', async() => {
        await page.locator(`//input[@id='email']`).fill('huong@gmail.com');

    })

    let isChecked = await page.locator(`//input[@id='male']`).isChecked(); 
    if (isChecked == false){
        await page.locator(`//input[@id='male']`).check();
    } 

    await page.locator(`//input[@id='reading']`).check();

    await page.locator(`//select[@id='country']`).selectOption({value: 'uk'});


    await page.locator(`//button[@type='submit']`).click();

})