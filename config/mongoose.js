const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://rakeshmohan1999:R3w5F6aufyGzUIsq@cluster0.pz6lb2u.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB Connection Error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
