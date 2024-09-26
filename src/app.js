require("dotenv").config();
const express = require("express");
const path = require("path");   
const app = express();


const port = process.env.PORT || 3000;



app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // para poder leer datos de formulario



const mailRouter = require("./routes/mailRouter.js");
app.use(mailRouter);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
