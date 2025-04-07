import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function conectarDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}
