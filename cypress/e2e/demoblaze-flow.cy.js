/// <reference types="cypress" />

describe('Demoblaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });
  const username = 'nykobe123';
  const password = 'Pa$$w0rd!';

  it('should sign up new user', () => {
    cy.get('#signin2').click();

    cy.get('#sign-username').type(username);
    cy.get('#sign-password').type(password);

    cy.contains('.btn-primary', 'Sign up').click();
  });

  it('should login user and add phone to the cart', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.contains('.btn-primary', 'Log in').click();
    cy.get('#nameofuser').should('contain', username);

    cy.contains('.hrefch', 'Samsung galaxy s6').click();
    cy.contains('.btn', 'Add to cart').click();
    cy.get('#cartur').click();
    cy.contains('#tbodyid', 'Samsung galaxy s6')
      .should('contain', 'Samsung galaxy s6');
  });
});
