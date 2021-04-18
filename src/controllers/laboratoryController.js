const repository = require('../repositories/laboratoryRepository')

exports.getActives = async(req, res, next) => {
    try {
        const data = await repository.search();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.create = async(req, res, next) => {
    try {
        await repository.save(req.body);
        res.status(200).send("sucess - ok");
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.update = async(req, res, next) => {
    try {
        await repository.update(req.body);
        res.status(200).send("sucess - ok");
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        console.log(req.body)
        await repository.delete(req.body);
        res.status(200).send("sucess - ok");
    } catch (e) {
        console.log(e)
        res.status(500).send({     
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.addExam = async(req, res, next) => {
    try {
        await repository.addExam({id : req.body.id, idExam : req.body.idExam })
        res.status(200).send("sucess - ok");    
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};


exports.getLaboratory = async(req, res, next) => {
    try {
        const data = await repository.searchLaboratory(req.body);
        res.status(200).send(data);
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};