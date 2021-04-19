const app = require("./app");
require('dotenv').config()

app.listen(process.env.PORT || 3333, () => {
    console.log(`API rodando na porta ${process.env.PORT}`);
});


