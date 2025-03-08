import { test } from '@playwright/test';

test('test case name', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao trang personal note page', async() => {
            await page.locator(`//a[@href='04-xpath-personal-notes.html']`).click();

    })

    for (let i = 1; i<=10; i++){
        await test.step('Fill information', async() => {
            await page.locator(`//input[@id='search']`).fill(`note ${i}`);
            await page.locator(`//input[@id='note-title']`).fill(`note ${i}`);     
            await page.locator(`//textarea[@id='note-content']`).fill(`note content ${i}`);             
            await page.locator(`//button[@id='add-note']`).click();

    
        })
    }


})