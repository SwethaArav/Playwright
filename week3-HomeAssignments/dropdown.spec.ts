import { expect, test } from "@playwright/test";

test(`Leaftaps dropdown`, async ({page}) => {
     //launch url
    await page.goto(`https://leafground.com/select.xhtml`);
    await page.waitForLoadState('load');
    //Select your favorite UI automation tool using the different select options
    await page.selectOption(`//option[@class='ui-selectonemenu-label']`,{label:"Playwright"})
    
    const automationTool = page.locator(`//select[@class='ui-selectonemenu']`);
    //Get the count and print of all the values
    const automationToolCount = await automationTool.count();

    console.log(`Total number of automation Tool ${automationToolCount}`);

    for (let index = 0; index < automationToolCount; index++) {
        console.log(await automationTool.nth(index).innerText());    
    }
    //Choose your preferred Country
    await page.locator(`//h5[text()='Choose your preferred country.']/following-sibling::div`).click();
    await page.locator(`//li[text()='India']`).click();
    //Confirm Cities belongs to Country is loaded
    await page.locator(`//label[text()='Select City']`).click();
    await page.locator(`//li[text()='Chennai']`).click();


})