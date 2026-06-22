import {Locator, Page} from "@playwright/test";

export class LoginPage
{
    //declear the variable
    readonly page:Page;
    readonly welcomeTxt:Locator;
    readonly welcomeNote:Locator;
    readonly emailTextFiel:Locator;
    readonly email_error:Locator;
    readonly passwordTextField:Locator;
    readonly password_error:Locator;
    readonly eyebutton:Locator;
    readonly remember_me_checkBox:Locator;
    // readonly forgot_password_link:Locator;
    readonly prvcy_polcy:Locator;
    readonly term_cond:Locator;
    readonly sign_in:Locator;
    // readonly loginErrorMessage: Locator;


    constructor(page:Page)
    {
        //locatte varaible
        this.page = page;
        this.welcomeTxt=page.locator("//h1[contains(text(),'Welcome')]");
        this.welcomeNote=page.locator("//h1[contains(text(),'Welcome')]/following::p[contains(text(),'Sign in to')]");
        this.emailTextFiel=page.locator("//input[@name='email']");
        this.email_error=page.locator("//input[@name='email']/following::p[1]");
        this.passwordTextField=page.locator("//input[@name='password']");
        this.password_error=page.locator("//input[@name='password']/following::p[1]");
        this.eyebutton=page.locator("//input[@name='password']/following::button[@aria-label='Show password']");
        this.remember_me_checkBox=page.locator("#remember-me");
        this.prvcy_polcy=page.locator("//a[text()='Privacy Policy']");
        this.term_cond=page.locator("//a[text()='Terms of Service']");
        // this.forgot_password_link=page.locator("//a[text()='Forgot Password?']");
        this.sign_in=page.locator("//button[@type='submit']");
    }

    //resuable method
    async getLogin(email:string, password:string,)
    {
        await this.welcomeTxt.innerText();
        await this.welcomeNote.innerText();
        await this.emailTextFiel.fill(email);
        await this.passwordTextField.fill(password);
        await this.remember_me_checkBox.click();
        // await this.prvcy_polcy.click();
        // await this.term_cond.click();
        await this.sign_in.click();
        await this.page.waitForTimeout(1000);
    }
    async getloginErrorMessage(){
        const emailerror = await this.email_error.textContent();
        const passworderror = await this.password_error.textContent();
        console.log("Email Error Message: " + emailerror);
        console.log("Password Error Message: " + passworderror);
    }



}