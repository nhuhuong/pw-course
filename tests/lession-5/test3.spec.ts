import { test } from '@playwright/test';

test('test case name', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');
        await page.locator(`//a[@href='03-xpath-todo-list.html']`).click();

    })

    await test.step('Them 100 items', async() => {
        for (let i = 1; i<=100; i++){
            await test.step('Fill information', async() => {
                await page.locator(`//input[@id='new-task']`).fill(`todo ${i}`);
                await page.locator(`//button[@id='add-task']`).click();   
            })
        }    

    })

    await test.step('Click vao trang Todo page', async() => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i<=100; i +=2){
            await page.locator(`//button[@id='todo-${i}-delete']`).click();
        }    

    })



})