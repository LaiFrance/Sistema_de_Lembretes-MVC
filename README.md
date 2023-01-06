# Sistema de Lembretes

![Lembretes e mais 21 páginas ](https://user-images.githubusercontent.com/91226847/211029485-5445f296-0c9d-4a0c-b73e-68791994523e.png)


## Funcionalidades

- Criar Lembretes
- Excluir Lembretes
- Excluir Lista de Lembretes
- Editar Lembretes
- Exibir data futura no Lembrete
- Atualizar Lembrete 


## Stack utilizada

**Front-end:** Javascript

**Back-end:** Node, Express, MongoDB

**Testes:** Jest




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






## Licença

[MIT](https://choosealicense.com/licenses/mit/)




