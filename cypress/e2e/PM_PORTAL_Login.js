describe("Test case for PM Portal Login",()=>{
it("Case1: When user enters invalid email",()=>{
    cy.visit("https://preprod.risebuildings.com/")
    cy.get('input[name="email"]').type()

})
})