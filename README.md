# Sistema de Lembretes



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





## Feedback




## Licença

[MIT](https://choosealicense.com/licenses/mit/)




