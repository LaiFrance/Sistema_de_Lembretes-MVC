# Sistema de Lembretes



## Funcionalidades

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

## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

## Screenshots




## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Demonstração




## Feedback




## Licença

[MIT](https://choosealicense.com/licenses/mit/)




