import mongoose from 'mongoose';

// Conectar a MongoDB
const connection = mongoose.connect('mongodb://127.0.0.1:27017/practica')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

export default connection;