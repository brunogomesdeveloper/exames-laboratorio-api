const repository = require('../repositories/laboratoryRepository')
const  ValidationContract  = require("../validators/fluentValidator");

exports.create = async(req, res, next) => {
    try {

        let data = req.body;
        
        let array ;

        if(!Array.isArray(data.laboratorys)){
            array = [data]
        }
        else {
            array = data.laboratorys
        } 

        array.forEach(element => {
            let contract = new ValidationContract();
            contract.isRequired(element.name, 'Name is required.');
            contract.isRequired(element.status, 'Name is required.');
            contract.isRequired(element.address, 'Address is required.');
            contract.isRequired(element.address.country, 'Address country is required.');
            contract.isRequired(element.address.state, 'Address state is required.');
            contract.isRequired(element.address.city, 'Address city is required.');
            contract.isRequired(element.address.neighboorhod, 'Address neighboorhod is required.');
            contract.isRequired(element.address.street, 'Address street is required.');
            contract.isRequired(element.address.number, 'Address number is required.');
            contract.isRequired(element.address.zipCode, 'Address zipCode is required.');
    
            if(!contract.isValid()){
                res.status(400).send(contract.errors()); 
            }
        });

        await repository.save(array);

        res.status(200).send({ message : "sucess - ok" });

    } catch (e) {
        res.status(500).send({
            message: e
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

        if(!Array.isArray(data.laboratorys)){
            array = [data]
        }
        else {
            array = data.laboratorys
        } 

        array.forEach(element => {
            let contract = new ValidationContract();
            contract.isRequired(element.name, 'Name is required.');
            contract.isRequired(element.status, 'Name is required.');
            contract.isRequired(element.address, 'Address is required.');
            contract.isRequired(element.address.country, 'Address country is required.');
            contract.isRequired(element.address.state, 'Address state is required.');
            contract.isRequired(element.address.city, 'Address city is required.');
            contract.isRequired(element.address.neighboorhod, 'Address neighboorhod is required.');
            contract.isRequired(element.address.street, 'Address street is required.');
            contract.isRequired(element.address.number, 'Address number is required.');
            contract.isRequired(element.address.zipCode, 'Address zipCode is required.');
    
            if(!contract.isValid()){
                res.status(400).send( {error : contract.errors(), _id : element._id})
            }
        });

        await repository.update(array);
        res.status(200).send({ message : "sucess - ok" });
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: e
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        console.log(req.body)
        await repository.delete(req.body);
        res.status(200).send({ message : "sucess - ok" });
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
        res.status(200).send({ message : "sucess - ok" });    
    } catch (e) {
        console.log(e)
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.addExam = async(req, res, next) => {
    try {
        await repository.removeExam({id : req.body.id, idExam : req.body.idExam })
        res.status(200).send({ message : "sucess - ok" });    
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