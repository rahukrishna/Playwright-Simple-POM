import { Locator, Page } from "@playwright/test";
import { LOGIN_LOCATORS } from "./locators/login.locators";



export class LoginPage{

    private page : Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly signinButton : Locator;
    readonly errorMessage : Locator;
    constructor(page:Page){
        this.page = page;
        this.usernameInput= page.locator(LOGIN_LOCATORS.USERNAME_INPUT);
        this.passwordInput= page.locator(LOGIN_LOCATORS.PASSWORD_INPUT);
        this.signinButton= page.locator(LOGIN_LOCATORS.LOGIN_BUTTON);
        this.errorMessage= page.locator(LOGIN_LOCATORS.ERROR_MESSAGE);
    }

    async enterUsername(username:string){
        await this.usernameInput.fill(username);
    }
    async enterPassword(password:string){
        await this.passwordInput.fill(password);
    }
    async navigateToLoginPage(url:string){
        await this.page.goto(url);
    }

    async login (username: string, password: string){
await this.usernameInput.fill(username);
await this.passwordInput.fill(password)
await this.signinButton.click();
    }

    async  errorMessageText(){

        const text = this.errorMessage.innerText();
        return text;
    }
}