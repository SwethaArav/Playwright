// test interactions with checkboxes on the LeafGround "Checkbox"

import { expect, test } from "@playwright/test";

test(`Leaftaps checkbox`, async ({page}) => {
     //launch url
    await page.goto(`https://leafground.com/checkbox.xhtml`);
    await page.waitForLoadState('load');
    //Click on the "Basic Checkbox.”
    await page.locator(`//span[text()='Basic']/preceding-sibling::div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']`).click();
    //Click on the "Notification Checkbox."
    await page.waitForTimeout(3000);
    await page.locator(`(//span[text()='Ajax']/preceding-sibling::div)[2]`).click();
    //Verify that the expected message is displayed.
    const notification = page.locator(`//span[@class='ui-growl-title']`);
    await expect(notification).toBeVisible();
    let text = await notification.innerText();
    console.log(`Notification text is ${text}`);
    //Click on your favorite language (assuming it's related to checkboxes).
    await page.locator(`//label[text()='Javascript']/preceding-sibling::div`).click();
    //Click on the "Tri-State Checkbox."
    await page.locator(`(//h5[text()='Tri State Checkbox']//..//div)[3]`).click();
    //Verify which tri-state option has been chosen.
    const Tristate = page.locator(`//span[text()='State has been changed.']`);
    await expect(Tristate).toBeVisible();
    let state = await Tristate.innerText();
    console.log(`state is ${state}`);
    //Click on the "Toggle Switch."
    await page.waitForTimeout(3000);
    await page.locator(`//h5[text()='Toggle Switch']/following-sibling::div`).click();
    //Verify that the expected message is displayed.
    const toggleMsg = page.locator(`//span[@class='ui-growl-title']`);
    await page.waitForLoadState('load');
    await page.waitForTimeout(6000);
    await expect(toggleMsg).toBeVisible();
    let msg = await toggleMsg.innerText();
    console.log(`toggleMsg text is ${msg}`);
    //Verify if the Checkbox is disabled.
    const disabledCheckbox = page.locator(`//input[@disabled='disabled']`);
    await expect(disabledCheckbox).toBeDisabled();
    //Select multiple options on the page (details may be needed).
    await page.locator(`//div[@role='combobox']/ul`).click(); 
    await page.waitForTimeout(6000);
    await page.locator(`//li[@data-item-value='Paris']/div`).click(); 
    await page.locator(`//li[@data-item-value='Rome']/div`).click(); 
    await page.locator(`//li[@data-item-value='Berlin']/div`).click(); 
  //  await page.locator(`(//div[@class='ui-widget-header ui-corner-all ui-selectcheckboxmenu-header ui-helper-clearfix']/div)[1]`).click();
    await page.locator(`(//h5[text()='Tri State Checkbox']//..//div)[3]`).click(); 
    //verify selected countries
    const selectedCountry = page.locator(`//div[@role='combobox']/ul`)
    const selCountryCount = await selectedCountry.count();
    for (let index = 0; index < selCountryCount; index++) {
        console.log(await selectedCountry.nth(index).innerText());    
    }

})