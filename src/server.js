const app = require("./app");
require('dotenv').config()

app.listen(process.env.PORT, () => {
    console.log(`API rodando na porta ${process.env.PORT}`);
});


