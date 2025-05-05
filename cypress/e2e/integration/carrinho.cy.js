describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Deve adicionar e depois remover item do carrinho', () => {
    // Adiciona ao carrinho
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click()
  
    // Verifica que o item foi adicionado
    cy.get('.shopping_cart_badge').should('contain', '1')
  
    // Remove do carrinho
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click()
  
    // Verifica que foi removido
    cy.get('.shopping_cart_badge').should('not.exist')
  })
  
})