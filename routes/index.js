const keystone = require('keystone');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');

const WhoWeAre = keystone.list('QuemSomos').model;
const Testimies = keystone.list('Relatos').model;

module.exports = (app) => {
  app.use(cors());

  app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  app.get('static/js/main.c855601e.chunk.js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/static/js/main.c855601e.chunk.js'));
  });

  app.get('/quem-somos', (req, res) => {
    WhoWeAre.find().exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data[0]);
    });
  });

  // Send Mail
  app.post('/api/sendmail', (req, res) => {
    const {
      name,
      email,
      subject,
      text,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: process.env.TRANSPORTER_EMAIL,
        pass: process.env.TRANSPORTER_PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'valedopcd@gmail.com',
      subject,
      text: `${name} <${email}> \n\n${text}`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send('Email enviado');
      }
    });
  });
  app.get('/relatos', (req, res) => {
    Testimies.find().exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  });
};
