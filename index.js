require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: "Тест на защищенный",
  text: "HELLO защппппппппппппищен ",
};

transporter.sendMail(mailOptions, (err) => {
  if (err) {
    console.log("Error");
  }
});
