## Descripción

El proyecto "ProT4_25609038" es una API-REST desarrollada utilizando Node.js, Express y MySQL. Esta API sigue los principios de la arquitectura REST para permitir la interacción con una base de datos, facilitando operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos almacenados. Este proyecto está diseñado para ser sencillo de configurar y desplegar, ideal para desarrolladores que buscan implementar un servicio web escalable y eficiente.

## Requisitos Previos

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- **MySQL** (para la base de datos)
- **XAMPP** (opcional, para gestionar el servidor MySQL localmente)

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

   Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la conexión a la base de datos MySQL. Un ejemplo de configuración podría ser:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_NAME=nombre_base_de_datos
   PORT=3000
   ```

2. **Configuración de la base de datos**:

   Si estás utilizando XAMPP, asegúrate de que el servidor MySQL esté en funcionamiento. Crea la base de datos mencionada en el archivo `.env` y ejecuta las migraciones necesarias si es aplicable.

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

## Lógica del Código

El proyecto sigue una arquitectura basada en módulos, con una estructura de carpetas bien definida que incluye:

- **index.js**: Archivo principal que inicia el servidor y carga las configuraciones iniciales.
- **server.js**: Contiene la configuración del servidor Express, incluyendo middlewares y manejo de errores.
- **database.js**: Gestiona la conexión con la base de datos MySQL utilizando `mysql2`.
- **controller.js**: Define la lógica de negocio y cómo se manejan las solicitudes para los recursos de la API.
- **routes.js**: Define las rutas de la API y las asocia con las funciones correspondientes en el controlador.

### Ejemplo de Flujo de Trabajo

1. **Inicialización del Servidor**:

   En `index.js`, el servidor se inicializa y se configura para escuchar en el puerto definido en el archivo `.env`.

   ```javascript
   const express = require("express");
   const app = express();
   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

2. **Conexión a la Base de Datos**:

   En `database.js`, se establece una conexión con la base de datos MySQL utilizando `mysql2`.

   ```javascript
   const mysql = require("mysql2");
   const connection = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
   });

   connection.connect((error) => {
     if (error) throw error;
     console.log("Database connected successfully");
   });

   module.exports = connection;
   ```

3. **Manejo de Solicitudes**:

   En `controller.js`, se define la lógica para manejar diferentes solicitudes HTTP (GET, POST, PUT, DELETE). Estas funciones interactúan con la base de datos para realizar las operaciones necesarias.

   ```javascript
   const connection = require("./database");

   exports.getAllItems = (req, res) => {
     const query = "SELECT * FROM items";
     connection.query(query, (error, results) => {
       if (error) return res.status(500).send(error);
       res.status(200).json(results);
     });
   };
   ```

4. **Definición de Rutas**:

   En `routes.js`, se definen las rutas que el servidor va a manejar y se asignan a las funciones correspondientes en el controlador.

   ```javascript
   const express = require("express");
   const router = express.Router();
   const controller = require("./controller");

   router.get("/items", controller.getAllItems);
   router.post("/items", controller.addItem);
   router.put("/items/:id", controller.updateItem);
   router.delete("/items/:id", controller.deleteItem);

   module.exports = router;
   ```

## Pruebas

Puedes probar la API utilizando herramientas como **Postman** o **ThunderClient** en Visual Studio Code. Asegúrate de probar todas las rutas definidas en `routes.js` para verificar que las operaciones CRUD funcionen correctamente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request para discutir las mejoras.

                                            ©ProfMartin

```

```
