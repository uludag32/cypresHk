describe("Assertion and XHR", () => {
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // "Script error" hatasını yakala ve Cypress'in testi durdurmasını engelle
        if (err.message.includes("Script error")) {
          return false;
        }
        return true;
      });
    });
  
    it.skip("Assertion Test", () => {
      cy.visit("https://demoqa.com/text-box"); // Sayfayı aç
  
      cy.get("#userName").as("userName"); // userName alanına alias (takma ad) ver
  
      cy.get("@userName").should("have.attr", "autocomplete", "off"); // "autocomplete" özelliğinin "off" olduğunu doğrula-----------------------------------------------------
    });
  
    it.only("chain", () => {
      cy.visit("https://demoqa.com/text-box");
      cy.get("#userName")
        .should("have.attr", "autocomplete", "off")
        .and("be.enabled");
      cy.get("#userName-label")
        .should("be.visible")
        .and("contain", "Full")
        .and("have.text", "Full Name")
        cy.get("div[class='col-md-3 col-sm-12']").should("have.length",4)
        cy.get("#submit").should("not.have.class","disabled")
        cy.get("#submit").should("be.visible")
        cy.get('#currentAddress').type('adam')
        cy.get('#currentAddress').should('have.value','adam')
        cy.get('#currentAddress').should('have.css','color','rgb(73, 80, 87)')
    });

    it.skip("xhr", () => {
          cy.visit("/check-box");
          cy.get('rct-checkbox').should("not.be.checked")
          cy.get('rct-checkbox').check()
          cy.get('rct-checkbox').click()
            
        
        
        });




  });