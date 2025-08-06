

describe('Assignment1', () => {
  
  it('Login functionality',()=>{

    cy.visit("https://practice.expandtesting.com/login")
    cy.get('#username').click().type("practice")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('#login > .btn').click()
  
  })

    it('Logout functionality',()=>{

    cy.visit("https://practice.expandtesting.com/login")
    cy.get('#username').click().type("practice")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('#login > .btn').click()

    cy.get('.icon-2x').click()
  
  })




})

