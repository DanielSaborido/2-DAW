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
  
### Modelos de Programación en Entornos Cliente/Servidor
- **Modelo Punto a Punto**:  
Una red P2P (Peer-to-Peer) es una estructura de red en la que los dispositivos individuales (peers) se comportan tanto como proveedores como consumidores de recursos, en contraposición al modelo cliente-servidor donde los clientes obtienen recursos de servidores centralizados.
![Punto a Punto](https://2.bp.blogspot.com/-MoAoJ_BPZtA/UI_wHcq2xVI/AAAAAAAAAAY/oO2T3uXYB8w/s1600/conectando-dos-pc-punto-a-punto-3.jpg)  
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
![Logo JavaScript](https://www.thecrazyprogrammer.com/wp-content/uploads/2020/11/JavaScript-Logo-150x150.png?ezimgfmt=ng:webp/ngcb1)  
Para ejecutar una aplicación JavaScript en un navegador web, es necesario incluir el código JavaScript dentro de un documento HTML, ya que es el formato que el navegador comprende y representa.  
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
- Revisar el codigo cada vez que se modifique en caso de que surja algun imprevisto de compatibilidad, ya que pueden surjir un error de sintaxis (aquellos que son por escribir mal un comando) que son faciles de solucionar o un error lógico siendo este mas coplicado de solucionar ya que no suele ser indicado en la consola de comando y no trada de directamente fallar el programa sino de darte un resultadoerroneo.

[Ejecucion de javaScript en web](https://programamos.es/unidad-2-los-entornos-de-ejecucion/)  
[Compatibilidad entre navegadores](https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Cross_browser_testing)  
[Analisis y solucion de la compatibilidad con JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
### Lenguajes de Programación en Entorno Cliente
- JavaScript
- TypeScript
- SASS
- Elm
- React

[Lenguajes de programacion cliente](https://blog.back4app.com/es/los-10-principales-lenguajes-de-desarrollo-del-lado-del-cliente/)
### Características de los Lenguajes de Script

[Características](https://www.hostingplus.com.es/blog/estos-son-los-lenguajes-de-programacion-mas-destacables-de-script/)
### Tecnologías y Lenguajes Asociados
    

### Herramientas de Programación

[Herramientas](https://www.hostinger.es/tutoriales/herramientas-de-programacion)
