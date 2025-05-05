describe('Login', () => {
  it('Deve logar com credenciais válidas', () => {
    cy.login()
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('exist')
  })

  it('Deve exibir erro ao logar com usuário bloqueado', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })
})