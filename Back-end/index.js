const express = require('express');
// path para integrar com o front-end
const path = require('path');
const routes = require('./routes/routes');
// conectar com o banco de dados
const connectToDb = require('./database/db');

connectToDb();
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)

// ROTA
// app.get('/', (req, res) => {
//   res.render("index");
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });
