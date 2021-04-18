const  express = require('express');
const laboratoryRoute = express.Router();
const  laboratoryController = require('../controllers/laboratoryController');


laboratoryRoute.post('/laboratory', async (request, response, next) => {
     return await laboratoryController.create(request, response, next);
});

laboratoryRoute.get('/laboratory', async (request, response, next) => {
    return await laboratoryController.getActives(request, response, next);
});

laboratoryRoute.put('/laboratory', async (request, response, next) => {
     return await laboratoryController.update(request, response, next);
});

laboratoryRoute.delete('/laboratory', async (request, response, next) => {
     return await laboratoryController.delete(request, response, next);
});


laboratoryRoute.post('/laboratory/addExam', async (request, response, next) => {
     return await laboratoryController.addExam(request, response, next);
});

laboratoryRoute.get('/laboratory/exam', async (request, response, next) => {
     return await laboratoryController.getLaboratory(request, response, next);
});


module.exports = laboratoryRoute ;