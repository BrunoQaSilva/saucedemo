# saucedemo
Testes automatizados para a plataforma de testes que simula um site de vendas, sauce demo. Desfio tecnico.

## 🧾 História de Usuário

**ID:** US001 – Carrinho de Compras e Checkout

**Como** um cliente da loja virtual SauceDemo  
**Quero** poder adicionar, remover produtos do carrinho e finalizar a compra  
**Para que** eu consiga gerenciar meus itens e concluir a compra de forma simples e eficiente

---

### ✅ Critérios de Aceitação

#### 🔐 Login
- O usuário deve conseguir se autenticar com credenciais válidas.
- Caso tente logar com um usuário bloqueado, deve receber uma mensagem de erro.

#### 📦 Listagem de Produtos
- Após o login, o usuário deve visualizar a lista completa de produtos disponíveis (6 no total).

#### 🛒 Carrinho de Compras
- O usuário pode adicionar produtos ao carrinho clicando em "Add to cart".
- O número de itens no carrinho deve ser atualizado corretamente.
- O usuário pode remover produtos clicando em "Remove", e o contador do carrinho deve ser ajustado ou desaparecer, se vazio.

#### 💳 Checkout
- O usuário deve conseguir acessar o carrinho e iniciar o processo de checkout.
- Campos obrigatórios (nome, sobrenome e CEP) devem ser validados.
- Ao preencher os dados corretamente e finalizar o pedido, o sistema deve exibir uma mensagem de confirmação:  
  **“Thank you for your order!”**

---

### ⏱️ Tempo Médio de Execução dos Testes

- **Cenários total**: 7  
- **Tempo médio por cenário**: 7 segundos  
- **Tempo total de execução dos testes**:  
  `7 cenários × 7s = 49 segundos`

- **Tempo de setup (login, carregamento do Cypress)**: 10 segundos  
- **Buffer de variação de rede ou sistema**: 10 segundos  

**⏳ Tempo estimado total:**  
`49s + 10s (setup) + 10s (buffer) = ~1 minuto e 10 segundos`

---

📁 Este cenário está implementado com testes automatizados utilizando [Cypress](https://www.cypress.io) e executado via GitHub Actions.
