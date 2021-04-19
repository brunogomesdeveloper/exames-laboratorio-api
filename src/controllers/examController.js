const repository = require('../repositories/examRepository')

exports.create = async(req, res, next) => {
    try {
        await repository.save(req.body);
        res.status(200).send({ message : "sucess - ok" });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

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


exports.update = async(req, res, next) => {
    try {
        await repository.update(req.body);
        res.status(200).send({ message : "sucess - ok" });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body);
        res.status(200).send( { message : "sucess - ok" });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

