describe('go back, go forward,step', () => {

    const mainPage="https://demoqa.com/"
    const secondPage="https://demoqa.com/interaction"

    it('go back and go forward 1', () => {
        cy.visit("/")
        cy.url().should("equal",mainPage)

        cy.get(':nth-child(5) > :nth-child(1) > .card-body').click()
        cy.url().should("equal",secondPage)

        cy.go("back")
        cy.url().should("equal",mainPage)

        cy.go("forward")
        cy.url().should("equal",secondPage)
    });

it('go back and go forward 2 and step', () => {
    cy.step("demoqa sitesine gidildi")
    cy.visit("/")
    cy.step("demoqa sitesine gidildigi dogrulandı")
   cy.url().should("equal",mainPage)
   
   cy.step("interaction sayfasına gidildi")
   cy.get(':nth-child(5) > :nth-child(1) > .card-body').click()
   cy.step("interaction sayfasına gidildigi dogrulandı")
   cy.url().should("equal",secondPage)
   
   cy.step("demoqa sitesine geri dönüldü")
    cy.go(-1)
    cy.step("demoqa sitesine geri dönüldüğü dogrulandı")
    cy.url().should("equal",mainPage)

    cy.step("interaction sayfasına gidildi")
    cy.go(1)

    cy.step("interaction sayfasına gidildiği dogrulandı")
    cy.url().should("equal",secondPage)
});


});