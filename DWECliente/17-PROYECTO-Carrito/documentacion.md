# Nuevas Funcionalidades

### 1. Quitar Curso (`quitarCurso`)
- Función para disminuir la cantidad de un curso en el carrito.
- Activada al presionar el botón '-' en el carrito.
- Reduce la cantidad del curso en el carrito en uno.
- Actualiza el almacenamiento local y el HTML del carrito.

### 2. Sumar Curso (`sumarCurso`)
- Función para aumentar la cantidad de un curso en el carrito.
- Activada al presionar el botón '+' en el carrito.
- Incrementa la cantidad del curso en el carrito en uno.
- Actualiza el almacenamiento local y el HTML del carrito.

### 3. Mostrar Toast (`mostrarToast`)
- Muestra mensajes emergentes tipo 'toast'.
- Utiliza Bootstrap para mostrar mensajes de éxito o información sobre acciones realizadas en el carrito.

### 4. Mostrar Array HTML (`mostrarArrayHTML`)
- Crea y muestra el HTML de los cursos en la sección de lista de cursos.
- Visualiza los cursos disponibles para comprar.
- Maneja el caso en el que no hay resultados para mostrar.

### 5. Obtener Autores (`obtenerAutores`)
- Función que extrae los nombres de los autores de los cursos.
- Utiliza un conjunto (`Set`) para obtener valores únicos.
- Retorna un array con los nombres de los autores.

### 6. Crear Select Autores (`crearSelectAutores`)
- Genera un select HTML con opciones de autores a partir de los cursos.
- Utiliza `obtenerAutores` para obtener los nombres de autores únicos.
- Añade nuevas opciones al select si no existen previamente.

---

# Integración en el Proyecto

- **Funciones Adicionales de los Listeners:**
  - Controlan la interacción con los botones de agregar, eliminar, sumar y restar cursos en el carrito.
  - Manipulan el carrito, actualizan cantidades y muestran mensajes emergentes.

- **Actualización del Local Storage:**
  - Almacena los cursos en el carrito incluso después de recargar la página.
  - Actualiza el almacenamiento local al agregar, quitar o modificar la cantidad de cursos.

- **Uso de IndexedDB:**
  - Almacena los cursos de manera persistente en la base de datos del navegador.
  - `crearDB`, `insertarCurso` y `obtenerDB` gestionan la base de datos local y la manipulación de datos.

- **Integración de Fetch API:**
  - `obtenerDatosArrayJSON` usa Fetch API para obtener datos desde un archivo JSON de cursos y los inserta en la base de datos.

- **Interacción con el Buscador:**
  - Permite buscar cursos por nombre o autor mediante el campo de búsqueda.
  - Filtra y muestra los cursos relevantes en base a la consulta del buscador.

Estas nuevas funcionalidades mejoran la experiencia del usuario al permitir la manipulación interactiva del carrito, la persistencia de datos y la visualización dinámica de cursos disponibles.

Tambien cabe destacar el haber realizado un traspaso de toda la informacion que se dada de base en el HTML al indexedDB mediante la creación de un archivo json para facilitar asi el control cuando se añaden nuevos cursos mediante los formularios y ajustar el filtrados de los cursos.