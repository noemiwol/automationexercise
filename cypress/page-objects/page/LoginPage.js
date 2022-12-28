/// <reference types = "cypress"/>

export default class LoginSingUpPage{
    
    static loginToAccount(email, password){

        cy.get('[data-qa="login-email"]').type(email);
        cy.findByPlaceholderText('Password').type(password);
        cy.get('[data-qa="login-button"]').click();
        return this
    }
    static newUserSignup(name, email){

        cy.findByPlaceholderText('Name').type(name).as('name');
        cy.get('[data-qa="signup-email"]').type(email).as('email');
        cy.get('[data-qa="signup-button"]').click();

        return this
    }
    
}