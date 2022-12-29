
/// <reference types = "cypress"/>

export default class DeleteAccount{

    static clickButtinContinue(){
        cy.get('[data-qa="continue-button"]').click();
    }
}