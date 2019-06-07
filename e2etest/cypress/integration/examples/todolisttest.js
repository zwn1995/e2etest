

describe("user buy something in Tall", () => {
    it("user add, modify and delete todolist", () => {
        cy.visit("http://localhost:8080/");
        cy.get("#app > div > form > input[type='text']").type("Ying");
        cy.get("#app > div > form > button").click();
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)").click();
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input").type("hello,Liu")
        cy.get("#app > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(1)").click();
        cy.get("#app > div > form > input[type='text']").type("helloworld");
        cy.get("#app > div > form > button").click();
        cy.get("#app > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > button.delete-btn").click();
        
    });
    after(() => {
      cy.clearCookies();
    });
  });
  