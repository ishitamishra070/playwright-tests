import {test, expect} from '@playwright/test';

test('handling alert' , async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");

    page.on('dialog', async (alert) => { //event listener for alert
      //  const text =  alert.message(); //print the message of the alert
        const text = await alert.defaultValue(); //print the message of the alert textbox
        console.log(text);       
        await alert.accept("ishita"); //accept the alert with text
    })
    await page.waitForTimeout(5000);
    await page.locator("button:has-text('Click Me')").nth(2).click(); 
    expect(page.locator("id=prompt-demo")).toContainText("'ishita'");


})

test('bootstarp modal alert' , async({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/");
    await page.click("//button[@data-target = '#myModal']")
    await page.waitForTimeout(5000);
    await page.click("(//button[text() ='Save Changes'])[1]")


})