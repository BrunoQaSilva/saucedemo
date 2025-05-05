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

---

### 🧩 Funcionalidade: Validação de Login

#### 🔹 Cenário 8: Exibição de mensagem de erro ao tentar logar com campos vazios
**Dado** que estou na página de login  
**Quando** clico em "Login" sem preencher os campos de usuário e senha  
**Então** devo ver uma mensagem de erro informando que os campos são obrigatórios

---

✅ Cenários de Teste apenas Manuais

### 🧩 Funcionalidade: Acessibilidade

#### 🔹 Cenário 9: Navegação com teclado
**Dado** que estou na página de login  
**Quando** uso apenas a tecla `TAB` para navegar entre os campos e botões  
**Então** consigo acessar todos os elementos interativos sem precisar do mouse

---

### 🧩 Funcionalidade: Responsividade

#### 🔹 Cenário 10: Acesso em resolução de dispositivo móvel
**Dado** que acesso o site em um dispositivo com resolução 375x667  
**Quando** navego pela interface da aplicação  
**Então** todos os elementos devem estar visíveis e sem rolagem horizontal

---

### 🧩 Funcionalidade: Sessão

#### 🔹 Cenário 11: Logout encerra sessão corretamente
**Dado** que estou logado na aplicação  
**Quando** clico no menu lateral e seleciono “Logout”  
**Então** sou redirecionado para a tela de login  
**E** não consigo mais acessar a página de produtos sem me autenticar novamente

---

### 🧩 Funcionalidade: Controle de Acesso

#### 🔹 Cenário 12: Impedir acesso direto sem autenticação
**Dado** que não estou logado  
**Quando** tento acessar diretamente a URL `/inventory.html`  
**Então** sou automaticamente redirecionado para a tela de login

---

### 🧩 Funcionalidade: Identidade Visual

#### 🔹 Cenário 13: Verificar exibição do logotipo e nome da aplicação
**Dado** que acesso qualquer página da aplicação  
**Então** devo visualizar o logotipo da empresa  
**E** o nome “Swag Labs” deve estar visível e destacado

---

### 🧩 Funcionalidade: Filtros de Produtos

#### 🔹 Cenário 14: Ordenar produtos por menor preço
**Dado** que estou na página de produtos  
**Quando** seleciono o filtro “Price (low to high)”  
**Então** os produtos devem ser reordenados com os preços do menor para o maior

#### 🔹 Cenário 15: Ordenar produtos por nome decrescente
**Dado** que estou na página de produtos  
**Quando** seleciono o filtro “Name (Z to A)”  
**Então** os produtos devem ser listados em ordem alfabética decrescente

---

### 🧩 Funcionalidade: Estado do Carrinho

#### 🔹 Cenário 16: Carrinho mantém produtos após navegação
**Dado** que adicionei produtos ao carrinho  
**Quando** navego para outra página e retorno  
**Então** o carrinho deve manter os itens adicionados

---

### 🧩 Funcionalidade: Menu Lateral

#### 🔹 Cenário 17: Abrir e fechar o menu lateral
**Dado** que estou na página de produtos  
**Quando** clico no ícone de menu (≡)  
**Então** o menu lateral deve se abrir com as opções  
**E** ao clicar fora dele, o menu deve ser fechado automaticamente

---

### 🧩 Funcionalidade: Reset App State

#### 🔹 Cenário 18: Resetar estado da aplicação
**Dado** que tenho produtos no carrinho  
**Quando** abro o menu

