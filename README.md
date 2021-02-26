# Cursos Beta
Front realizado para avaliação técnica.<br />

# Instruções em ordem para realizar(Rodar o projeto)
# ENV para rodar o Projeto(Basta criar um arquivo .env e colocar essas informações ou copiar do .ENV.EXAMPLE)
NOME_SERVICO = cursos-beta-back<br />
KEY = cursos-beta-back-key<br />
PORT=4020<br />
NODE_ENV=develop<br />
<br />
DB_DIALECT=mysql<br />
DB_HOST=localhost<br />
DB_USER=root<br />
DB_PASS=<br />
DB_NAME=cursos_db<br />

# Executar
yarn para instalar as dependencias<br />
Criar um banco de dados(Sequelize não cria o banco pelas migrations)<br />
Comandos para rodar(em order):<br />
CREATE DATABASE `cursos_db`   (Comando para criar o banco)(Rodar no seu banco local)  <br />
yarn sequelize db:migrate     (Comando para gerar todas as tabelas do banco) <br />
yarn sequelize db:seed:all    (Comando parar gerar os dados nas tabelas(Categorias e Adm))<br />
yarn dev para iniciar o projeto<br />


# Informações importantes
Observação: Por hospedar na Heroku(Serviço gratuito) e fazer conexão com meu banco Mysql, pode existir lentidão nas operações

# Credenciais para fazer login
Email: adm@cursobeta.com<br />
Senha: 123123<br />

# Exemplo para bater no logar
{
	"email": "adm@cursobeta.com",
	"senha": "123123"
}

# Autenticação
Para autenticar é necessario fazer LOGIN com as credenciais batendo na rota /logar(POST) <br />
Colocar em todos os headers para todas as rotas: Authorization : Bearer TOKEN

# Exemplo Autenticação
Authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbUBjdXJzb2JldGEuY29tIiwiaWF0IjoxNjE0MzcwODQ4fQ.5arzi-MefIV-nmf-Zj4kEobJZ1loP8-vvQ_1b54Vj7g

# Rotas(BACK-END):

| Rota       	        | Método 	  | Descrição                                               	|  O que enviar                                                |
|-------------------- |--------	  |---------------------------------------------------------	|--------------------------------------------------------------|
| /cursos    	        | GET   	  | Listagem dos cursos por paginação ou filtros              | Nada obrigatório                                             |
| /curso/:id    	    | GET   	  | Listagem de um curso identificado por ID                  | ID do curso é obrigatório                                    |
| /categorias    	    | GET   	  | Listagem de categorias                                    | Nada obrigatório                                             |
| /cursos    	        | POST   	  | Criar um curso novo                                       | Passar um objeto com nome, descricao, categoria(Number), url |
| /curso/:id    	    | PATCH   	| Alterar curso criado pelo ID                              | Passar um objeto com nome, descricao, categoria(Number), url |
| /curso/:id    	    | DELETE   	| Deletar curso pelo ID                                     | Passar o ID do curso                                         |
| /logar   	          | POST   	  | Entrar no sistema                                         | Passar email e senha passados em cima                        | 

# Finalização

Qualquer dúvida, estou a disposição em (11) 9404-98448