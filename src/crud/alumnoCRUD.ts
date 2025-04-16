import { Alumno } from '../models/alumno';

export async function crearAlumno(data: any) {
  const nuevo = new Alumno(data);
  return await nuevo.save();
}

export async function obtenerAlumnos() {
  return await Alumno.find().populate('cursos');
}

export async function obtenerAlumnoPorId(id: string) {
  return await Alumno.findById(id).populate('cursos');
}

export async function actualizarAlumno(id: string, data: any) {
  return await Alumno.findByIdAndUpdate(id, data, { new: true });
}

export async function eliminarAlumno(id: string) {
  return await Alumno.findByIdAndDelete(id);
}
