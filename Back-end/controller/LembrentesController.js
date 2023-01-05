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
    try{
        const lembrete = await Lembrete.findOne({_id: req.params.id});
        const lembretesList = await Lembrete.find();
        return res.render('index', {lembretesList, lembrete});
    }
    catch(err){
        res.status(500).send({error: 'Erro ao buscar o lembrete'});
    }
}

// atualiza o lembrete
const updateOneLembrete = async (req, res) => {
    try{
        const lembrete = req.body;
        // achar id altera objeto
        await Lembrete.updateOne({ _id: req.params.id }, lembrete);
        return res.redirect('/');
    }
    catch(err){
        res.status(500).send({error: 'Erro ao atualizar o lembrete'});
    }
}

// modal para deletar lembrete
const confirmDeleteLembrete = async (req, res) => {
    try{
        const lembreteDelete = await Lembrete.deleteOne({ _id: req.params.id });
        const lembretesList = await Lembrete.find();
        res.render('index', {lembrete: null, lembretesList, lembreteDelete});
    }
    catch(err){
        res.status(500).send({error: 'Erro ao deletar o lembrete'});
    }

}

const deleteAllLembretes = async (req, res) => {
    try{
        const deleteAll = await Lembrete.deleteMany();
        const lembretesList = await Lembrete.find();
        res.render('index', {lembrete: null, lembretesList, deleteAll});
    }
    catch(err){
        res.status(500).send({error: 'Erro ao deletar todos os lembretes'});
    }
}

module.exports = {
    getAllLembrentes,
    createLembrete,
    getById,
    updateOneLembrete,
    confirmDeleteLembrete,
    deleteAllLembretes
};