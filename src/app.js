const  express =  require('express');
const mongoose = require('mongoose');


require('dotenv').config()

const app = express();

app.use(express.json());

//conect mongoose
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// charge models
const Laboratory = require('./model/laboratoryModel');
const Exam = require('./model/examModel');

const  laboratoryRoute = require('./routes/LaboratoryRoute')
const  examRoute = require('./routes/ExamRoute')


app.use('/', laboratoryRoute);
app.use('/', examRoute);


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger_output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports =  app ;