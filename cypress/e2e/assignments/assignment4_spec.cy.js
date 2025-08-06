
 describe('1: Login Form Testing', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/login")       // will be calling before  each test
  
})


   it('Login Form Testing',()=>{    
   

    cy.get('#username').type("practice")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('#login > .btn').click()
    cy.url().should('include', '/secure')    //asserting the url that /secure is available
    cy.get('b').should('have.text','You logged into a secure area!')   //asserting the text
    cy.get("a[href='/logout']").should('be.visible')  //validating logout button available

  
  });

   it('Negetive TC-InvalidUserName',()=>{    
   

    cy.get('#username').type("testInvalid")   //invalidusername
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('#login > .btn').click()
     cy.get('#flash').children().should('have.text','Your username is invalid!')   //asserting the text 

  
  });
   it('Negetive TC-InvalidPassword',()=>{    
   

    cy.get('#username').type("practice")
    cy.get('#password').type("ghhghgh!")    //invalid password
    cy.get('#login > .btn').click()
     cy.get('#flash').children().should('have.text','Your password is invalid!')   //asserting the text 

  
  });
 });


 describe('2: Registration Form Validation', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/register")       // will be calling before  each test
  
})


   it('Valid Registration Testing',()=>{    
   

    cy.get('#username').type("learn2025")            //need to change before every execution
    cy.get('#password').type("password")
     cy.get(' #confirmPassword').type("password")   
    cy.get('[data-testid="register"] > .btn').click()
    cy.get('#flash > b').should('have.text','Successfully registered, you can log in now.')   //asserting the text
   

  
  });

   it('Negetive TC-Invalid confirmPassword',()=>{    
   

    cy.get('#username').type("invalid3")              //need to change before every execution
    cy.get('#password').type("password3")              //need to change before every execution
    cy.get(' #confirmPassword').type("invalid")   
    cy.get('[data-testid="register"] > .btn').click()
    cy.get('#flash > b').should('have.text','Passwords do not match.')   //asserting the text
  

  
  });

   it('Negetive TC-empty',()=>{    
   
    cy.get('#username').type("empty3")         //need to change before every execution
    
    cy.get('[data-testid="register"] > .btn').click()
    cy.get('#flash > b').should('have.text','All fields are required.')   //asserting the text
  
  
  });


  
  
 });


 
 describe('3: Checkbox Interaction', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/checkboxes")       // will be calling before  each test
  
})


   it('Validation of checkbox',()=>{    
   

    cy.get('#checkbox2').should('be.checked')             //On page load asserting that checkbox 2 is checked and checkbox 1 is not checked
    cy.get('#checkbox1').should("not.be.checked")

      cy.get('#checkbox1'). check()
      cy.get('#checkbox1').should('be.checked')    //asserting
      cy.get('#checkbox2'). uncheck()  
      cy.get('#checkbox2').should("not.be.checked")


   
  });


  
  
 });

 
 describe('2: Registration Form Validation', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/register")       // will be calling before  each test
  
})


   it('Valid Registration Testing',()=>{    
   

    cy.get('#username').type("learn2025")            //need to change before every execution
    cy.get('#password').type("password")
     cy.get(' #confirmPassword').type("password")   
    cy.get('[data-testid="register"] > .btn').click()
    cy.get('#flash > b').should('have.text','Successfully registered, you can log in now.')   //asserting the text
   

  
  });

   it('Negetive TC-Invalid confirmPassword',()=>{    
   

    cy.get('#username').type("invalid3")              //need to change before every execution
    cy.get('#password').type("password3")              //need to change before every execution
    cy.get(' #confirmPassword').type("invalid")   
    cy.get('[data-testid="register"] > .btn').click()
    cy.get('#flash > b').should('have.text','Passwords do not match.')   //asserting the text
  

  
  });

   it('Negetive TC-empty',()=>{    
   
    cy.get('#username').type("empty3")         //need to change before every execution
    
    cy.get('[data-testid="register"] > .btn').click()
    cy.get('#flash > b').should('have.text','All fields are required.')   //asserting the text
  
  
  });


  
  
 });


 
 describe('4: Assertion', () => {

  beforeEach(() => {

     cy.visit("https://practice.expandtesting.com/assertions/")       // will be calling before  each test
  
})


   it.only('Validation of assertion',()=>{    
   

    cy.get('.text-center > .btn').should('exist')           //On page load asserting that checkbox 2 is checked and checkbox 1 is not checked
  
    cy.get('.text-center > .btn').should('have.text','Buy us a coffee')  //asserting the text
    cy.get('.navbar-brand').should('be.visible')   //asserting the visibility
    

   
  });


  
  
 });