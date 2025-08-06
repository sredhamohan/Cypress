
 describe('Assignment5', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/login")     
  
})


   it('Login Form Testing',()=>{       //Using the commands in test
   
    cy.login('practice','SuperSecretPassword!')
    cy.get("a[href='/logout']").should('be.visible') 

  
  });



   it.only('Login using Fillinput',()=>{       //used previoussubject
   
  
   cy.get('#username').fillnput('practice')
   cy.get('#password').fillnput('SuperSecretPassword!')
   cy.get('#login > .btn') .click()   //used another commad
   cy.get('b').should('have.text','You logged into a secure area!')  

  
  });

  


 })