import {expect, test} from "@playwright/test";
import {HomePage} from "../page/homePage";
import { LoginPage } from "../page/login_page";

const baseUrl = "https://............../login";

test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.getLogin(
        '.............com',
        '.............123'
    );
    await expect(page).toHaveURL(
        'https://atlas.rewathi.com/user/dashboard'
    );
});



test('Verify Home Page Header Elements', async ({page}) => {
  const pageTitle = await page.title();
 console.log("Actual Title:", pageTitle);
await expect(page).toHaveTitle(
    "AtlasPMS-Project Management System"
);
    const homepage = new HomePage(page);
    await homepage.verifyHomePage();
    await homepage.verifySearchBar();
    await homepage.verifyHealthyTab();
    await homepage.verifyClock();
    await homepage.verifyPunchButton();
    await homepage.verifyNotificationButton();
    await homepage.verifytheAccount();
});
//Verify the functionality of header module




