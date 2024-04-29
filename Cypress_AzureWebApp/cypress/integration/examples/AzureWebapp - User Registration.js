describe("My First Test Suite", function () {
  before(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("My FirstTest case", function () {
    cy.visit(Cypress.env("QA"));
    cy.writeFile("cypress/Logfile.log", "Hello World");
    cy.contains("Sign In").click();
    cy.contains("Register here").click();
    cy.get('input[name="email"]').type("Shubham01@gmail.com");
    cy.get("#password").type("Shubham@123");
    cy.get("#cpassword").type("Shubham@123");
    cy.get('input[name="firstName"]').type("Shubham");
    cy.get('input[name="lastName"]').type("Motwani");
    cy.get('input[name="address1"]').type("Hinjewadi");
    cy.get('input[name="address2"]').type("Phase 1");
    cy.get('input[name="zipcode"]').type("440025");
    cy.get('input[name="city"]').type("Pune");
    cy.get('input[name="state"]').type("Maharashtra");
    cy.get('input[name="country"]').type("India");
    cy.get('input[name="phone"]').type("987654321");
    cy.get('input[value="Register"]').click();
    cy.get("body p").should("have.text", " Registered Successfully ");
    cy.get("#loginEmail").type("Shubham01@gmail.com");
    cy.get("#loginPassword").type("Shubham@123");
    cy.get(".submitField > input").click();
    //cy.get(".dropbtn").should("contain.text", "Shubham");
    //cy.get(".dropbtn").should("contain.text", "Hello");
      });
 
function addThreeNumbers(a,b){
return a+b
}

function addTwoNumbers(a,b){
return a+b
}
