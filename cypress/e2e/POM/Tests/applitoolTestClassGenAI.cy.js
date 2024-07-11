/// <reference types="cypress" />
import POM from "../Pages/applitoolPageClassGenAI.cy"
let loginPage = new POM()
describe("Login into applitools site with valid crediential", () => {
  it("Login into applitools site with valid crediential", () => {
    loginPage.visit()
    loginPage.typeUsername('applitoolautomation@yopmail.com')
    loginPage.typePassword('Test@1234');
    loginPage.clickSignIn();
    cy.autoheal();
    })
  });