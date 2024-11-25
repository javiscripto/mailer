const nodemailer = require("nodemailer");
require("dotenv").config();


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "javier.manque.dev@gmail.com",
    pass: process.env.MAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = transporter;
