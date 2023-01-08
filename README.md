# Sistema de Lembretes
Desenvolvido para o desafio técnico da DTI digital. Nessa aplicação é possível CRIAR, EDITAR, EXCLUIR e ATUALIZAR.


## Funcionalidades
- Adicionar DATA E HORA DO LEMBRETE
- Ordenar Lembretes por DATA
- Criar Lembretes
- Excluir Lembretes
- Excluir Lista de Lembretes
- Editar Lembretes
- Exibir data futura no Lembrete
- Atualizar Lembrete 


## Stack utilizada

**Front-end:** Javascript, Bootstrap, fontAwesome, html, css

**Back-end:** Node, Express, MongoDB

**Testes:** Jest, superteste


 ## 🚀 Começando
 
 As instruções permitirão que você obtenha uma cópia do projeto na sua máquina local para fins de desenvolvimento e teste.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/LaiFrance/Sistema_de_Lembretes.git
```

Entre no diretório do projeto

```bash
  cd Back-end
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev

```



## Rodando os testes

Entre na Pasta Testes

```bash
  cd Testes
```

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

<<<<<<< HEAD
## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

=======
>>>>>>> 81074f7f18ead1b96ace25c2e5fb8552c08e4845
## Screenshots

![index spec js - Sistemas de Lembretes Javascript - ](https://user-images.githubusercontent.com/91226847/210962316-698af75a-01e5-4c5b-a828-0530350050a8.png)

![Mongodb-PNG-Image-HD](https://user-images.githubusercontent.com/91226847/211031218-1b1498df-87f9-4bce-ab88-1cb04acdec60.png)


![Data _ Cloud_ MongoDB Cloud (1)](https://user-images.githubusercontent.com/91226847/210962723-a81b9e52-4aa6-46d4-938e-4d1f96c7a0dd.png)



# 📌  Rotas e retornos dos endpoints

## Documentação da API

#### Retorna Pagina de lembrentes

```http
  GET /
```

#### Cria um lembrete

```http
  POST/create
```

#### Pega id do lembrete

```http
  GET/getById/:id
```
### Edita Lembrete e Atualiza

```http
  POST/updateOne/:id'
```
### Delete um Lembrete da Lista
```http
  GET/delete/:id
```
### Limpa toda Lista de Lembretes

```http
  GET/limpar
```

## Demonstração






https://user-images.githubusercontent.com/91226847/210959783-f182bd49-ecb9-4fcd-b79e-0c6bfefcd186.mp4


### Sobre o desenvolvimento

#### Foram 2 dias de desenvolvimento

No desafio havia a possibilidade de escolher qualquer linguagem de Programação e banco de Dados, optei por utilizar o
<br>
MONGODB pois ele oferece maior segurança, confiabilidade e eficiência, além da flexibilidade de modificar a estrutura ou esquema de dados.
<br>
Durante a execução do projeto aprendi bastante,busquei entender sobre o NODE.JS , EJS E BANCO DE DADOS MONGODB


### Pontos de melhoria

* Elaborar mais TESTES NO BACK-END E FRONT-END
* Clean code 
* Tratamento de erros
* Adicionar documentação `Swagger` a aplicação.
* Hospedar a aplicação no  `Heroku ou Vercel`

---
Desenvolvido por [laise france](https://www.linkedin.com/in/laise-france/)




