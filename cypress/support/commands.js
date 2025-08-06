// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {    //login command and fil the login form and submit

    cy.get('#username').type(username)
    cy.get('#password').type(password)
     cy.get('#login > .btn') .click()   //used another commad
     cy.get('b').should('have.text','You logged into a secure area!')  
 })


 
 Cypress.Commands.add('fillnput',{ prevSubject: 'element'} ,(locator,text) => {    //login command and fil the login form and submit
    cy.wrap(locator).should('be.visible');
     cy.get(locator).type(text)
 })

 /*


 Cypress.Commands.add('PrevCommadn',{ prevSubject: 'element'} ,(userNameLocator,username,password) => {    //login command and fil the login form and submit
    cy.wrap(userNameLocator).should('be.visible');
    cy.login(username, password)
 })
*/

 





