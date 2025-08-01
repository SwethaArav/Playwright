import { chromium, test } from "@playwright/test";
test("Launch Chromw Browser",async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/")
    const url = page.url()
    console.log(`The url of the page is ${url}`);
})