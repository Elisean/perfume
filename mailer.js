require('dotenv').config()



const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.get('/send', (req, res) => {
  let transporter = nodemailer.createTransport({
    host:'smtp.mail.ru',
    secure:"true",
    port:"true",
    service: 'mail',
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailOptions = {
    from: `new тест <${process.env.MAIL}>`,
    to: process.env.MAIL,
    subject: 'Hello',
    text: 'Hello world!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send('Email sent');
});

app.listen(3331, () => {
  console.log('Server started on port 3331');
});

