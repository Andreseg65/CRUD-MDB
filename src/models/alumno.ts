import { Schema, model } from "mongoose";

const alumnoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    edad: { type: Number },
    cursos: [{ type: Schema.Types.ObjectId, ref: "Curso" }], // Acá relaciono al alumno con los cursos
  },
  {
    timestamps: true,
  }
);

export const Alumno = model("Alumno", alumnoSchema);
