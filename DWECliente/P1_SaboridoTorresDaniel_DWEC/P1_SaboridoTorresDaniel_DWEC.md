# Trabajo de Investigación

| <!-- -->      | <!-- -->        |
|:-------------:|:---------------:|
|Daniel Saborio Torres| 20/09/2023|
|DWEC| Unidad 1|

## Índice
1. Modelos de Programación en Entornos Cliente/Servidor (Modelos de arquitectura web):
    - Investigación de los modelos cliente/servidor más comunes.
    - Identificación de ejemplos de aplicaciones que utilizan cada modelo.
2. Mecanismos de Ejecución de Código en un Navegador Web. Capacidades y Limitaciones de Ejecución. Compatibilidad con Navegadores Web:
    - Estudio de cómo se ejecuta el código JavaScript en un navegador.
    - Evaluación de las diferencias de compatibilidad entre navegadores.
    - Resolución de problemas de compatibilidad en una aplicación web.
3. Lenguajes de Programación en Entorno Cliente:
    - Investigación de lenguajes como JavaScript, TypeScript, y otros.
    - Comparación de sus características y aplicaciones.
4. Características de los Lenguajes de Script. Ventajas y Desventajas:
    - Análisis de las ventajas y desventajas de la programación en lenguajes de script sobre la programación tradicional.
5. Tecnologías y Lenguajes Asociados. Integración del Código con las Etiquetas HTML:
    - Exploración de tecnologías como CSS y HTML5.
    - Creación de una pequeña aplicación web integrando código JavaScript de diferentes maneras.
6. Herramientas de Programación:
    - Uso de herramientas como Visual Studio Code, Chrome DevTools, etc.
  
### Modelos de arquitectura web
- **Modelo Punto a Punto**:  
Una red P2P (Peer-to-Peer) es una estructura de red en la que los dispositivos individuales (peers) se comportan tanto como proveedores como consumidores de recursos, en contraposición al modelo cliente-servidor donde los clientes obtienen recursos de servidores centralizados.  
<image src="https://2.bp.blogspot.com/-MoAoJ_BPZtA/UI_wHcq2xVI/AAAAAAAAAAY/oO2T3uXYB8w/s1600/conectando-dos-pc-punto-a-punto-3.jpg" width=500px/>  
Luego las redes P2P ofrecen ventajas como escalabilidad, robustez y resistencia a la centralización, pero también tienen desafíos relacionados con la fiabilidad de los recursos y la gestión descentralizada.  
Estas características hacen que las redes P2P sean adecuadas para ciertos tipos de aplicaciones, como BitTorrent, Skype o Tribler debido a su intercambio de archivos y la distribución de contenido, pero no para todas las situaciones. La elección de utilizar una red P2P o un modelo cliente-servidor dependerá de los objetivos específicos y los requisitos de la aplicación.

- **Modelo Cliente-Servidor**:  
El modelo cliente-servidor es un enfoque arquitectónico ampliamente utilizado en informática y redes, donde las tareas y la distribución de recursos se dividen entre dos tipos de entidades: los servidores, que proporcionan recursos o servicios, y los clientes, que solicitan y utilizan esos recursos o servicios.  
La comunicación en un modelo cliente-servidor generalmente se lleva a cabo a través de una red informática, aunque también es posible que los clientes y servidores residan en la misma máquina. Los servidores son hosts que ejecutan uno o más programas servidores diseñados para compartir sus recursos con los clientes. Esto puede incluir recursos como datos, aplicaciones, almacenamiento o capacidades de procesamiento.  
![Cliente-Servidor](https://infimg.com/bimg/2019/02/diagrama-cliente-servidor.jpeg) 
Luego el modelo cliente-servidor es fundamental en la informática moderna y ofrece ventajas como el control centralizado y la escalabilidad, pero también enfrenta desafíos como la congestión de tráfico y la falta de robustez en comparación con algunas redes P2P. Su elección depende de los objetivos y requisitos específicos de cada aplicación o sistema.  
Estas características hacen que el modelo cliente-servidor sea adecuado para ciertos tipos de aplicaciones, como HTTP, FTP, Zoom, Whatsapp, IMAP o POP3.

- **Modelo con servidor de aplicaciones**:  
Un servidor de aplicaciones es una parte fundamental de muchas arquitecturas de software empresarial. A diferencia de un servidor web que se encarga principalmente de entregar contenido estático, como páginas HTML o archivos multimedia, un servidor de aplicaciones se utiliza para ejecutar código dinámico y procesar solicitudes de manera programática.  
![servidor de aplicaciones](https://javiergarciaescobedo.es/images/stories/despliegue_web/01_implantacion/Modelo_servidor_aplicaciones_1.png)  
Un servidor de aplicaciones a menudo trabaja en conjunto con un servidor web. El servidor web se encarga de manejar las solicitudes HTTP entrantes y, si se trata de contenido estático, puede responder directamente al cliente. Sin embargo, si la solicitud requiere procesamiento dinámico, el servidor web puede transferir la solicitud al servidor de aplicaciones, que ejecuta el código necesario y devuelve una respuesta al servidor web para que se entregue al cliente.  
Un servidor de aplicaciones es esencial en el desarrollo de aplicaciones web dinámicas y empresariales, ya que permite la ejecución de código, la gestión de sesiones, la integración de bases de datos y muchas otras funcionalidades críticas para aplicaciones en línea avanzadas, algunos ejemplos son Facebook, World of Warcraft, Amazon Web Services y Magento.

[Modelos de arquitectura web mas comunes](https://javiergarciaescobedo.es/despliegue-de-aplicaciones-web/76-arquitecturas-web/253-modelos-de-arquitecturas-web)
### Mecanismos de Ejecución de Código en un Navegador Web
| <!-- -->|<!-- -->   |
|:-------------:|:---------------|  
|<image src="https://www.thecrazyprogrammer.com/wp-content/uploads/2020/11/JavaScript-Logo-150x150.png?ezimgfmt=ng:webp/ngcb1" width=250px/>|Para ejecutar una aplicación JavaScript en un navegador web, es necesario incluir el código JavaScript dentro de un documento HTML, ya que es el formato que el navegador comprende y representa.|

Existen diversas maneras de integrar código JavaScript en un documento HTML:  
1. **Inclusión en línea**:  
Puedes insertar el código directamente en cualquier parte del documento utilizando el elemento \<script> de HTML. Un ejemplo de esta forma sería:
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>El resultado de la suma es: <span id="resultado"></span></p>
    <script>
      var num1 = 10;
      var num2 = 20;
      document.getElementById("resultado").innerHTML = num1 + num2;
    </script>
</body>
</html>
~~~
2. **Inclusión en la sección \<head>**:  
También puedes agregar scripts en la sección <head> del documento HTML. Sin embargo, si deseas manipular el DOM desde allí, debes esperar a que el documento se cargue completamente utilizando el evento DOMContentLoaded. Un ejemplo de esta forma sería:
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
      var num1 = 10;
      var num2 = 25;
      document.addEventListener('DOMContentLoaded', function(){
        document.getElementById("resultado").innerHTML = num1 + num2;
      });
    </script>
</head>
<body>
    <p>El resultado de la suma es: <span id="resultado"></span></p>
</body>
</html>
~~~
3. **Archivos externos**:  
A medida que tu código JavaScript crece, es conveniente escribirlo en archivos externos al documento HTML y referenciarlos mediante el atributo src del elemento \<script>. Un ejemplo de esta forma sería:
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./suma.js"></script>
</head>
<body>
    <p>El resultado de la suma es: <span id="resultado"></span></p>
</body>
</html>
~~~  
Históricamente, JavaScript tenía problemas de compatibilidad entre navegadores, ya que diferentes navegadores como Internet Explorer y Netscape implementaban scripts en formato de lenguaje diferentes y a pesar de que JavaScript y JScript eran compatibles en cierta medida, a menudo surgían problemas de implementación conflictiva, lo que causaba dificultades a los desarrolladores.  
Estos problemas persistieron hasta principios de la década de 2000 debido al uso continuo de navegadores antiguos que requerían soporte. Esto llevó al desarrollo de bibliotecas como jQuery, que se crearon para ocultar las diferencias en las implementaciones del navegador y permitir a los desarrolladores escribir código más simple. jQuery y otras bibliotecas se encargaban de gestionar las diferencias en segundo plano.  
Afortunadamente, la compatibilidad entre navegadores ha mejorado significativamente con el tiempo, y los navegadores modernos ahora admiten mejor las características estándar de JavaScript. Esto ha reducido la necesidad de utilizar código específico para resolver problemas de compatibilidad, aunque aún existen navegadores antiguos que requieren consideración en este aspecto haciendo que en la actualidad los errores mas comunes sean pocos entre estos estan:
- Cuando el código de detección del navegador es de mala calidad, el código de detección de características y el uso del prefijo del proveedor impiden que los navegadores ejecuten código que de otro modo podrían usar bien.
- Cuando los desarrolladores hacen uso de nuevas características de JavaScript en su código, como API web modernas, y encontrar que tales características no funcionan en navegadores más antiguos.  

Algunas formas de solucionar estos errores son:  
- Asegurarse de que las operaciones asincrónicas han devuelto un valor en específico antes de intentar utilizar dichos valores. 
- Revisar el codigo cada vez que se modifique en caso de que surja algun imprevisto de compatibilidad, ya que pueden surgir un error de sintaxis (aquellos que son por escribir mal un comando) que son faciles de solucionar o un error lógico siendo este mas coplicado de solucionar ya que no suele ser indicado en la consola de comando y no se trata de directamente fallar el programa sino de darte un resultado erroneo.

[Ejecucion de javaScript en web](https://programamos.es/unidad-2-los-entornos-de-ejecucion/)  
[Compatibilidad entre navegadores](https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Cross_browser_testing)  
[Analisis y solucion de la compatibilidad con JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
### Lenguajes de Programación en Entorno Cliente
- **JavaScript**:  
Siendo un lenguaje de programación interpretado y orientado a objetos, es de tipado dinámico, lo que significa que los tipos de datos son asignados en tiempo de ejecución. JavaScript es la base de muchos frameworks y librerías populares en el desarrollo web, como React, Angular y Vue.js y es soportado por todos los navegadores web modernos.
- **TypeScript**:  
TypeScript es una extensión de JavaScript que agrega tipos estáticos al lenguaje, lo que significa que los tipos de datos se comprueban en tiempo de compilación, este lenguaje puede utilizarse con librerías y frameworks JavaScript existentes, y es especialmente popular en proyectos que utilizan Angulary tambien ayuda a detectar errores en tiempo de desarrollo y proporciona un código más limpio y autodocumentado.
- **SASS (Syntactically Awesome Style Sheets)**:  
Es un preprocesador de CSS, se suele utilizar para mejorar la legibilidad y mantenibilidad del código CSS, permitiendo variables, anidamiento, mixins y más, se caracteríza por tener que ser compilado a CSS antes de ser interpretado por el navegador y facilita la reutilización de código y la organización de estilos en proyectos grandes.
- **Elm**:  
Está diseñado específicamente para crear aplicaciones web front-end, utiliza un sistema de tipos fuertes y estáticos, lo que ayuda a evitar errores comunes en tiempo de compilación, promueve la arquitectura de aplicaciones conocida como *Elm Architecture*, que es altamente modular y escalable y se destaca por su enfoque en eliminar errores en tiempo de compilación.
- **React**:  
Utiliza principalmente JavaScript (o TypeScript) para desarrollar interfaces de usuario, se basa en la creación de componentes reutilizables que gestionan su propio estado y renderizado, utiliza un Virtual DOM para optimizar las actualizaciones de la interfaz de usuario y mejorar el rendimiento y al ser una librería de vista para construir interfaces de usuario interactivas, se integra bien con otras bibliotecas y tecnologías.

En resumen, JavaScript es el lenguaje base para el desarrollo web en el lado del cliente, mientras que TypeScript agrega tipos estáticos. SASS es un preprocesador CSS que mejora la estructura de los estilos. Elm es un lenguaje funcional especializado en front-end que garantiza la ausencia de errores. React es una librería de vista que simplifica la creación de interfaces de usuario interactivas en JavaScript o TypeScript. La elección entre estos lenguajes y tecnologías dependerá de los requisitos específicos de tu proyecto y tus preferencias personales.

[Lenguajes de programacion en entorno cliente](https://blog.back4app.com/es/los-10-principales-lenguajes-de-desarrollo-del-lado-del-cliente/)
### Características de los Lenguajes de Script
Un lenguaje de Script tiene una serie de características básicas:  
- **Son interpretados**: El código de un script no necesita ser compilado, basta con que sea interpretado por un programa para que se ejecute su código.
- **No necesitan la declaración de variables**: Estos lenguajes no necesitan una declaración explícita de variables para asignar su tipo. El tipo de dato de cada variable es deducido del contexto en el que se utiliza, en el momento en el que se le asigna un valor. Esta tipología débil requiere de una especial atención a la hora de trabajar con variables.
- **Utilizan instrucciones**: Las instrucciones son fundamentales para que el intérprete pueda ejecutar las acciones que se quieren realizar.
- **Código simple**: Los scripts pueden llegar a ser complicados, pero normalmente se trata de programas cortos y concisos que persiguen ejecutar una acción concreta, por lo que se busca la simplicidad y la eficiencia.  

<image src="https://cdn.educba.com/academy/wp-content/uploads/2018/07/Programming-Languages-vs-Scripting-Languages-2.jpg.webp"/>  

Si se compara con el lengaje de programacion se ven diversas diferencias entre ellas están:  
- Los lenguajes de scripting suelen enfocarse en la automatización de tareas y son utilizados para escribir scripts que controlan la ejecución de programas o acciones específicas mientras que los lenguajes de programación tienen una amplia gama de aplicaciones y se utilizan para desarrollar aplicaciones completas y sistemas de software.  
- **Interpretado vs. Compilado:**  
Una de las diferencias más importante es que **los lenguajes de scripting** son principalmente **interpretados**, lo que significa que el código se ejecuta línea por línea por un intérprete en tiempo de ejecución mientras que **los lenguajes de programación** se tienen que **compilar** antes de realizar la ejecución, lo que implica que se traducen completamente a código máquina o bytecode antes de su ejecución.
- **Plataforma:**  
Por una parte **los lenguajes de scripting** suelen estar ligados a una plataforma o entorno de ejecución **específico** y por otra **los lenguajes de programación** están diseñados para ser independientes de la plataforma y pueden ejecutarse en **múltiples sistemas operativos**.
- **Velocidad en Runtime:**  
**Los lenguajes de scripting** deben interpretar línea por línea el código y disponen de una menor optimización en comparacion con los lenguajes de programación dando como resultado que estos sean mas lentos que **los lenguajes de programación** que obtienen su optimizacion por compilar el código siendo estos mas rápidos.
- **Codificación**:  
**Los lenguajes de scripting** son más adecuados para tareas de **automatización** requiriendo menos código para lograr ciertos objetivos y por otra parte **los lenguajes de programación** suelen requerir más **código manual**, ya que ofrecen mayor flexibilidad y control sobre la lógica del programa.
- **Aplicacion**:  
Como **los lenguajes de scripting** a menudo se utilizan en aplicaciones web y móviles suelen depender de **entornos de ejecución específicos** formando parte de una pila tecnológica más amplia, luego estan **los lenguajes de programación** que son utilizados para crear **aplicaciones autónomas** ya sean de escritorio, móviles o sistemas embebidos.

[Características de los Lenguajes de Script](https://www.hostingplus.com.es/blog/estos-son-los-lenguajes-de-programacion-mas-destacables-de-script/)  
[Comparativa de lenguaje Script y lenguaje Programación](https://kinsta.com/es/blog/lenguajes-script/)
### Tecnologías y Lenguajes Asociados
La tecnología frontend es la encargada de la parte visible en la que interactuan los usuarios y aunque a menudo, el término "desarrollador frontend" se confunde con los diseñadores web o gráficos, ya que ambos roles están intrínsecamente relacionados con la apariencia y la presentación de una página web o aplicación, la diferencia clave radica en que los desarrolladores frontend son responsables de tomar los diseños y las ideas concebidas por los diseñadores y convertirlas en software funcional.  
Para lograr esto, los desarrolladores frontend utilizan lenguajes de programación como:
- **HTML**: es el lenguaje de marcado utilizado para crear la estructura y el contenido de una página web. Utiliza etiquetas para definir elementos como encabezados, párrafos, imágenes, enlaces y otros elementos.
- **CSS**: se utiliza para dar estilo y formato a los elementos HTML. Permite controlar aspectos como colores, fuentes, márgenes, alineación y diseño de página. CSS es esencial para la presentación visual y la estética de una página web.
- **JavaScript**: sirve para agregar interactividad y dinamismo a las páginas web. Permite la manipulación de elementos HTML, la gestión de eventos, la validación de formularios y la comunicación con servidores a través de AJAX. Es uno de los lenguajes más utilizados en el desarrollo web frontend y backend.
- **Vue.js**: es un framework de JavaScript para el desarrollo de aplicaciones web interactivas y reactivas. Se centra en la creación de interfaces de usuario reutilizables y se caracteriza por su simplicidad y flexibilidad. Vue.js permite construir aplicaciones frontend complejas de manera eficiente.
- **React**: React es una biblioteca de JavaScript desarrollada por Facebook para la construcción de interfaces de usuario interactivas. Se basa en la creación de componentes reutilizables y utiliza un enfoque declarativo para definir cómo debería verse la interfaz en función del estado de la aplicación. React es ampliamente utilizado en el desarrollo de aplicaciones web modernas y se integra bien con otras tecnologías.

Tambien estaría bien añadir que Vue.js y React son opciones bastante populares para el desarrollo de aplicaciones web frontend, y la elección entre ellos a menudo depende de las preferencias del equipo de desarrollo y los requisitos del proyecto, esto se debe a que ambos tienen una gran comunidad de desarrolladores y una amplia variedad de recursos disponibles para aprender y utilizar.  

Codigo de ejemplo:
- **HTML:**
~~~
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tablas</title>
        <link href='index.css' rel='stylesheet' type='text/css'>
    </head>
    <header>
        <h1>Daniel Saborido Torres</h1>
    </header>
    <body>
        <div class="seleccion">
            <h1>Tablas de multiplicar</h1>
            <label for="num">Ingresa un número:</label>
	        <input type="text" id="num">
        </div>
        <div class="botones">
            <div class="boton" id="BorrarR" onclick="reseteo();">Reseteo</div>
            <div class="boton" id="Resultado" onclick="multriplicacion();">Resultado</div>
        </div>
        <br>
        <div class="tabla" id="tabla">
        </div>
    </body>
<script src="index.js"></script>
</html>
~~~
- **CSS:**
~~~
body {
    color: rgb(0, 0, 0);
}

.tabla{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin: auto;
    margin-top: 5%;
    width: 35%;
    border-collapse: collapse;
    padding: 5px;
    font-size: 25px;
    text-align: center;
}

.botones, .seleccion {
    margin: auto;
    width: 35%;
    text-align: center;
}

.boton {
    display: inline-block;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 30px;
    text-align: center;
    margin-top: 10px;
    margin-left: 10px;
    width: 30%;
}
~~~
- **JavaScript:**
~~~
function multriplicacion(){
    var num = document.getElementById("num").value;
    if (isNaN(num)) {alert("[ERROR] El valor introduciodo es un String.")}
    else if (Number.isInteger(parseInt(num))) {
        if (num.length > 15) {
            alert("[ERROR] El numero es demasiado largo (max 15 caracteres).");
            document.getElementById("num").value = "";
        }
        else{
            var tabla = document.getElementById("tabla");
            tabla.innerHTML = "";
            for (var i = 0; i <= 10; i++) {
                var div1 = document.createElement("div");
                div1.innerHTML = i;
                tabla.appendChild(div1);

                var div2 = document.createElement("div");
                div2.innerHTML = " x ";
                tabla.appendChild(div2);

                var div3 = document.createElement("div");
                div3.innerHTML = num;
                tabla.appendChild(div3);

                var div4 = document.createElement("div");
                div4.innerHTML = " = ";
                tabla.appendChild(div4);

                var div5 = document.createElement("div");
                div5.innerHTML = (num*i);
                tabla.appendChild(div5);
            }
        }
    }
    else {alert("[ERROR] No se introdujo ningún valor.")}
}

function reseteo(){
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = "";
    document.getElementById("num").value = "";
}
~~~

[Tecnologías frontend](https://apliint.com/2022/02/15/cual-es-la-diferencia-entre-frontend-y-backend-en-el-desarrollo-de-software/)
### Herramientas de Programación
- **Sublime Text**:

|  <!-- -->|  <!-- -->  |
|:-------------:|:---------------|  
|<image src="https://damiandeluca.com.ar/wp-content/uploads/2012/08/sublime-150x150.png" width=600px/>| Sublime Text es un editor de texto multiplataforma ampliamente utilizado por su velocidad y simplicidad, se caracteriza por una clave que incluye resaltado de sintaxis personalizable, autocompletado inteligente y una interfaz de usuario minimalista, tiene complementos y paquetes de terceros, disponibles a través de Package Control, amplían sus funcionalidades para adaptarse a las necesidades específicas de los desarrolladores. Es una elección popular para la edición rápida de código HTML, CSS, JavaScript y otros lenguajes.|

- **Visual Studio Code**:

| <!-- -->|<!-- -->  |
|:-------------:|:---------------|  
|<image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/150px-Visual_Studio_Code_1.35_icon.svg.png" width=500px/>| Visual Studio Code es un editor de código fuente desarrollado por Microsoft que se ha convertido en una herramienta muy popular en la comunidad de desarrollo web.Ofrece una amplia gama de extensiones disponibles a través de su marketplace que permiten a los desarrolladores trabajar con diversos lenguajes y marcos de trabajo web. VS Code incluye características como depuración integrada, control de versiones con Git, terminal integrada y soporte para extensiones que mejoran la productividad.|

- **IntelliJ**:
  
| <!-- -->|<!-- -->  |
|:-------------:|:---------------|  
|<image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/100px-IntelliJ_IDEA_Icon.svg.png" width=500px/>|IntelliJ IDEA es un entorno de desarrollo integrado (IDE) desarrollado por JetBrains. WebStorm es una versión de IntelliJ específicamente diseñada para el desarrollo web front-end.WebStorm es ampliamente elogiado por su inteligencia en el código JavaScript, autocompletado avanzado, análisis de código y depuración.También ofrece soporte para frameworks y bibliotecas populares como React, Angular y Vue.js.|

- **Eclipse**:
  
| <!-- -->|<!-- -->  |
|:-------------:|:---------------|  
|<image src="https://arquisoft.github.io/Trivial3b/images/eclipse.png" width=500px/>|Eclipse es un IDE ampliamente utilizado en el desarrollo Java, pero también es adecuado para el desarrollo web.A través de plugins como Eclipse IDE for Java EE Developers, los desarrolladores pueden trabajar en proyectos web, incluyendo aplicaciones Java EE y desarrollos en PHP.Eclipse es conocido por su comunidad activa de usuarios y su amplia gama de herramientas de desarrollo.|

- **Atom**:
 
| <!-- -->|<!-- -->   |
|:-------------:|:---------------|  
|<image src="https://www.wenjianbaike.com/wp-content/uploads/2020/05/atom.png" width=500px/>|Atom es un editor de código fuente de código abierto desarrollado por GitHub.Ofrece una interfaz de usuario moderna y altamente personalizable, con soporte para temas y paquetes de extensión que pueden personalizar la experiencia de desarrollo.Características como la vista previa en tiempo real y la edición en vivo facilitan el desarrollo web front-end con HTML y CSS.|

- **Bootstrap**:

| <!-- -->|<!-- -->    |
|:-------------:|:---------------|  
|<image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/120px-Bootstrap_logo.svg.png" width=500px/>|Bootstrap es un marco de diseño front-end de código abierto creado por Twitter y ahora mantenido por la comunidad.Proporciona una colección de componentes predefinidos, estilos CSS y JavaScript que facilitan la creación de sitios web y aplicaciones web con un diseño responsive y atractivo.Bootstrap es ampliamente utilizado para crear interfaces de usuario atractivas y funcionales, y es especialmente valioso para proyectos web que desean lograr un diseño consistente y adaptativo en diferentes dispositivos y pantallas.|

[Herramientas de programación](https://kinsta.com/es/blog/herramientas-desarrollo-web/)
