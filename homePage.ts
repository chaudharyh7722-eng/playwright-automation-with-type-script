import {Page, Locator, expect} from "@playwright/test"

export class HomePage
{
    //Header Section
    readonly page: Page;
    readonly Atlaslogo: Locator;
    readonly main_search_bar: Locator;
    readonly healthy_tab: Locator;
    readonly punch_button: Locator;
    readonly clock_button: Locator;
    readonly notification_icon: Locator;
    readonly account_tab: Locator;
    //body section 
    readonly my_dashboard:Locator;

    

    constructor(page:Page)
    //header section element mean nav bar
    {
        this.page = page;
        this.Atlaslogo = page.locator("//span[text()='AtlasPMS']");
        this.main_search_bar = page.locator("//span[text()='Search...']");
        this.healthy_tab = page.locator("//span[text()='Healthy']");
        this.punch_button = page.locator("//button[contains(@title,'Clock')]");
        this.clock_button = page.locator("//div[@class='relative']/child::button[@aria-label='Time Tracking']");
        this.notification_icon = page.locator("//nav[@aria-label='User menu']/child::div[3]");
        this.account_tab = page.locator("//nav[@aria-label='User menu']/child::div[4]");
        this.my_dashboard = page.locator("//span[@aria-current='page']")
        
    }
    //body section
    

    //header section modules verification 
    async verifyHomePage()
    {
        await expect(this.Atlaslogo).toBeVisible();        
    }
    async verifySearchBar()
    {
        await expect(this.main_search_bar).toBeVisible();    
    }
    async verifyHealthyTab()
    {
        await expect(this.healthy_tab).toBeVisible();
    }
    async verifyPunchButton()
    {
        await expect(this.punch_button).toBeVisible();
        await expect(this.punch_button).toBeEnabled();
        const text = await this.punch_button.innerText();
        console.log(text);
    }
    async verifyClock()
    {
        await expect(this.clock_button).toBeVisible();
        await expect(this.clock_button).toBeEnabled();

    }
    async verifyNotificationButton()
    {
         await expect(this.notification_icon).toBeVisible();
         await expect(this.notification_icon).toBeEnabled();
    }
    async verifytheAccount()
    {
       await expect(this.account_tab).toBeVisible();
       await expect(this.account_tab).toBeEnabled();
    }
    //now we are verify the functionality of header module
    async verifyFuntionalityOFAtlasLogo()
    {
        await this.Atlaslogo.click();

    } 









}