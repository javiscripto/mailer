require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const app = express();


const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false })); // para poder leer datos de formulario
app.use(cors());
app.use(helmet());

const mailRouter = require("./routes/mailRouter.js");
app.use(mailRouter);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
