const {
  When,
  Given,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
Given("User has navigated to Application", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
When("User enters login credentials", () => {
  cy.get("input[placeholder='Username']").type("Admin");
  cy.get("input[placeholder='Password']").type("admin123");
});

// When("Clicks on Login Button", () => {
//   cy.get("button[type='submit']").click();
// });
Then("User should be logged in to application", () => {
  cy.get("input[placeholder='Search']").should("be.visible");
});
