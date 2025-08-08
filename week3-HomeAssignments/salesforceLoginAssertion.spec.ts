import { expect, test } from "@playwright/test";

test(`Salesforce Login Assertion`,async ({page}) =>{
    await page.goto(`https://login.salesforce.com/`);
    await page.locator(`#username`).fill(`swethasiva98923@agentforce.com`);
    await page.locator(`#password`).fill('Swetha#2006');
    await page.locator(`#Login`).click();
    await page.waitForTimeout(5000);
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle(`Home | Salesforce`);

    const url= page.url();
    console.log(url);
    await expect(page).toHaveURL(`https://orgfarm-767bb9207c-dev-ed.develop.lightning.force.com/lightning/page/home`);

})