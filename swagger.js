
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/ExamRoute.js', './src/routes/LaboratoryRoute.js']

swaggerAutogen(outputFile, endpointsFiles)