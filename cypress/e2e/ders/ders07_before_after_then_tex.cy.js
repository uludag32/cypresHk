describe('before after then tex', () => {

    before(() => {
        cy.visit('/')
        cy.log('web sitesine gidildi')
    });

    it('test1 ', () => {

     cy.get('header > a > img').should('be.visible')
     cy.log('web sitesinin gorunur oldugu dogrulandi')
           
    });
    it.only('test 2',() => {

        cy.scrollTo('bottom')
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').as('element').should('be.visible')
        cy.get('@element').should('have.text', 'Elements')
        cy.get('@element').then(($element) => {
           const textValue= $element.text()
           cy.log('Sorgulanan elementin tekx degeri '+ textValue +' oldugu dogrulandi')
        })

        after(() => {
            cy.visit('bottom')
            cy.url().should('be.visible')
        });



    })

    
});