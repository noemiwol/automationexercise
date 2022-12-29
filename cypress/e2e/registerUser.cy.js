import Navbar from "../page-objects/components/Navbar";
import LoginSingUpPage from "../page-objects/page/LoginPage";
import MainPage from "../page-objects/page/MainPage"
import {name,email,password,day,month,year,firstName,lastName,company,address1,address2,country,state,city,zipcode,mobileNumber} from "..//fixtures/user3.json"
import SingUpPage from "../page-objects/page/SingUpPage";

describe("Home page is visible successfully'", () =>{
    
     it('Verify that home page is visible successfully', () =>{
        
         //Arrange
        
         //Act
         MainPage.open();

         //Assert
         cy.url().should('contain', 'automationexercise.com') 
     })
    
 })

describe("Register User", () =>{
    beforeEach(() => {

        MainPage.open();
        
      
      })
    it('Verify that login / singup pageis visible successfully', () =>{
         //Arrange

         //Act
         Navbar.signupLogin();

         //Assert
         cy.url().should('contain', 'login') 
     })

     it(' Verify New User Signup! is visible', () =>{
         //Arrange
         
         //Act
         Navbar.signupLogin();
        
         //Assert
         cy.findByText('New User Signup!').should('be.visible');
     })

    it(' Verify that ENTER ACCOUNT INFORMATION  is visible', () =>{
        //Arrange
        Navbar.signupLogin();
        //Act
        LoginSingUpPage.newUserSignup(name,email)
        
        //Assert
        cy.findByText('Enter Account Information').should('be.visible');
        cy.url().should('contain', 'signup') 
    })

    it('Fill details and Verify that ACCOUNT CREATED! is visible', () =>{
        //Arrange
        Navbar.signupLogin();
        LoginSingUpPage.newUserSignup(name,email)
        //Act
        SingUpPage.checkMrs();
        SingUpPage.fillPassword(password);
        SingUpPage.dateOfBirth(day,month,year);
        SingUpPage.checkNewsletter();
        SingUpPage.checkReceiveSpecialOffers();
        SingUpPage.addressInformation(firstName,lastName,company,address1,address2,country,state,city,zipcode,mobileNumber);
        SingUpPage.clickButtonCreateAccount();

        //Assert
        cy.findByText('Account Created!').should('be.visible');
    })
  
})
