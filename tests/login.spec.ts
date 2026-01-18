import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/login.page";


test.describe('user should be able to login to the application', () => {

    test('should be able to login', async ({page}) =>{

         const loginpage = new LoginPage(page);
    await loginpage.navigateToLoginPage("");
    await loginpage.login("","");
    const error =(await loginpage.errorMessageText())
    expect(error).toContain("")
    }
)}
)   
    
