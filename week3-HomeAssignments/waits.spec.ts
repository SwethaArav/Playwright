import { expect, test } from "@playwright/test";

test(`Leafground waits`, async ({page}) => {
     //launch url
    await page.goto(`https://leafground.com/waits.xhtml`);
    await page.waitForLoadState('load');
    // wait for element to be visible
    await page.locator(`(//span[text()='Click'])[1]`).click();
    await page.waitForSelector(`//span[text()='I am here']`);
    const iamHere = page.locator(`//span[text()='I am here']`);
    await expect(iamHere).toBeVisible();
    // wait for element to be disabled
    await page.locator(`(//span[text()='Click'])[2]`).click();
    await page.waitForTimeout(10000);
    const disabled = page.locator(`//span[text()='I am about to hide']`);
    expect(disabled).toBeDisabled;
    // wait for text to be changes
    await page.locator(`(//span[text()='Click'])[3]`).click();
    await page.waitForSelector(`//span[text()='Did you notice?']`);
    const newText = page.locator(`//span[text()='Did you notice?']`);
    expect(newText).toContainText(`Did you notice?`)


})