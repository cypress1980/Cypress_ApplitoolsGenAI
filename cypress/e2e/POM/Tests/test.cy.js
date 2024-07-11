describe('test',  () => {
    it('Swag Labs', () => {
      cy.viewport(1440, 900);
      cy.initializeAutoheal('f293aa820bcf');
      cy.visit('https://www.saucedemo.com/');
      cy.getAI('#user-name').type('standard_user');
      cy.getAI('#password').type('secret_sauce');
      cy.getAI('#login-button').click();
      cy.getAI('.bm-icon').click();
      cy.getAI('#logout_sidebar_link').click();
      cy.getAI('.login_logo').click();
      cy.autoheal();
    })
  });