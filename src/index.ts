import { conectarDB } from './database';

import {
  crearCurso,
  obtenerCursos,
  obtenerCursoPorId,
  actualizarCurso,
  eliminarCurso
} from './crud/cursoCRUD';

import {
  crearAlumno,
  obtenerAlumnos,
  obtenerAlumnoPorId,
  actualizarAlumno,
  eliminarAlumno
} from './crud/alumnoCRUD';

import {
  crearProfesor,
  obtenerProfesores,
  obtenerProfesorPorId,
  actualizarProfesor,
  eliminarProfesor
} from './crud/profesorCRUD';

async function main() {
  await conectarDB();

  // Crear un profesor
  const profesor = await crearProfesor({
    nombre: 'Ana Torres',
    email: 'ana@ejemplo.com',
    especialidad: 'Programación Web'
  });
  console.log('Profesor creado:', profesor);

  // Crear un curso con referencia al profesor
  const curso = await crearCurso({
    nombre: 'TypeScript desde Cero',
    descripcion: 'Curso completo para principiantes',
    duracionHoras: 20,
    profesor: profesor._id
  });
  console.log('Curso creado:', curso);

  // Crear un alumno con curso asociado
  const alumno = await crearAlumno({
    nombre: 'Carlos Ruiz',
    email: 'carlos@ejemplo.com',
    edad: 22,
    cursos: [curso._id]
  });
  console.log('Alumno creado:', alumno);

  // Obtener y mostrar todo
  console.log('--- Todos los Cursos ---');
  console.log(await obtenerCursos());

  console.log('--- Todos los Profesores ---');
  console.log(await obtenerProfesores());

  console.log('--- Todos los Alumnos ---');
  console.log(await obtenerAlumnos());

  // Actualizar algo
  const alumnoActualizado = await actualizarAlumno(alumno._id, { edad: 23 });
  console.log('Alumno actualizado:', alumnoActualizado);

  // Eliminar curso (opcional si querés probarlo)
  // await eliminarCurso(curso._id);
  // console.log('Curso eliminado');
}

main();
