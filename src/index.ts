import { conectarDB } from './database';
import {
  crearCurso,
  obtenerCursos,
  obtenerCursoPorId,
  actualizarCurso,
  eliminarCurso
} from './crud/cursoCRUD';

async function main() {
  await conectarDB();

  const curso = await crearCurso({
    nombre: 'TypeScript desde Cero',
    descripcion: 'Curso completo para principiantes',
    duracionHoras: 20,
    profesor: 'Juan Pérez'
  });

  console.log('Curso creado:', curso);

  const cursos = await obtenerCursos();
  console.log('Todos los cursos:', cursos);

  const uno = await obtenerCursoPorId(curso._id.toString());
  console.log('Curso por ID:', uno);

  const actualizado = await actualizarCurso(curso._id.toString(), { duracionHoras: 25 });
  console.log('Curso actualizado:', actualizado);

  await eliminarCurso(curso._id.toString());
  console.log('Curso eliminado');
}

main();
