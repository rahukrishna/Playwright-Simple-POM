import { Page } from 'playwright';
import {expect} from '@playwright/test';

export class CommonFunctions {

    constructor(private page: Page) {}

    async waitForPageLaod(){
        await this.page.waitForLoadState('networkidle');
    }

    async getPageTitle(){
        return await this.page.title();
    }

    async verifyTitle(expectedTitle: string)
    {       
     expect(await this.getPageTitle()).toBe(expectedTitle);
    }

    async verifyUrl(expectedUrl: string){
        expect(this.page.url()).toBe(expectedUrl);
    }

    async moveToNewTab(){
        
            const pages = this.page.context().pages();
            
            const newPage = pages[pages.length - 1];
            await newPage.bringToFront();
            this.page = newPage;    
        }

    async handleNewTab(){
        const [newPage] = await Promise.all([
            await this.page.context().waitForEvent('page'),
            await this.page.locator('a[target="_blank"]').click()
        ]);

        await newPage.bringToFront();
        this.page = newPage;
            

}
}


