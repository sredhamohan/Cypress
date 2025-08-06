import user from '../../fixtures/user.json';
import formData from   '../../fixtures/formData.json';
import '@4tw/cypress-drag-drop';

 describe('Assignment6', () => {
   beforeEach(()=>{

       
   cy.visit("https://practice.expandtesting.com") ;
   })



   it('1.1 Login Testing using fixture',()=>{     
   

    cy.get("[id='search-input']").type("Test Login Page")
    cy.get("[href='/login']").eq(1).click()
    cy.get('#username').type(user.userName)
    cy.get('#password').type(user.password)
    cy.get('#login > .btn').click()
    cy.get('.icon-2x').click()
  
  });
  it('1.2 Login Form Validation Testing',()=>{      
   
 
   cy.get("[id='search-input']").type("form Validation")
   cy.get("[href='/form-validation']").eq(1).click()
   cy.get('#validationCustom01').clear().type(formData.contactName)
   cy.get(':nth-child(2) > #validationCustom05').type(formData.contactNumber)
   cy.get("Input[id='validationCustom05']").eq(1).click().type(formData.DOB);
   cy.get('select').select(formData.paymentMethod)
   cy.get("[type='Submit']").click()    
  
  });

   it('2.1 check box',()=>{      
   
 //check boxes
   cy.get("[id='search-input']").type("check boxes")       
   cy.get("[href='/checkboxes']").eq(1).click()
   cy.get('#checkbox1').check().should('be.checked')
   cy.get('#checkbox2').uncheck().should('not.be.checked')

   });

   it('2.2 dropdown',()=>{     
       
   //dropdown
   cy.get("[id='search-input']").type("dropdown")  
   cy.get("[href='/dropdown']").eq(1).click()
   cy.get("select#country").select('India') .should('have.value','IN') 

  
  });
    it('2.3 Radio',()=>{     
       
   //radio button
   cy.get("[id='search-input']").type("radio")  
   cy.get("[href='/radio-buttons']").eq(1).click()
   cy.get("[id='blue']").check().should('be.checked')  
   cy.get("[id='red']").check().should('be.checked')
  
  });

   it('3.1 scroll in an element',()=>{     
       
   //scroll in to an element
   cy.get("[id='search-input']").type("scrollbars")  
   cy.get("[href='/scrollbars']").eq(1).click()
   cy.get('#hidingButton').scrollIntoView().click()

  
  });
   it('3.2 Drag and drop',()=>{     
       
   //drag and drop
   cy.get("[id='search-input']").type("Drag and Drop Circles")  
   cy.get("[href='/drag-and-drop-circles']").eq(1).click()
  /* cy.get('.blue').trigger('#target')
 
   cy.get('.blue').drag('#target');   //test passing, but ui its not dropping
*/
  const dataTransfer = new DataTransfer();

  cy.get('.blue').trigger('dragstart', { dataTransfer });
  cy.get('#target').trigger('drop', { dataTransfer });
  cy.get('.blue').trigger('dragend');


 
  
  });

   it('4.1 dynamic table- assignment a',()=>{     
       
   //dynamic table
   cy.get("[id='search-input']").type("dynamic table")  
   cy.get("[href='/dynamic-table']").eq(1).click()
   cy.get("table[class='table table-striped'] tbody tr ").each(($tr,i)=>{

    const $td = $tr.find('td');
    const browsername = $td.eq(0).text();
    //const cpuUsage = $td.eq(4).text();
     const cpuUsage = [...$td].find(td => td.innerText.includes('%'))?.innerText;

    cy.log('Browser Name is ',browsername , 'cpu usage', cpuUsage);
   });

   
  });



    it('4.2 dynamic table- assignment b',()=>{     
       let count=0
   //dynamic table
   cy.get("[id='search-input']").type("dynamic table")  
   cy.get("[href='/dynamic-table']").eq(1).click()
   cy.get("table[class='table table-striped'] tbody tr ").each(($tr,i)=>{

    const $td = $tr.find('td');
    const browsername = $td.eq(0).text();
    const cpuUsageText = [...$td].find(td => td.innerText.includes('%'))?.innerText;
    
    if (cpuUsageText) {
      const cpuValue = parseFloat(cpuUsageText.replace('%', ''));

      if (cpuValue > 20) {
        count++;
             }
    }
  }).then(() => {
    cy.log('Total browser with>20 % is' , count ); 


   });

});

 

it('5 Dynamictable- content assertion', () => {

  cy.get("#search-input").type("dynamic table");
  cy.get("[href='/dynamic-table']").eq(1).click();


  cy.get("table.table-striped tbody tr").each(($tr) => {
    const $td = $tr.find('td');
    const browserName = $td.eq(0).text().trim();

    if (browserName == 'Chrome') {
      
      const cpuUsageFromTable = [...$td].find(td => td.innerText.includes('%'))?.innerText.trim();    
      cy.get('#chrome-cpu').invoke('text').then((fullText) => {
        // Example fullText: "Chrome CPU: 4.4%"
        const match = fullText.match(/(\d+(\.\d+)?%)/); // Matches a number like 4.4%
        const cpuUsageFromCard = match ? match[0] : null;      
        
        expect(cpuUsageFromCard).to.eq(cpuUsageFromTable);
      });
    }
  });

});


it('6. Extracting and Asserting Table Data', () => {
  cy.get("#search-input").type("dynamic table");
  cy.get("[href='/dynamic-table']").eq(1).click();
 
  cy.get("table.table-striped thead tr th").then(($tr) => {
    let memoryColumnIndex = -1;

    $tr.each((index, th) => {
      const tr = th.innerText;
      if (tr == 'Memory') {
        memoryColumnIndex = index;
      }
    });

    cy.log('Memory column index: ',memoryColumnIndex);
   
    cy.get("table.table-striped tbody tr").each(($trow) => {
      const $cells = $trow.find('td');
      const browserName = $cells.eq(0).text().trim();
      const memory = $cells.eq(memoryColumnIndex).text();

      cy.log(browserName ,' Memory:',memory);
    });
  });
});




it('7. Automate Validations on Dynamic HTML Table', () => {
  cy.get("#search-input").type("dynamic table");
  cy.get("[href='/dynamic-table']").eq(1).click();

  let cpuAbove15Found = false;

  cy.get("table.table-striped tbody tr").each(($row, rowIndex, $rows) => {
    const $cells = $row.find('td');
   
    const browserName = $cells.eq(0).text().trim();    // 1. Assert browser name is not empty
    expect(browserName).to.not.be.empty;

  
    $cells.each((i, td) => {
      const cellText = td.innerText;
      expect(cellText).to.not.be.empty;      // 2. Assert no cell is empty
    });

   
    const cpuCell = [...$cells].find(td => td.innerText.includes('%'));     // 3. Check if any CPU usage > 15%
    if (cpuCell) {
      const cpuValue = parseFloat(cpuCell.innerText.replace('%', ''));
      if (cpuValue > 15) {
        cpuAbove15Found = true;
      }
    }
  }).then(() => {
    
    expect(cpuAbove15Found,"CPU Usage above 15 not found").to.be.true;   // Final assertion after looping all rows
  });
});



   


});




