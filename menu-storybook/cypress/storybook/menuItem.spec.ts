// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/

describe("Storybook", () => {
  it("Open Menu Item iframe", () => {
    cy.visit("?path=/story/example-menuitem--nested-children");
    cy.visit("iframe.html?id=example-menuitem--nested-children&viewMode=story");

    let link = cy.get("#root > div > div > div:nth-child(1) > a");
    link.should("exist");
    link.should("have.text", "Live Event");
    link.click()

    cy.get("#root > div > div > div:nth-child(1) > div > iframe")
      .should('have.attr', 'title')
      .and("eq", "live-events")
  });
});
