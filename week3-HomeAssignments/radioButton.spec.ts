import { expect, test } from "@playwright/test";

test(`Leafground radiobutton`, async ({page}) => {
     //launch url
    await page.goto(`https://leafground.com/radio.xhtml`);
    await page.waitForLoadState('load');
    //check the default selected radio button
    const defaultValue = page.locator(`(//input[@checked='checked' and @type='radio'])[4]`);
    await expect(defaultValue).toBeChecked();
    //click fav browser and check whether it is checked
    const favBrowser =page.locator(`(//label[text()='Chrome'])[1]`);
//    await expect(favBrowser).toBeVisible();
    await favBrowser.click();
    await expect(favBrowser).toBeChecked();
    await page.locator(`//label[text()='Chennai']`).click();
    //check default value selected in age group
    const ageGroup = page.locator(`(//input[@checked='checked' and @type='radio'])[5]`);
    await expect(ageGroup).toBeChecked();

    })