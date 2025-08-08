import { expect, test } from "@playwright/test";

test(`Edit Lead using playwright locators`, async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.getByLabel(`Username`).fill(`Demosalesmanager`);
    await page.getByLabel(`Password`).fill(`crmsfa`);
    await page.getByRole(`button`,{name:"Login"}).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Find Leads']`).click();
    await page.locator(`(//label[text()='First name:']/following::input[@name='firstName'])[3]`).fill(`Swetha`);
    await page.locator(`//button[text()='Find Leads']`).click();
    await page.locator(`(//div[@class='x-grid3-cell-inner x-grid3-col-firstName']/a)[1]`).click();
    await page.locator(`//a[text()='Edit']`).click();
    await page.locator(`#updateLeadForm_companyName`).fill(`PwC`);
    await page.locator(`#updateLeadForm_annualRevenue`).fill(`20LPA`);
    await page.locator(`#updateLeadForm_departmentName`).fill(`Testing`);    
    const expectedDescription = `Updated Company name, Annual Revenue and Department successfully`
    await page.locator(`#updateLeadForm_description`).fill(`Updated Company name, Annual Revenue and Department successfully`);
    await page.locator(`//input[@value='Update']`).click();
    const pageTitle =await page.title();
    console.log(pageTitle);
    const actualDescription = page.locator('#viewLead_description_sp');
    await expect(actualDescription).toContainText(expectedDescription);
})