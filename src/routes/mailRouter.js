const { Router } = require("express");
const transporter = require("../mailerConfig/mailer");
const { body, validationResult } = require('express-validator');
require("dotenv").config();

const router = Router();

router.post("/send-email", [
  body('correo').isEmail().normalizeEmail(),
  body('nombre').trim().escape(),
  body('mensaje').trim().escape(),
  body('asunto').trim().escape()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { correo, nombre, mensaje, asunto } = req.body;

    const mailContent = {
      from: `"${nombre}" <${correo}>`,
      to: "javier.mecker94@gmail.com",
      subject: `Nuevo mensaje de contacto: ${asunto}`,
      text: mensaje,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    };

    await transporter.sendMail(mailContent);
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error(`Error al enviar el correo: ${error}`);
    res.status(500).json({ error: "Error interno del servidor", details: error.message });
  }
});

module.exports = router;
