const keystone = require('keystone');
const path = require('path');


require('dotenv').config();

keystone.init({
  name: 'Keystone ToDo List',
  static: [path.join(__dirname, './public')],
  'admin path': 'admin',
  port: process.env.PORT || 3001,
  'auto update': true,
  mongo: 'mongodb://localhost/keystonetodo2',
  auth: true,
  'user model': 'User',
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

keystone.import('./models');

keystone.start();
