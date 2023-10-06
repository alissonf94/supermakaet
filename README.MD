# Está API se trata desistema de supermercado

## Comandos necessários para iniciar o servidor

### -> npm i ou npm install (Instalar dependências)
### -> npm start (Rodar servidor)

## Rotas

### Auth

#### POST /login
##### -> Rota pertecente a autenticação do usuário
##### -> Será usado: email e password
<img src="/public/Auth/login.png">


### Employee

#### POST /api/employees
##### -> Rota pertecente a criação do funcionário
##### -> Será usado: name, email, password
<img src="/public/employee/createEmployee.png">

#### DELETE /api/employee/:id
##### -> Rota pertecente a exclusão de um employee
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/employee/deleteEmployee.png">

#### GET /api/employee/:id
##### -> Rota pertecente da recuperção de um employee por id
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/employee/getEmployee.png">

#### PUT /api/employee
##### -> Rota pertecente a atualização dos dados de um employee por id
##### -> O id é capturado por meio do token
#### -> Essa rota necessita da autenticação do token como funcionário
##### -> Será usado: name, email, password
<img src="/public/employee/updateEmployee.png">


### Client

#### POST /api/clients
##### -> Rota pertecente a criação do client
##### -> Ao criar um client é criado um ShoppingCard para ele
##### -> Será usado: name, email, password
<img src="/public/clientes/createClient.png">

#### GET /api/clients
##### -> Rota pertecente a recuperação de todos os clientes do sistema
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/clientes/getClients.png">

#### DELETE /api/client/:id
##### -> Rota pertecente a exclusão de client
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/clientes/deleteClient.png">

#### GET /api/client/:id
##### -> Rota pertecente da recuperção de um client por id
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/clientes/getClient.png">

#### PUT /api/client
##### -> Rota pertecente a atualização dos dados de um client por id
##### -> O id é capturado por meio do token
#### -> Essa rota necessita da autenticação do token como funcionário ou cliente
##### -> Será usado: name, email, password
<img src="/public/clientes/updateClient.png.png">


### Product

#### POST /api/products
##### -> Rota pertecente a criação do produto
##### -> Será usado: nameProduct, typeProduct, price, description, validity, quantityProduct
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/product/createProduct.png">

#### GET /api/products
##### -> Rota pertecente a recuperação de todos produtos do sistema
#### -> Essa rota necessita da autenticação do token como funcionário ou cliente
<img src="/public/product/getProducts.png">

#### DELETE /api/product/:id
##### -> Rota pertecente a exclusão de um produto
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/product/deleteProduct.png">

#### GET /api/product/:id
##### -> Rota pertecente da recuperção de um product por id
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/product/getProduct.png">

#### PUT /api/product/:id
##### -> Rota pertecente a atualização dos dados de um product por id
#### -> Essa rota necessita da autenticação do token como funcionário
##### -> ##### -> Será usado: nameProduct, typeProduct, price, description, validity, quantityProduct
<img src="/public/product/updateProduct.png">


### Promotion

#### POST /api/promotions
##### -> Rota pertecente a criação de uma promoção
##### -> Será usado: nameProduct, valueProduct
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/promotion/createPromotion.png">

#### DELETE /api/promotion/:id
##### -> Rota pertecente a exclusão de uma promoção
#### -> Essa rota necessita da autenticação do token como funcionário
<img src="/public/promotion/deletePromotion.png">

#### GET /api/promotions
##### -> Rota pertecente a recuperação de todas promoções do sistema
#### -> Essa rota necessita da autenticação do token como funcionário ou cliente
<img src="/public/promotion/getPromotions.png">


### ShoppingCard

#### GET /api/shoppingCard
##### -> Rota pertecente a recuperação de um shoppingCard por id do client
#### -> Essa rota necessita da autenticação do token como cliente 
<img src="/public/promotion/getPromotions.png">

#### PUT /api/shoppingCard/:id/
##### -> Rota pertecente a adição de um item no carrinho do usuário
##### -> É necessario informa o id do produto pela url e a quantidade do produto pelo body
#### -> Essa rota necessita da autenticação do token como client
##### -> ##### -> Será usado: quantity
<img src="/public/ShoppingCard/addItem.png">


### Buy

#### POST /api/buys
##### -> Rota pertecente ao registro de uma compra
#### -> Essa rota necessita da autenticação do token como client
#### -> A compra é gerada a parti do id do client, esse é capturado por meio do token
#### -> Dessa forma é pego todos os items do carrinho do client, e é gerado a compra
<img src="/public/buy/registerBuy.png">

#### GET /api/buys
##### -> Rota pertecente a recuperação das compras  de um client específico
#### -> Essa rota necessita da autenticação do token como client
<img src="/public/buy/getBuys.png.png>


### ProducTips

#### POST /api/productTips/:id
##### -> Rota pertecente ao registro de uma dica de produto específico para client comprar
#### -> essa dica é definida atraves do seu historico de comprar
#### -> Essa rota necessita da autenticação do token como funcionario
#### -> É necessario informa o id do client na url
<img src="/public/producTips/registerProductTips.png">

#### GET /api/productTip
##### -> Rota pertecente a recuperação de um producTips de um usuário específico
#### -> Essa rota necessita da autenticação do token como client
<img src="/public/producTips/getProductTips.png">

