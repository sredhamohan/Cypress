

describe('Assignment2', () => {
  
   it('1. Declare Variable and Update It',()=>{

    let a=10    //Declared  variable a
    let b=90
    let c= b+a  //100
    cy.log(c)
    a=20         //Updated the variable a    
    let i= c+a  //100+20
    cy.log(i)
  
  })

  it('2. Declare const variable and update',()=>{

    const empid=3291    //Declared  constant empdid
    let name ='sredha'
    if(name=='sredha'){

        empid='98282'          //updating the contant id  Getting type error while executing
    }
  
  })

  it('3. Create Array and sum them using looping',()=>{
    let totalMarks=0
    let marks=[100,200,300,400,500]       //Declared  array  named marks
    for(let i=0;i<=marks.length-1;i++){
       

        totalMarks=marks[i]+totalMarks      // Sum 
        cy.log(totalMarks)


    }
  
  })


  it('4. Write a function that returns "Even" or "Odd" for a number',()=>{

    let num=15                   //Variable declare
    if(num%2==0){                //condition for odd or even
        cy.log("Even Number")            
    }
    else
    {
        cy.log("Odd Number")
    }
  })

  
  it('5. Loop through numbers 1to10 and print only even numbers',()=>{

    let i;
      for(i=1;i<=10;i++){     //loop 1-10
      
       if (i%2==0){          //condition for even num
        cy.log(i)
      }       

      
   }


  })



})

