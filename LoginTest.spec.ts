import {test} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
test.use({
    headless:false
});
const baseUrl = ("https://.........com/login");
test.beforeEach(async({page})=>
    {
    await page.goto(baseUrl);
    });

const logindata=[
    //Both Empty
    ['', ''],
    // Empty Email
    ['', 'Password@123'],
    // Empty Password
    ['test@gmail.com', ''],
    // Invalid Email Format
    ['abc', 'Password@123'],
    ['john', 'Password@123'],
    ['john@', 'Password@123'],
    ['john@gmail', 'Password@123'],
    ['@gmail.com', 'Password@123'],
    ['john.com', 'Password@123'],
    ['john@.com', 'Password@123'],
    // Spaces
    ['   ', 'Password@123'],
    ['test@gmail.com', '   '],
    // Unregistered Email
    ['notregistered@gmail.com', 'Password@123'],
    ['dummy@test.com', 'Password@123'],
    // Registered Email + Wrong Password
    ['surtja@gmail.com', 'Sys@1234'],
    ['hemant.rewathi@gmail.com', '123456'],
    // Invalid Password Formats
    ['test@gmail.com', '123'],
    ['test@gmail.com', 'abc'],
    ['test@gmail.com', 'password'],
    ['test@gmail.com', '!@#$%^'],
    // SQL Injection
    ["' OR '1'='1", "' OR '1'='1"],
    // XSS
    ['<script>alert(1)</script>', 'Password@123'],
    // Long Values
    ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com', 'Password@123'],
    ['test@gmail.com', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa']
];

for(const[email, password] of logindata){
    test(`invalid login ${email}|${password}`, async({page})=>
        {
            const login = new LoginPage(page);
            await login.getLogin(email, password);
            await login.getloginErrorMessage();
            
        }
    );
}
// test.only('login with valid credentials',async ({page})=>{
//  const loginPage = new LoginPage(page);
//  await loginPage.getLogin('...........', '............');
//  const currenturl = page.url();
//  console.log(currenturl);

// });
test.only('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.getLogin(
    '.........@gmail.com',
    '..........3'
  );
  const expectedUrl = "https://.........../user/dashboard";
  const currentUrl = page.url();
  if(currentUrl === expectedUrl){
    console.log("Login successful, navigated to the dashboard.");
  }else{
    console.log(`Login failed or navigated to an unexpected page. Current URL: ${currentUrl}`);
  }
});
