import { test, expect } from  '@playwright/test';

test('Interaction with inputs', async ({page}) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const messageInput =  page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log('Before entering the data:'+await messageInput.inputValue());
    await messageInput.type("Hi Koushik");
    console.log('After entering the data:'+await messageInput.inputValue());

}) 

test('Sum' , async ({page}) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const sum1Input = page.locator("input#sum1");
    const sum2Input = page.locator("input#sum2");
    const getValuesBtn = page.locator("//button[text() = 'Get Sum']");

    let num1 = 121;
    let num2 = 546;

    await sum1Input.fill(""+num1);
    await sum2Input.fill(""+num2);
    await getValuesBtn.click()
    await page.waitForTimeout(3000);

    const result = page.locator("p#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    await expect(result).toHaveText(""+ expectedResult);

})

test('Checkbox', async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/");

    const singleCheckbox = page.locator("id=isAgeSelected")
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked();


})