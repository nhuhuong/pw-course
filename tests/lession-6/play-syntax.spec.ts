import { test } from '@playwright/test';

test('test case name', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao bai 1', async() => {
            await page.locator(`//a[@href='01-xpath-register-page.html']`).click();

    })

    await test.step('Fill information', async() => {
        await page.locator(`//input[@id='username']`).fill('Huong');

    })

    await test.step('Fill information', async() => {
        await page.locator(`//input[@id='email']`).pressSequentially('huong@gmail.com',{delay: 1000});

    })

    let isChecked = await page.locator(`//input[@id='male']`).isChecked(); 
    if (isChecked == false){
        await page.locator(`//input[@id='male']`).check();
    } 

    await page.locator(`//input[@id='reading']`).check();

    await page.locator(`//select[@id='country']`).selectOption({value: 'uk'});

    await page.locator(`//select[@id='profile']`).setInputFiles('/data-test/image.png');

})

test('Xu ly mouse', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao bai 5 - mouse event', async() => {
            await page.locator(`//a[@href='018-mouse.html']`).click();

    })

    await test.step('Click vao vung checkt', async() => {
        await page.locator(`//div[@id='clickArea']`).dblclick();

})
})

test('Right click', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao bai 5 - mouse event', async() => {
            await page.locator(`//a[@href='018-mouse.html']`).click();

    })

    await test.step('Click vao vung checkt', async() => {
        await page.locator(`//div[@id='clickArea']`).click({button: 'right'});

    })
})  

test('event', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao bai 5 - mouse event', async() => {
            await page.locator(`//a[@href='018-mouse.html']`).click();

    })

    await test.step('Click vao vung check', async() => {
        await page.locator(`//div[@id='clickArea']`).click({modifiers: ['Shift']});

    })
}) 


test('click multiple times', async ({page}) => {
    await test.step('Navigate to material Playwright', async()=> {
        await page.goto('https://material.playwrightvn.com');

    })

    await test.step('Click vao bai 5 - mouse event', async() => {
            await page.locator(`//a[@href='018-mouse.html']`).click();

    })

    await test.step('Click vao vung check', async() => {
        await page.locator(`//div[@id='clickArea']`).click({clickCount:10});

    })
}) 

// Radio Checkbox
