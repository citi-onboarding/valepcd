const keystone = require('keystone');
const path = require('path');
const cors = require('cors');

const WhoWeAre = keystone.list('QuemSomos').model;
const Testimies = keystone.list('Relatos').model;

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
