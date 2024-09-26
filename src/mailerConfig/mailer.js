const nodemailer = require("nodemailer");
require("dotenv").config();


const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "javier.mecker94@gmail.com",
        pass: process.env.MAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;