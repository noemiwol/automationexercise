/// <reference types = "cypress"/>

export default class MainPage{

    static open(){
        
        cy.visit("");
    }

    static  logout(){
        cy.findByText(' Logout').click();
    }

    static  deleteAccount(){
        cy.findByText(' Delete Account').click();

    }
    static loggedInAs(){
        cy.findByText(' Logged in as ').click();
    }
}