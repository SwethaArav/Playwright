import { test } from "@playwright/test";

test(`Myntra checkbox`,async ({page}) =>{
    await page.goto(`https://www.myntra.com/`);
    await page.locator(`(//a[text()='Men'])[1]`).click();
    await page.locator(`//a[contains(@href,'/tshirts-for-men')]//img`).click();
    await page.locator(`//input[@value='Roadster']/following-sibling::div[@class='common-checkboxIndicator']`).click();
})