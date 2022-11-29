const http = require("http");
const fs = require("fs");
const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(`${__dirname}/static`));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// сервер

app.get("/", (req, res) => {
  fs.createReadStream("./index.html").pipe(res);
});

http.createServer({}, app).listen(3000, () => {
  console.log("Server started");
});
let email = "",
  pass = "",
  tema = "",
  mail = "";
app.post("/sendmail", (req, res) => {
  email = req.body.email;
  pass = req.body.pass;
  tema = req.body.tema;
  mail = req.body.text;
  console.log("Данные получены");

  res.end("Sended");
  // отправка почты

  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: email,
    subject: tema,
    text: mail,
  };

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log("Error");
    }
  });
});
