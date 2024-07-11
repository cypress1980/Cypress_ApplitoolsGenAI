export default class AcmeDemoAppByApplitoolspom {

  
  setAutohealData(){
    cy.setCurrentPomAutohealDataId('6d63e0edc0dd');
  }

  visit() {
    cy.visit('https://demo.applitools.com/')
  }

/**
    "Login Form" Box  > IconButton
    href: /index.html | tag: a | purpose: navigation
  */
  clickButton2() {
    this.setAutohealData();
    return cy.getAI('.logo-w>a')
      .click();
  }
  
  /**
    "Login Form" Box  > "Username" Input
    placeholder: Enter your username | id: username | inputType: text | tag: input | class: form-control
  */
  typeUsername(username) {
    this.setAutohealData();
    return cy.getAI('#username')
      .clear()
      .type(username);
  }
  
  /**
    "Login Form" Box  > "Password" Input
    purpose: password | placeholder: Enter your password | id: password | inputType: password | tag: input | class: form-control
  */
  typePassword(password) {
    this.setAutohealData();
    return cy.getAI('#password')
      .clear()
      .type(password);
  }
  
  /**
    "Login Form" Box  > "Sign in" Button
    href: /app.html | id: log-in | tag: a | purpose: navigation | class: btn-primary, btn
  */
  clickSignIn() {
    this.setAutohealData();
    return cy.getAI('#log-in')
      .click();
  } 
}