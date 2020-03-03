const keystone = require('keystone');
const path = require('path');


require('dotenv').config();

keystone.init({
  name: 'Vale PCD',
  static: [path.join(__dirname, './public')],
  'admin path': 'admin',
  port: process.env.PORT || 31070,
  'auto update': true,
  mongo: process.env.MONGO_URI,
  auth: true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET,
  'cloudinary config': process.env.CLOUDINARY_CONFIG,
});

keystone.import('./models');

keystone.set('routes', require('./routes'));

keystone.start();
