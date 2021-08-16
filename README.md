# BlogApi_project

## Descrição:

Projeto criado no curso da Trybe no módulo de Desenvolvimento em Back-End.

Nesse projeto, o objetivo foi construir um back-end usando ORM com o pacote sequelize do npm.

Criei e fiz a associação de tabelas usando models do sequelize
Construi endpoints para consumir esses models e fazer um CRUD com o sequelize.

## Endpoints gerados:
1 - POST /user
 >criação de registro de usuario no DB com os atributos 'displayName', 'email', 'password' obrigatorios e o atribulo não obrigatório 'image' para uma url com a imagem.

2 - POST /login
 >realização de login com o `email` e `password` registrados no DB. Validação dos dados enviados e geração de um token JWT para o cliente.
  
3 - GET /user
 >Leitura de todos os usuários registrados. Precisa do token gerado no login para o acesso.
  
4 - GET /user/:id
 >Leitura de usuário especifico. Precisa do token gerado no login para o acesso e o id gerado para o usuário no DB.

5 - POST /categories
 >criação de registro de uma categoria no DB com o atributo `name`.
  
6 - GET /categories
 >Leitura de todas as categorias registradas. Precisa do token gerado no login para o acesso.
  
7 - POST /post
  >criação de registro de um artigo(post) no DB com os atributos `title`, `content` e `categoryIds` obrigatorios.

8 - GET /post
  >Leitura de todao os artigos(posts) registrados. Precisa do token gerado no login para o acesso.
  
9 - GET post/:id
 >Leitura de artigo especifico. Precisa do token gerado no login para o acesso e o id gerado para o artigo no DB.
  
10 - PUT /post/:id
 >Atualização de artigo especifico. Precisa do token gerado no login para o acesso e o id gerado para o artigo no DB. Somente o usuario que criou o artigo pode editá-lo. Deve ter os atributos `title`, `content` enviados para a atualização somente. A categoria não pode ser atualizada. 

11 - DELETE post/:id
 >Remoção de artigo do registro no DB. Precisa do token gerado no login para o acesso e o id gerado para o artigo no DB. Somente o usuario que criou o artigo pode remove-lo.
  
12 - DELETE /user/me
  >Remoção de usuario do registro no DB. Precisa do token gerado no login para o acesso. Somente o proprio usuario pode remove-lo do DB.
   
13 - GET post/search?q=:searchTerm
 >Leitura de artigo especifico. Precisa do token gerado no login para o acesso. Será pesquisado usando o parametro 'q=:searchTerm', onde o termo `:searchTerm` deva ser substituido por algum termo no `title` ou no `content` do artigo.
  
 <br/>
 
 **Realizado em NodeJS com o framework express**
 
 **Banco de dados utilizado: MySQL**
 
 **ORM utilizada: Sequelize**
