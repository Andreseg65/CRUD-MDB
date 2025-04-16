import { Schema, model } from "mongoose";

const profesorSchema = new Schema(
  {
    nombre: { type: String, required: true },
    especialidad: { type: String },
    email: { type: String, required: true, unique: true },
    cursos: [{ type: Schema.Types.ObjectId, ref: "Curso" }], // Acá relaciono al profesor con los cursos
  },
  {
    timestamps: true,
  }
);

export const Profesor = model("Profesor", profesorSchema);
