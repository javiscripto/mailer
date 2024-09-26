const dotenv = require("dotenv");

dotenv.config();    
module.exports = {
    PORT: process.env.PORT,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS
}       