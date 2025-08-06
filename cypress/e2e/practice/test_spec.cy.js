

describe('This is my firsttest suite', () => {
  
  it('TEST1', () => {
    
   expect(true).to.equal(true)

  })

  it('TEST2', () => {
    
   expect(true).to.equal(false)
   cy

  })

  it('test3',()=>{

    cy.visit("https://www.w3schools.com/")
  })

})

