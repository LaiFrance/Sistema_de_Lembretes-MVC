//separado o controller do arquivo de rotas

const getAll = (req, res) => {
    res.render("index");
};

module.exports = {
    getAll
};