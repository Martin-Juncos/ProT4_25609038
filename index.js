const app = require("./src/server");
require("dotenv").config();
const port = process.env.PORT;
app.listen(port, () => console.log(`Corriendo en el puerto: ${port}`));
