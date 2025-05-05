describe('Checkout', () => {
  beforeEach(() => {
    cy.login()
    cy.contains('Sauce Labs Backpack').parent().find('button').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('Deve finalizar a compra com dados válidos', () => {
    cy.get('[data-test="firstName"]').type('Bruno')
    cy.get('[data-test="lastName"]').type('Rocha')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')
  })

  it('Deve validar campos obrigatórios no checkout', () => {
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  })
})