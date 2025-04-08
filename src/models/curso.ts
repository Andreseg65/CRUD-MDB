import { Schema, model } from 'mongoose';

const cursoSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  duracionHoras: { type: Number },
  profesor: { type: String }, // despues lo cambio por un ID
}, {
  timestamps: true
});

export const Curso = model('Curso', cursoSchema);
