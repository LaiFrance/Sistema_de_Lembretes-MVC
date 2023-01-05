const Lembrete = require('../models/Lembrete');
//separado o controller do arquivo de rotas

const getAllLembrentes = async (req, res) => {
    try{
        const lembretesList = await Lembrete.find();
        return res.render('index', {lembretesList});
    }
    catch(err){
        res.status(500).send({error: 'Erro ao buscar os lembretes'});
    }
};

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

module.exports = {
    getAllLembrentes,
    createLembrete,
};