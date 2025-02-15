describe("cy.get, cy log, assertion and scroll", () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // "Script error" hatasını yakala ve Cypress'in testi durdurmasını engelle
            if (err.message.includes("Script error")) {
                return false;
            }
            return true;
        });
    });

    it("cy.get,id locate and AS", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName")
        cy.get("#userEmail-label").as("emailLabel")
        cy.log("Email kutusunun text değerinin Email oldugunu dogrula")
        cy.get("@emailLabel").should("have.text", "Email") // Doğru alias kullanımı
    });
    it('cy.get, class locate and Then', () => {
        cy.visit("https://demoqa.com/text-box");
    
        cy.get(".text-center").as("textBoxTitle");
    
        cy.get("@textBoxTitle").then((textBox) => {
            cy.log(textBox.text()); // text() metodunu kullanmalısınız.
            cy.get("@textBoxTitle").should("have.text", "Text Box");
        });
    
        cy.get("@textBoxTitle").should("be.visible");
    });
    
    it('cy.get.attribute locate', () => {
        cy.visit("https://demoqa.com/text-box");
    
        // "currentAddress" ID'sine sahip textarea'yı al
        cy.get('textarea[id="currentAddress"]').as("currentAddress");
        cy.get('@currentAddress').should("be.enabled");
    
        // Adres alanına bir metin yaz
        cy.get('textarea[id="currentAddress"]').type("Test adresi");
    });

    it('cy.get.contains locate and click', () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get('footer').as('foot')
        cy.scrollTo('bottom')
        cy.get('@foot').should('not.be.visible')
    
    
    });
        
  
    
});