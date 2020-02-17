const keystone = require('keystone');
const path = require('path');
<<<<<<< HEAD
const cors = require('cors');
=======
const cors = require('cors')
>>>>>>> Bugfix(contact): rebase index.js (server)
const nodemailer = require('nodemailer');

const WhoWeAre = keystone.list('QuemSomos').model;

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
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
<<<<<<< HEAD
  
=======

>>>>>>> Bugfix(contact): rebase index.js (server)
	app.post('/sendmail', (req, res) => {
    const {
      name,
      email,
      subject,
      mensage,
    } = JSON.stringify(req.body);

    // console.log(body)
<<<<<<< HEAD
    
=======

>>>>>>> Bugfix(contact): rebase index.js (server)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "valedopcd@gmail.com",
        pass: "valedopcd123"
      },
      tls: { rejectUnauthorized: false }
    })

    const mailOptions = {
<<<<<<< HEAD
      from: `"${name}" <${email}>`,
      // to: Put a email,
      subject: assunto,
      text: `${nome} <${email}>\n <${subject}> \n\n${mensage}`
=======
      from: `"${nome}" <${email}>`,
      // to: Put a email,
      subject: assunto,
      text: `${nome} <${email}> <${telefone}>\n\n${mensagem}`
>>>>>>> Bugfix(contact): rebase index.js (server)
    }

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email enviado');
      }
    })
	})
};
