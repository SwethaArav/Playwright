import { expect, test } from "@playwright/test";

test(`Leafground Buttons Assertion`,async ({page}) =>{
    //launch url
    await page.goto(`https://leafground.com/button.xhtml`);
    await page.waitForLoadState('load');
    //click the button
    await page.locator(`//span[text()='Click']`).click();
    await page.waitForTimeout(3000);
    //confirm a title
    const pageTitle = await page.title();
    console.log(`Page title is ${pageTitle}`);
    //back to actual page
    await page.goBack();
    //check whether the button is disabled
    const disabled = page.locator(`//span[text()='Disabled']`);
    await expect(disabled).toBeDisabled();
    //click image button
    await page.locator(`//span[text()='Image']`).click();
    //click save button
    await page.locator(`//span[text()='Save']`).click();
    //list of rounded buttons in the page
    await page.waitForSelector(`//h5[text()='How many rounded buttons are there?']/following::button`);
    const roundedButtons = page.locator(`//h5[text()='How many rounded buttons are there?']/following::button`);
    const roundedButtonsCount = await roundedButtons.count();
    console.log(`No of rounded buttons ${roundedButtonsCount}`);

    for (let index = 0; index < roundedButtonsCount; index++) {
        console.log(await roundedButtons.nth(index).innerText());    
    }
    

})