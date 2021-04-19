const repository = require('../repositories/examRepository')
const  ValidationContract  = require("../validators/fluentValidator");

exports.create = async(req, res, next) => {
    try {

        let data = req.body;
        
        let array ;

        if(!Array.isArray(data.Exams)){
            array = [data]
        }
        else {
            array = data.Exams
        } 

        array.forEach(element => {
            let contract = new ValidationContract();
            contract.isRequired(element.name, 'Name is required.');
            contract.isRequired(element.status, 'status is required.');
            contract.isRequired(element.tipo, 'tipo is required.');
    
            if(!contract.isValid()){
                res.status(400).send(contract.errors()); 
            }
        });

        await repository.save(array);
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

        let data = req.body;
        let array ;

        if(!Array.isArray(data.Exams)){
            array = [data]
        }
        else {
            array = data.Exams
        }

        array.forEach(element => {
            let contract = new ValidationContract();
            contract.isRequired(element._id, 'id is required.');
            contract.isRequired(element.name, 'Name is required.');
            contract.isRequired(element.tipo, 'tipo is required.');
    
            if(!contract.isValid()){
                res.status(400).send(contract.errors()); 
            }
        });

        await repository.update(array);
        res.status(200).send({ message : "sucess - ok" });
    } catch (e) {
        console.log(e)
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

