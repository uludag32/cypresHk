import { GoToMainPage } from './GoToMainPage';
const homePage = new GoToMainPage
import homePageLocates from "../../locates/homePageLocates";




describe("POM", () => {
    it("POM", () => {
        homePage.GoToMainPage();
    });
    it("click form link", () => {
        homePage.GoToMainPage();
        homePage.clickAndAssertFormLink();
    });
    it.only('click alert link with return', () => {
        homePage.GoToMainPageWithReturn().clickAndAssertAllert();
        
    });

describe.only('locate pom', () => {
    it('locate form page', () => {
        homePageLocates.goToHomePageLink();
        homePageLocates.locateFormPage.click();
    });

});
});