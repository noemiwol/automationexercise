/// <reference types = "cypress"/>

export default class SingUpPage{

    static checkMr(){
        cy.get("#id_gender1").check();
    }
    static checkMrs(){
        cy.get("#id_gender2").check();
    }

    static chceckNameEmailIsFill(){
        cy.get("#name").as('name');
        cy.get("#email").as('email');
    }

    static fillPassword(password){
        cy.get('[data-qa="password"]').type(password).as('password');
        
        return this;

    }

    static dateOfBirth(day,month,year){
        cy.get("#days").select(day).as('day');
        cy.get("#months").select(month).as('month');
        cy.get("#years").select(year).as('year');

    }

    static checkNewsletter(){
        cy.get("#newsletter").check();
    }

    static checkReceiveSpecialOffers(){
        cy.get("#optin").check();

    }

    static addressInformation(firstName,lastName,company,address1,address2,country,state,city,zipcode,mobileNumber){

        cy.get("#first_name").type(firstName).as('firstName');
        cy.get("#last_name").type(lastName).as('lastName');
        cy.get("#company").type(company).as('company');
        cy.get("#address1").type(address1).as('address1');
        cy.get("#address2").type(address2).as('address2');
        cy.get("#country").select(country).as('country');
        cy.get("#state").type(state).as('state');
        cy.get("#city").type(city).as('city');
        cy.get("#zipcode").type(zipcode).as('zipcode');
        cy.get("#mobile_number").type(mobileNumber).as('mobileNumber');

        return this;

    }

    static clickButtonCreateAccount(){

        cy.get('[data-qa="create-account"]').click();
    }
}