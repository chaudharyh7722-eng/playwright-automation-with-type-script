import {Locator, Page} from "@playwright/test";

export class ForgotEmailPage{
    readonly page:Page;
    readonly forgot_password_link:Locator;
    // readonly forgot_email_heading:Locator;
    // readonly forgot_email_note:Locator;
    readonly email_textfield:Locator;
    readonly email_error:Locator;
    readonly submit_button:Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.forgot_password_link=page.locator("//a[text()='Forgot password?']")
        // this.forgot_email_heading=page.locator("//input[@placeholder='you@example.com']/following::p");
        // this.forgot_email_note=page.locator("//h1[contains(text(),'Forgot Email')]/following::p[contains(text(),'Enter your registered email address to receive instructions on how to reset your email.')]");
        this.email_textfield=page.locator("//input[@placeholder='you@example.com']");
        this.email_error=page.locator("//input[@placeholder='you@example.com']/following::p");
        this.submit_button=page.locator("//button[@type='submit']");
    }

    async getForgotEmail(email: string){
        await this.forgot_password_link.click();
        // await this.forgot_email_heading.innerText();
        // await this.forgot_email_note.innerText();
        await this.email_textfield.fill(email);
        await this.submit_button.click();
        await this.page.waitForTimeout(1000);
    }

    async getForgotEmailError(){
        const emailError = await this.email_error.textContent();
        console.log("Forgot Email Error Message: " + emailError);
    }
}