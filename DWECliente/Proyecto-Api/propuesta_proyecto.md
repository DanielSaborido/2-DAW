## Propuesta de Proyecto: Plataforma de Catálogo de Juegos

### Motivación
He escogido esta api buscando por mi cuenta, por la sencillez de su manejo, la gran cantidad de informacion que dispone, el echo de que no tiene fecha de caducidad aunque en lo lugar tiene un maximo de peticiones y ya por ultimo simplemente motivo personal de que me gustan los videojuegos.

### Descripción de la Aplicación
La aplicación será una plataforma web que mostrará información detallada sobre juegos utilizando la API de RAWG. Los usuarios podrán buscar juegos por nombre, género o plataforma y acceder a páginas individuales de cada juego para ver detalles como la sinopsis, calificaciones, reseñas y plataformas disponibles.

### Descripción de las Páginas y Funcionalidades a Implementar
1. **Página de Búsqueda:** Los usuarios podrán buscar juegos utilizando un campo de búsqueda. Los resultados se mostrarán en una lista con imágenes de los juegos y sus nombres.
   
2. **Página de Detalle del Juego:** Al hacer clic en un juego de la lista de resultados, los usuarios serán dirigidos a una página que mostrará detalles más específicos sobre ese juego, incluyendo descripciones, calificaciones, géneros y plataformas disponibles.

### API que se Va a Utilizar
Se utilizará la API de RAWG para obtener datos de juegos. La documentación de la API puede encontrarse en [RAWG Video Games Database API](https://rawg.io/apidocs).
Y para llamar a la api se puede con la url https://api.rawg.io/api/games?key={api_key}, si lo quieres por videojuegos o https://api.rawg.io/api/plataforms?key={api_key} para que sea por plataformas de juego.

### Comprobación de los Endpoints de la API
Se verificarán los siguientes endpoints para asegurar la funcionalidad:
- `/games/{id}`: Se utilizará para obtener detalles específicos de un juego con un ID dado.
- `/games`: Para realizar búsquedas de juegos según diferentes parámetros.

### Posibles Ampliaciones
1. **Funcionalidad de Favoritos:** Permitir a los usuarios guardar juegos como favoritos para acceder fácilmente en el futuro.
2. **Integración con Plataformas de Comentarios:** Incorporar comentarios o reseñas de usuarios utilizando la API de RAWG u otras plataformas.
3. **Sistema de Recomendaciones:** Utilizar datos de preferencias de los usuarios para sugerir nuevos juegos que podrían interesarles.
