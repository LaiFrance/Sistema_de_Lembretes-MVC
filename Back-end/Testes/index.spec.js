const app = require('../index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

const lembrete = {
  titulo: 'teste',
  descricao: 'teste',
  data: '2020-10-27',
}

describe('Test method getAll', () => {
  test('It should response the GET method Status 200 With response header Sucesso And Error Message status 500', async () => {
    try {
      const response = await request.get('/')

      expect(response.status).toBe(200)

      expect(response.header).toHaveProperty(
        'content-type',
        'text/html; charset=utf-8',
      )
    } catch (error) {
      expect(response.status).toBe(500)
      expect(error).toEqual('Erro ao buscar os lembretes')
    }
  })
})

describe('Test method getById', () => {
  const id = '5f9f1b0b0b1b1b1b1b1b1b1b'
  test('It should response the GET method Status 200 With response header Sucesso And Error Message status 500', async () => {
    try {
      const response = await request.get('/getById/' + id)

      expect(response.status).toBe(200)

      expect(response.header).toHaveProperty(
        'content-type',
        'text/html; charset=utf-8',
      )
    } catch (error) {
      expect(response.status).toBe(500)
      expect(error).toEqual('Erro ao buscar o lembrete')
    }
  })
})

describe('Test method createLembrete', () => {
  test('It should response the POST method Status 200 With response header Sucesso And Error Message status 500', async () => {
    const response = await request.post('/create').send(lembrete)

    expect(response.status).toBe(302)

    expect(response.header).toHaveProperty(
      'content-type',
      'text/plain; charset=utf-8',
    )
  })
})

describe('Test method updateOneLembrete', () => {
  const id = '5f9f1b0b0b1b1b1b1b1b1b1b'
  test('It should response the POST method Status 200 With response header Sucesso And Error Message status 500', async () => {
    const response = await request.post('/updateOne/' + id).send(lembrete)

    expect(response.status).toBe(302)

    expect(response.header).toHaveProperty(
      'content-type',
      'text/plain; charset=utf-8',
    )
  })
})

