# Librería CRUD API

## Descripción

Este proyecto es una API-REST desarrollada en Node.js y Express, que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos MySQL para gestionar una colección de libros. La API sigue los principios REST y está diseñada para ser fácil de configurar y utilizar en cualquier entorno que soporte Node.js y MySQL.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **index.js**: El punto de entrada principal de la aplicación. Inicia el servidor Express y carga las rutas.
- **src/server.js**: Configura el servidor Express, incluyendo middlewares y el enrutador.
- **src/routes.js**: Define las rutas de la API y las asocia con las funciones correspondientes en el controlador.
- **src/controller.js**: Contiene la lógica de negocio que maneja las solicitudes HTTP y las operaciones CRUD en la base de datos.
- **src/database.js**: Gestiona la conexión a la base de datos MySQL utilizando `mysql2`.

## Requisitos Previos

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **MySQL** (para la base de datos)
- **Postman** o **ThunderClient** (para probar la API)

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/Martin-Juncos/ProT4_25609038.git
   cd ProT4_25609038
   ```

2. **Instalar dependencias**:

   Ejecuta el siguiente comando para instalar todas las dependencias necesarias del proyecto:

   ```bash
   npm install
   ```

## Configuración

1. **Variables de entorno**:

   Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, tales como la conexión a la base de datos MySQL. Un ejemplo de configuración podría ser:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=libreria
   PORT=3000
   ```

2. **Configuración de la base de datos**:

   Asegúrate de que el servidor MySQL esté en funcionamiento y crea la base de datos `libreria`. Puedes utilizar la siguiente estructura para la tabla de libros:

   ```sql
   CREATE TABLE libros (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nombre VARCHAR(255) NOT NULL,
       autor VARCHAR(255) NOT NULL,
       categoria VARCHAR(100) NOT NULL,
       `año-publicacion` YEAR NOT NULL,
       ISBN VARCHAR(20) NOT NULL UNIQUE
   );
   ```

## Ejecución

1. **Modo desarrollo**:

   Para ejecutar la aplicación en modo desarrollo, utiliza el siguiente comando:

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor y recargará automáticamente cualquier cambio en el código.

2. **Modo producción**:

   Para ejecutar la aplicación en modo producción, primero asegúrate de construir los archivos necesarios:

   ```bash
   npm run build
   ```

   Luego, inicia la aplicación:

   ```bash
   npm start
   ```

## Explicación del Código

### `controller.js`

Este archivo contiene la lógica de negocio para manejar las solicitudes HTTP:

- **getAll**: Obtiene todos los libros de la base de datos y los devuelve en formato JSON.
- **getOne**: Obtiene un libro específico por su ID.
- **add**: Agrega un nuevo libro a la base de datos.
- **delete**: Elimina un libro de la base de datos utilizando su ISBN.
- **update**: Actualiza los detalles de un libro existente por su ID.

### `routes.js`

Este archivo define las rutas que la API maneja:

- **GET /libros**: Obtiene todos los libros.
- **GET /libros/:id**: Obtiene un libro específico por su ID.
- **POST /libros**: Agrega un nuevo libro.
- **DELETE /libros**: Elimina un libro por su ISBN.
- **PUT /libros/:id**: Actualiza un libro existente por su ID.

### `database.js`

Este archivo maneja la conexión a la base de datos MySQL utilizando `mysql2` y exporta un pool de conexiones para ser utilizado en las consultas.

```javascript
const mysqlConnection = require("mysql2/promise");

const properties = {
  host: "localhost",
  user: "root",
  password: "",
  database: "libreria",
};

const pool = mysqlConnection.createPool(properties);

module.exports = pool;
```

## Pruebas

Puedes probar la API utilizando herramientas como **Postman** o **ThunderClient** en Visual Studio Code. Asegúrate de probar todas las rutas definidas en `routes.js` para verificar que las operaciones CRUD funcionen correctamente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request para discutir las mejoras.

                                            ©ProfMartin
