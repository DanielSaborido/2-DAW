# React App para Explorar Juegos

Esta aplicacion react poveniente de https://rawg.io/apidocs es de un catálogo de videojuegos que permite buscar entre una variedad de juegos, géneros, desarrolladores y plataformas a las que también le he incluido funcionalidades de registro de usuarios, favoritos, recomendaciones y contactos.

## Estructura de Carpetas y Archivos

El proyecto está organizado de la siguiente manera:

- **src**
  - **layouts**
    - `LayoutPublic.jsx`: Diseño público para usuarios no registrados.
    - `LayoutPrivate.jsx`: Diseño privado para usuarios registrados.
  - **pages**
    - `Home.jsx`: Página principal con noticias sobre juegos.
    - `Games.jsx`: Página que muestra una lista de juegos.
    - `Game.jsx`: Página detallada de un juego específico.
    - `Genres.jsx`: Página que muestra una lista de géneros y etiquetas.
    - `Genre.jsx`: Página que muestra juegos según un género específico.
    - `Tag.jsx`: Página que muestra juegos según una etiqueta específica.
    - `Others.jsx`: Página con información sobre desarrolladores y plataformas.
    - `Platform.jsx`: Página que muestra juegos según una plataforma de juego.
    - `Console.jsx`: Página que muestra juegos según una consola específica.
    - `Developer.jsx`: Página que muestra juegos según un desarrollador específico.
    - `NotFound.jsx`: Página de error para rutas no encontradas.
    - `Loggin.jsx`: Página de inicio de sesión.
    - `AccountCreation.jsx`: Página de creación de cuenta.
    - `Recommended.jsx`: Página de recomendaciones para usuarios registrados.
    - `Favorites.jsx`: Página de juegos favoritos para usuarios registrados.
    - `Contact.jsx`: Página de contacto para usuarios registrados.
    - `ModifyAccount.jsx`: Página para modificar la cuenta de usuarios registrados.
  - **context**
    - `Loaders.jsx`: Archivo con funciones para cargar datos desde la API.
    - `UserContext.jsx`: Contexto de usuario para gestionar la información del usuario.
  - **assets**
    - `logo.jpg`: Archivo de imagen para el logo de la aplicación.
  - **dataBase**
    - `IndexDB.js`: Archivo con funciones para interactuar con la base de datos IndexedDB y almacenar información de usuarios.

## Funcionalidades Principales

### Exploración de Juegos:

- La página principal muestra noticias y novedades sobre juegos.
- La sección de "Games" permite explorar una lista de juegos.
- Puedes ver detalles específicos de cada juego en su página correspondiente.

### Exploración de Géneros y Etiquetas:

- La sección "Genres/Tags" muestra una lista de géneros y etiquetas.
- Puedes explorar juegos según un género o etiqueta específica.

### Exploración de Plataformas y Desarrolladores:

- La sección "Others" proporciona información sobre desarrolladores y plataformas.
- Puedes ver juegos asociados a una consola o desarrollador específico.

### Registro y Sesión de Usuarios:

- La aplicación permite a los usuarios registrarse e iniciar sesión.
- Los usuarios registrados pueden


## Implementaciones externas en el Proyecto

npm install --save @fortawesome/free-solid-svg-icons

npm install sweetalert2

## Documentación de la API
https://rawg.io/apidocs

https://api.rawg.io/docs/

## Enlace a despliegue del proyecto