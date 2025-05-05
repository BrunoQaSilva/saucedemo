describe('Produtos', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Deve exibir 6 produtos na listagem', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })
})