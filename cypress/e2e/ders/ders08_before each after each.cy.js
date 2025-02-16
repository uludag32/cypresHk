describe('beforeEach ve afterEach Kullanımı', () => {
    
    // Her testten önce çalışacak kod bloğu
    beforeEach(() => {
        // Cypress'in "uncaught:exception" hatasını yakalayıp testin durmasını engellemesi sağlanıyor
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Script error')) {
                return false; // Hata göz ardı edilir
            }
            return true; // Diğer hatalar normal şekilde işlenir
        });

        // Testlerin çalıştırılacağı web sitesine yönlendirme yapılıyor
        cy.visit('/')
        cy.log('Web sitesine gidildi')
    });

    // İlk test: Web sitesi logosunun görünür olup olmadığını kontrol eder
    it.only('Web sitesi logosu görünür mü?', () => {
        cy.get('header > a > img').should('be.visible') // Logonun görünür olup olmadığını doğrular
        cy.log('Web sitesi logosu görünür durumda')
    });

    // İkinci test: Belirli bir elementin içeriğini kontrol eder
    it('Element başlık kontrolü', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5') // Hedeflenen başlık elementi seçilir
          .as('element') // Seçilen element için bir alias (takma ad) atanır
        
        cy.get('@element').should('have.text', 'Elements') // Başlığın 'Elements' olup olmadığı kontrol edilir
        
        cy.get('@element').then(($element) => {
            const elementText = $element.text() // Elementin içindeki metin alınır
            cy.log('Sorgulanan elementin metin değeri: ' + elementText) // Metin değeri log olarak yazdırılır
        })

        afterEach(() => {
            cy.visit('/automation-practice-form')
            cy.url().should('equal', 'https://demoqa.com/automation-practice-form')
            cy.should('include', 'automation-practice-form')
            cy.log('Form linkine gidildi')
        });
    });
})