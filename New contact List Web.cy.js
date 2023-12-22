
describe('Verify the functionality of a contact list web application', () => {
    it("Sign Up as a New User", () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')
  
      cy.get("#firstName").type("Jane")
      cy.get("#lastName").type("Eyre")
      cy.get("#email").type("jane.eyre5@gmail.com")
      cy.get("#password").type("JANEEYRE")
      cy.get("button[type='submit']").click()  })

    it("Login to the Web App", () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
    
        cy.get("#email").type("jane.eyre5@gmail.com")
        cy.get("#password").type("JANEEYRE")
        cy.get('button#submit').click()     })    
    
    it("Add a New Contact Record", () => {

        //cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/addContact')
        cy.get('#add-contact').click()
        cy.get("#firstName").type("Vimal")
        cy.get("#lastName").type("Samaranayaka")
        cy.get("#birthdate").type("1997-05-07")
        cy.get("#email").type("vimal@gmail.com")
        cy.get("#phone").type("814256397")
        cy.get("#street1").type("wadfdgf")
        cy.get("#street2").type("dsddfdsfs")
        cy.get("#city").type("sds")
        cy.get("#stateProvince").type("sdsddf")
        cy.get("#postalCode").type("2436")
        cy.get("#country").type("sds")
        cy.get('button#submit').click()  
           
                
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
    
        cy.get("#email").type("jane.eyre5@gmail.com")
        cy.get("#password").type("JANEEYRE")
        cy.get('button#submit').click() 

        //  assertion
        cy.get('body').should('contain', 'Vimal Samaranayaka') })
        

    it("Delete a Contact Record", () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
        cy.get('body:third').click()
        cy.get('button#delete').click()
        //cy.get('.confirm-button').click()
        //cy.get('button#return').click()

        //cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')

        // assertions 
        cy.get('body').should('not.contain', 'Samadhi Jayasooriya') })
       

    it('Edit a Contact Record', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
    cy.get('#edit-contact').click()

    cy.get('#firstName').clear().type('Edited')
    cy.get('#lastName').clear().type('Contact')

    cy.get('button#submit').click()
    //cy.get('button#return').click()

    //cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')
    //  assertions 
    
    cy.get('body').should('contain', 'Edited Contact')

})
})






  