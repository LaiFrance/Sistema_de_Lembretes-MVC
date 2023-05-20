const mongoose = require('mongoose')

const connectToDb = () => {
  // string de conexão
  mongoose
    .connect(
      'mongodb+srv://root:admin@lembretes.itnw3bc.mongodb.net/?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    )
    .then(() => {
      console.log('Conectado ao banco de dados! MONGODB ATLAS CONECTADO!')
    })
    .catch((err) => {
      console.log('Erro ao conectar ao banco de dados ', err)
    })
}

module.exports = connectToDb
