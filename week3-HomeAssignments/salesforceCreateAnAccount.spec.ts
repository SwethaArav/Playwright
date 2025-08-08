import { expect, test } from "@playwright/test";

test(`Salesforce Create Account`,async ({page}) =>{
    await page.goto(`https://login.salesforce.com/`);
    await page.getByLabel(`Username`).fill(`swethasiva98923@agentforce.com`);
    await page.getByLabel(`Password`).fill('Swetha#2006');
    await page.locator(`#Login`).click();
    await page.waitForTimeout(5000);
    const pageTitle =await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle(`Home | Salesforce`);
    await page.locator(`//div[@class='slds-icon-waffle']`).click();
  //  await page.getByText('View All').click();
    await page.locator(`//button[@aria-label='View All Applications']`).click();
    await page.waitForTimeout(3000);
  //  await page.getByPlaceholder("Search apps and items...",{exact:true}).fill("Service");
    await page.locator(`//p[text()='Service']`).click();
    /* await page.getByPlaceholder('Search apps and items...').fill('Service');
    await page.locator(`(//p[@class='slds-truncate'])[1]`).click(); */
    await page.locator(`//span[text()='Accounts']`).click();
    await page.getByRole('button',{name:'New'}).click();
    let AccountName = await page.locator(`input[name='Name']`).fill(`AccName`);
    await page.waitForTimeout(5000);
    await page.locator(`//button[@name='SaveEdit']`).click();
  //  await page.waitForTimeout(3000);
    /* const toastMessage = "Created ${AccountName} is Created"
    const actualToastMessage = page.locator('#toastMessage slds-text-heading--small forceActionsText');
    await expect(actualToastMessage).toContainText(toastMessage); */
})