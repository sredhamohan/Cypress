
 describe('Assignment3', () => {



   it('1.1 Function Declaration',()=>{          // declared function inside it

   function logWelcome(){
    cy.log("Welcome to Cypress Training!")
    }

    let c=logWelcome()
  })



    it('1.2 Function Expression',()=>{   
        
        
    function printUserEmail(emailInput){    //defined function for function expression
    cy.log(emailInput)
    }
  
    let userName=printUserEmail("sredha.mohan@enadava.com")        //calling the functionto print user email 
  
  })



    it('1.3 Arrow function',()=>{   
        
        
    let multi=(a,b,c)=>{
        return a*b*c
    }

   cy.log(multi(2,2,2)) .s  //calling arrww function


  })

})