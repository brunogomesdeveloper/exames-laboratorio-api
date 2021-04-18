const  express = require('express');
const examRoute = express.Router();
const  examController = require('../controllers/examController');


examRoute.post('/exam', async (request, response, next) => {
     return await examController.create(request, response, next);
});

examRoute.get('/exam', async (request, response, next) => {
    return await examController.getActives(request, response, next);
});

examRoute.put('/exam', async (request, response, next) => {
     return await examController.update(request, response, next);
});

examRoute.delete('/exam', async (request, response, next) => {
     return await examController.delete(request, response, next);
});


module.exports = examRoute ;