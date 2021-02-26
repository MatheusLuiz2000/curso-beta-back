# Cursos Beta
Front realizado para avaliação técnica.<br />
# Executar
yarn para instalar as dependencias<br />
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

## Rotas(BACK-END):

| Rota       	        | Método 	  | Descrição                                               	|
|-------------------- |--------	  |---------------------------------------------------------	|
| /cursos    	        | GET   	  | Listagem dos cursos por paginação ou filtros              |
| /curso/:id    	    | GET   	  | Listagem de um curso identificado por ID                  |
| /categorias    	    | GET   	  | Listagem de categorias                                    |
| /cursos    	        | POST   	  | Criar um curso novo                                       |
| /curso/:id    	    | PATCH   	| Alterar curso criado pelo ID                              |
| /curso/:id    	    | DELETE   	| Deletar curso pelo ID                                     |
| /logar   	          | POST   	  | Entrar no sistema                                         |

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
# Finalização

Qualquer dúvida, estou a disposição em (11) 9404-98448