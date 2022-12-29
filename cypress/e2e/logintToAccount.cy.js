import Navbar from "../page-objects/components/Navbar";
import LoginSingUpPage from "../page-objects/page/LoginPage";
import MainPage from "../page-objects/page/MainPage";
import {email,password,name} from "..//fixtures/user2.json"

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
           
        //Act
        LoginSingUpPage.loginToAccount(email,password);
        Navbar.loggedInAs(name);

        //Assert
        cy.get('@loggedInAs').should('contain', name)
    })
})
