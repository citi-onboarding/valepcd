const keystone = require('keystone');

const { Types } = keystone.Field;

// First we create the WhoWeAre list.
const WhoWeAre = new keystone.List('O que é o vale PCD');

// Then we are going to add the fields to our list.
WhoWeAre.add({
  title: {
    type: Types.Text, value: 'O que é o vale PCD', required: true, initial: true,
  },
  text: {
    type: Types.Textarea, require: true, initial: true,
  },
  image: {
    type: Types.CloudinaryImages, require: true, initial: true,
  },
});

WhoWeAre.register();
