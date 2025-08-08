import { test } from "@playwright/test";


test(`Handle currency DropDown`,async ({page}) => {
    


    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();


    await page.locator(`//a[contains(text(),'CRM')]`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill("Accenture");
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Swetha`);
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`Siva`);

    await page.selectOption('#createLeadForm_currencyUomId',{value:"AFA"})

    const currencyDropdown = page.locator('#createLeadForm_currencyUomId>option');

    const currencyCount = await currencyDropdown.count();

    console.log(`Total number of currency ${currencyCount}`);

    for (let index = 0; index < currencyCount; index++) {
        console.log(await currencyDropdown.nth(index).innerText());    
    }

    await page.selectOption('#createLeadForm_generalCountryGeoId',{label:"Canada"})
    
    const countryDropdown = page.locator('#createLeadForm_generalCountryGeoId>option');

    const countryCount = await countryDropdown.count();

    console.log(`Total number of country ${countryCount}`);

    for (let index = 0; index < countryCount; index++) {
        console.log(await countryDropdown.nth(index).innerText());    
    }

})