[![Versão ](https://img.shields.io/badge/Version-1.0.0-green)](https://www.npmjs.org/package/markdown-it-emoji)

## API para manutenção de laboratórios e exames.

---
#### Laboratório

+ Cadastrar um novo laborário.
+ Obter uma lista de laboratórios ativos.
+ Atualizar um laboratório existente.
+ Remover logicamente um laboratório ativo.


---
#### Exame

+ Cadastrar um novo exame.
+ Obter uma lista de exames ativos.
+ Atualizar um exame existente.
+ Remover logicamente um exame ativo.

---

#### Funções

+ Associar um exame ativo à um laboratório ativo.
+ Desassociar um exame ativo de um laboratório ativo.
+ Execução de cadastro, atualização e remoção em lote;
+ Busca por nome do exame e retorna todos os laboratorios associados a esse exame.

---

#### Documentação uso API 
+ __[Postam Docs](https://documenter.getpostman.com/view/10185972/TzJsfdQ4)__
+ __[Heroku](https://exames-laboratorio-api.herokuapp.com/)__

---

## Tecnologias

- NodeJs 
- Javascript 
- Mongo
- Heroku
- Express

 ---
## Configurando ambiente de desenvolvimento

    - Instalar dependências
    	npm install
    
    - Rodar serviço localmente
    	npm run dev
 
    - Rodar serviço em produção
    	npm start

    - Criar arquivo .env, seguir exemplo arquivo example_env


## Estrutura
 
- src/routes/ -> Rotas da aplicação.

- src/controllers -> Camada responsável por intermedirar as requisições.

- src/model -> Definição do modelo do objeto utlizado no négocio.

- src/repositories -> Camada responsável pela interação com o banco de dados.

- src/validators -> Métodos auxilirares para validação de dados.

