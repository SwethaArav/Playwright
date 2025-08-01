import { chromium, test  } from "@playwright/test";


test(`Test to launch Browser using page fixture`, async({page}) => { 


    await page.goto("https://www.amazon.in/")


    const url = page.url()


    console.log(`The url of the page is ${url}`);
    


    


})