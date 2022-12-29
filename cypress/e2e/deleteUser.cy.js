
import Navbar from "../page-objects/components/Navbar";
import LoginSingUpPage from "../page-objects/page/LoginPage";
import MainPage from "../page-objects/page/MainPage";
import {email,password} from "..//fixtures/user3.json"
import DeleteAccount from "../page-objects/page/DeleteAccount";

describe("Login to account", () =>{
    it('open hom page', () =>{
        //Arrange
           
        //Act
        MainPage.open();
   
        //Assert
        cy.url().should('contain', 'automationexercise.com');

    })

    it('click to login and enter email and password', () =>{
        //Arrange
        MainPage.open();
        Navbar.signupLogin();
        LoginSingUpPage.loginToAccount(email,password);
        Navbar.deleteAccount();


           
        //Act
        DeleteAccount.clickButtinContinue();

        //Assert
        cy.findByText('Signup / Login').should('contain', ' Signup / Login')

    })
})