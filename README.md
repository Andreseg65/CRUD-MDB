# CRUD en MongoDB con TypeScript y Mongoose

Este proyecto es un trabajo práctico para el curso de Backend. Consiste en implementar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos MongoDB, utilizando TypeScript y Mongoose, sin necesidad de crear una API.

## Entidad principal

La aplicación está orientada a una plataforma que gestiona:

- **Cursos**
- **Alumnos**
- **Profesores**

Cada entidad tiene su propio esquema en Mongoose y sus operaciones CRUD implementadas.

## Tecnologías utilizadas

- TypeScript
- Node.js
- MongoDB
- Mongoose
- ts-node / nodemon

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/Andreseg65/CRUD-MDB.git
cd CRUD-MDB

2. Instalar las dependencias:

npm install

3. Configurar la base de datos: crear un archivo .env en la raíz con la siguiente variable:
MONGODB_URI=mongodb://localhost:27017/crud-cursos

4. Compilar y ejecutar el proyecto:

npm run start

src/
│
├── crud/                 # Funciones CRUD para cada entidad
│   ├── cursoCRUD.ts
│   ├── alumnoCRUD.ts
│   └── profesorCRUD.ts
│
├── models/               # Esquemas de Mongoose
│   ├── Curso.ts
│   ├── Alumno.ts
│   └── Profesor.ts
│
├── database.ts           # Conexión a MongoDB
└── index.ts              # Punto de entrada para pruebas
Andrés González
Curso de Backend
Universidad Tecnológica Nacional (UTN)
Abril 2025