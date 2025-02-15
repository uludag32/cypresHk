describe('Assertion and XHR', () => {


    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // "Script error" hatasını yakala ve Cypress'in testi durdurmasını engelle
            if (err.message.includes("Script error")) {
                return false;
            }
            return true;
        });
    });
    
    it('Assertion Test', () => {
        
        cy.visit('https://demoqa.com/text-box');  // Sayfayı aç

        cy.get('#userName').as('userName');  // userName alanına alias (takma ad) ver

        cy.get('@userName').should('have.attr', 'autocomplete', 'off');  // "autocomplete" özelliğinin "off" olduğunu doğrula
    });

});
