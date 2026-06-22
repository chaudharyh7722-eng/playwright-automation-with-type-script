import test from "@playwright/test";
import { ForgotEmailPage } from "../pages/forgatEmail";

test.use({
    headless:false
})

    const baseUrl =("https://........../login");
    test.beforeEach(({page})=>{
        page.goto(baseUrl);
    }); 

const forgotEmailData = 
[
    '',                                  // Empty
  '   ',                               // Spaces
  'abc',                               // Plain text
  'john',                              // Name only
  'john@',                             // Missing domain
  '@gmail.com',                        // Missing username
  'john@gmail',                        // Missing TLD
  'john.com',                          // Missing @
  'john@.com',                         // Invalid domain
  'john@@gmail.com',                   // Double @
  'john@gmail..com',                   // Double dot
  'john gmail@gmail.com',              // Space in email
  'john#gmail.com',                    // Special character
  '<script>alert(1)</script>',         // XSS
  "' OR '1'='1",                       // SQL Injection
  'notregistered@gmail.com',           // Unregistered email
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com' // Long email
];

for(const email of forgotEmailData)
{
test(`Forgot Email With Invalid Email ${email}`,async({page})=>
{
    try{const forgotEmail = new ForgotEmailPage(page);
    await forgotEmail.getForgotEmail(email);
    await forgotEmail.getForgotEmailError();
}catch(error){
    console.error(`Error occurred while testing with email: ${email}`, error);
};
    // const forgotEamil = new ForgotEmailPage(page);
    // await forgotEamil.getForgotEmail(email);
    // await forgotEamil.getForgotEmailError();
});

}

test('forgot email with valid email',async({page})=>
    {
        try{
            const forgotEmail = new ForgotEmailPage(page);
            await forgotEmail.getForgotEmail('...............com');
            await page.url();
            console.log("Current URL after submitting valid email: " + page.url());
            
        }catch(error){
            console.error('Error occurred while testing with valid email', error);
        }

});
