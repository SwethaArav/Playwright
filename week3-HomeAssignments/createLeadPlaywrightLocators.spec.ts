import { expect, test } from "@playwright/test";

test(`Create Lead using playwright locators`, async({page})=>{
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.getByLabel(`Username`).fill(`Demosalesmanager`);
    await page.getByLabel(`Password`).fill(`crmsfa`);
    await page.getByRole(`button`,{name:"Login"}).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`#createLeadForm_companyName`).fill(`Accenture`);
    const expectedCompanyName = `Accenture`;
    await page.locator(`#createLeadForm_firstName`).fill(`Swetha`);
    const expectedFirstName = `Swetha`;
    await page.locator(`#createLeadForm_lastName`).fill(`Arav`);
    const expectedLastName = `Arav`;
    await page.selectOption(`#createLeadForm_dataSourceId`,{value:'LEAD_DIRECTMAIL'});
    await page.locator(`#createLeadForm_personalTitle`).fill(`Mrs.`);
    await page.locator(`//input[@name='annualRevenue']`).fill(`12LPA`);
    await page.locator(`//input[@name='departmentName']`).fill(`Testing`);
    await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill(`9877655456`);
    await page.locator(`//input[@name='submitButton']`).click();
    const pageTitle =await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle(`View Lead | opentaps CRM`);

    const actualCompanyName = page.locator('#viewLead_companyName_sp');
    await expect(actualCompanyName).toContainText(expectedCompanyName);
    
    const actualFirstName = page.locator('#viewLead_firstName_sp');
    await expect(actualFirstName).toContainText(expectedFirstName);

    const actualLastName = page.locator('#viewLead_lastName_sp');
    await expect(actualLastName).toContainText(expectedLastName);
    
    const status = page.locator('#viewLead_statusId_sp');
    await expect(status).toContainText(`Assigned`);
} )