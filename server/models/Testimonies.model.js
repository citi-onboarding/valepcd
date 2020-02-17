const keystone = require('keystone');

const { Types } = keystone.Field;

// First we create the testimonies list.
const testimonies = new keystone.List('Relatos', {
  map: { name: 'name' }
});

// Then we are going to add the fields to our list.
testimonies.add({
  name: {
    type: Types.Text, value: 'Relatos', required: true, initial: true,
  },
  about: {
    type: Types.Text, value: 'Sobre', require: true, initial: true,
  },
  text: {
    type: Types.Textarea, require: true, initial: true,
  },
  image: {
    type: Types.CloudinaryImages, require: true, initial: true,
  },
});

testimonies.register();
