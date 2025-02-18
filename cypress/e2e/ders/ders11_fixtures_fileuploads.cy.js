

describe('fixtures and fileupload', () => {
    it('fixtures positive test', () => {
        cy.visit("/automation-practice-form")
        cy.fixture("positiveTest.json").as("positiveForm")
        cy.get("@positiveForm").then((positiveForm) => {

            cy.get('#firstName').type(positiveForm.firstName)
            cy.get('#lastName').type(positiveForm.lastName)
            cy.get('#userEmail').type(positiveForm.userEmail)
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#userNumber').type(positiveForm.mobile)
            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__day--014').click()
            cy.get('.subjects-auto-complete__value-container').type(positiveForm.subjects)
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#uploadPicture').click()
            cy.get('#currentAddress').type(positiveForm.currentAddress)
            cy.get('#stateCity-wrapper > :nth-child(2)').click()
            cy.get('#react-select-3-option-0').click()
            cy.get('#stateCity-wrapper > :nth-child(3)').click()
            cy.get('#react-select-4-option-0').type('Delhi')
            cy.get('#submit').click()
            cy.get('.modal-body').should('be.visible')
         

        })

    });
});

import 'cypress-file-upload';
describe('', () => {
    it('file upload positive test', () => {

        const filePath='Untitled.png'


        cy.get('#firstName').type(positiveForm.firstName)
            cy.get('#lastName').type(positiveForm.lastName)
            cy.get('#userEmail').type(positiveForm.userEmail)
            cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#userNumber').type(positiveForm.mobile)
            cy.get('#dateOfBirthInput').click()
            cy.get('.react-datepicker__day--014').click()
            cy.get('.subjects-auto-complete__value-container').type(positiveForm.subjects)
            cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
            cy.get('#uploadPicture').click()
            cy.get('#uploadpicture').attachFile(filePath)
            cy.get('#currentAddress').type(positiveForm.currentAddress)
            cy.get('#stateCity-wrapper > :nth-child(2)').click()
            cy.get('#react-select-3-option-0').click()
            cy.get('#stateCity-wrapper > :nth-child(3)').click()
            cy.get('#react-select-4-option-0').type('Delhi')
            cy.get('#submit').click()
            cy.get('.modal-body').should('be.visible')
        
    });
    
});