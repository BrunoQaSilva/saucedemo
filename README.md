## ✅ Cenários de Teste Automatizados

### 🧩 Funcionalidade: Login

#### 🔹 Cenário 1: Login com credenciais válidas
**Dado** que estou na página de login  
**Quando** informo o usuário `standard_user` e a senha `secret_sauce`  
**E** clico no botão de login  
**Então** sou redirecionado para a página de produtos

#### 🔹 Cenário 2: Login com usuário bloqueado
**Dado** que estou na página de login  
**Quando** informo o usuário `locked_out_user` e a senha `secret_sauce`  
**E** clico no botão de login  
**Então** devo ver a mensagem de erro:  
`Epic sadface: Sorry, this user has been locked out.`

---

### 🧩 Funcionalidade: Listagem de Produtos

#### 🔹 Cenário 3: Visualização da lista de produtos
**Dado** que estou logado como `standard_user`  
**Quando** acesso a página de produtos  
**Então** devo visualizar uma lista com **6 produtos**

---

### 🧩 Funcionalidade: Carrinho de Compras

#### 🔹 Cenário 4: Adicionar um item ao carrinho
**Dado** que estou logado na página de produtos  
**Quando** clico no botão **"Add to cart"** do produto “Sauce Labs Backpack”  
**Então** o ícone do carrinho deve mostrar o número **1**

#### 🔹 Cenário 5: Remover item do carrinho
**Dado** que tenho o produto “Sauce Labs Backpack” adicionado ao carrinho  
**Quando** clico no botão **"Remove"**  
**Então** o carrinho deve voltar a mostrar **zero itens**

---

### 🧩 Funcionalidade: Checkout

#### 🔹 Cenário 6: Finalizar compra com dados válidos
**Dado** que estou com produtos no carrinho  
**Quando** acesso o carrinho e clico em **“Checkout”**  
**E** preencho os campos: `First Name`, `Last Name` e `Zip/Postal Code`  
**E** clico em **“Continue”** e depois em **“Finish”**  
**Então** devo ver a mensagem:  
`Thank you for your order!`

#### 🔹 Cenário 7: Validação de campos obrigatórios no checkout
**Dado** que estou na tela de **Checkout: Your Information**  
**Quando** clico em **“Continue”** sem preencher os campos  
**Então** devo ver mensagens de erro indicando que os campos são obrigatórios
