import { Profesor } from '../models/profesor';

export async function crearProfesor(data: any) {
  const nuevo = new Profesor(data);
  return await nuevo.save();
}

export async function obtenerProfesores() {
  return await Profesor.find().populate('cursos');
}

export async function obtenerProfesorPorId(id: string) {
  return await Profesor.findById(id).populate('cursos');
}

export async function actualizarProfesor(id: string, data: any) {
  return await Profesor.findByIdAndUpdate(id, data, { new: true });
}

export async function eliminarProfesor(id: string) {
  return await Profesor.findByIdAndDelete(id);
}
