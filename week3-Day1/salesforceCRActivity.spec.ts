import { test } from "@playwright/test";

test(`Salesforce New Task`,async ({page}) =>{
    await page.goto(`https://login.salesforce.com/`);
    await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill('RaviSalesTest#1432');
    await page.locator(`#Login`).click();
    await page.waitForTimeout(5000);
    await page.locator(`(//div[@class='headerTrigger  tooltip-trigger uiTooltip']//span)[1]`).click();
    await page.locator(`//a[@title='New Task']`).click();
    await page.locator(`(//label[text()='Subject']/following::input)[1]`).click();


})