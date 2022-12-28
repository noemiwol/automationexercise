
/// <reference types = "cypress"/>

export default class AccountCreated{

    static clickButtinContinue(){
        cy.get('[data-qa="continue-button"]').click();
    }
}