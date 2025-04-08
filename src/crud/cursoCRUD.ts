import { Curso } from '../models/curso';

// Crear curso
export async function crearCurso(data: any) {
  const nuevoCurso = new Curso(data);
  return await nuevoCurso.save();
}

// Leer todos los cursos
export async function obtenerCursos() {
  return await Curso.find();
}

// Leer un curso por ID
export async function obtenerCursoPorId(id: string) {
  return await Curso.findById(id);
}

// Actualizar curso
export async function actualizarCurso(id: string, data: any) {
  return await Curso.findByIdAndUpdate(id, data, { new: true });
}

// Eliminar curso
export async function eliminarCurso(id: string) {
  return await Curso.findByIdAndDelete(id);
}
