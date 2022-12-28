/// <reference types = "cypress"/>

export default class Navbar{

    static goToHome(){

    cy.findByText('Home').click();        
        
    }

    static  products(){

        cy.findByText('Products').click();        
            
    }

    static  cart(){

        cy.findByText('Cart').click();        
            
    }

    static  signupLogin(){

        cy.findByText('Signup / Login').click();        
            
    }

    static  contactUs(){

        cy.findByText(' Contact us').click();        
            
    }
}