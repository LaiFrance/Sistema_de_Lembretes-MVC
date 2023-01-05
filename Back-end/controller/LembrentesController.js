const Lembrete = require('../models/Lembrete');
//separado o controller do arquivo de rotas

const getAllLembrentes = async (req, res) => {
    try{
        const lembretesList = await Lembrete.find();
        return res.render('index', {lembretesList, lembrete: null});
    }
    catch(err){
        res.status(500).send({error: 'Erro ao buscar os lembretes'});
    }
};

// criar um novo lembrete
const createLembrete = async (req, res) => {
    const lembrete = req.body;

    if(!lembrete){
       return res.redirect('/');
    }
    try
    {
        await Lembrete.create(lembrete);
        return res.redirect('/');
    }
    catch(err){
     res.status(500).send({error: 'Erro ao criar o lembrete'});
    }

}

// pega o id do lembrete
const getById = async (req, res) => {
    // PARAMETROS DA URL
    const lembrete = await Lembrete.findOne({_id: req.params.id});
    const lembretesList = await Lembrete.find();
    res.render('index', {lembretesList, lembrete});
}

module.exports = {
    getAllLembrentes,
    createLembrete,
    getById
};