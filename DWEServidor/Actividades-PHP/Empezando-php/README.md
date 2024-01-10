# 2º DAW - DWES
# Clases lenguaje php 2021/22

## Introducción

Documentos:  
[Empezando con PHP](https://github.com/IES-Rafael-Alberti/clases-php-21-22/blob/main/docs/Empezando%20con%20PHP.pdf)  
[Acceso a Bases de datos desde PHP](https://github.com/IES-Rafael-Alberti/clases-php-21-22/blob/main/docs/PHP%20y%20BD.pdf)

Enlaces de interés:  
[Documentación lenguaje php](https://www.php.net/manual/es/)  
[Orientación a objetos en php](https://code.tutsplus.com/es/tutorials/object-oriented-php-for-beginners--net-12762)  
[Usando PDO para crear Objetos de acceso a datos](https://www.hashbangcode.com/article/using-pdo-create-data-access-object)

Instrucciones de instalación (usando terminal):
1. Clonar el repositorio: ```git clone https://github.com/IES-Rafael-Alberti/clases-php-21-22.git```  
2.1 Revisar docker compose: en sistemas no Linux se debe comentar la configuración de extra_hosts (está comentado en el propio archivo)  
2.2 Crear contenedores: ```docker-compose up```  
3. Importar clases.sql usando [phpmyadmin](http://localhost:8080)

## Conexión a BD utilizando PDO

Vamos a organizar la aplicación utilizando el patrón de arquitectura [MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador), con una clase ([Model](https://github.com/IES-Rafael-Alberti/clases-php-21-22/blob/main/codigophp/conectando-pdo/bd.php)) para contener todos los elementos relacionados con la conexión al motor de bases de datos (mysql o mariadb) y la ejecución de sentencias SQL.

Esta clase va a seguir un patrón de diseño denominado [Singleton](https://refactoring.guru/es/design-patterns/singleton), de forma que sólo va a existir una instancia del modelo almacenado como atributo estático de la clase. Para acceder a esta instancia del objeto se proporciona un método estático a la clase que devolverá la instancia de Model o la creará si fuera la primera vez que se llama.

Para las entidades de datos se seguirá una aproximación similar a los sistemas ORM (Mapeo Objeto-Relacional). Por cada entidad del modelo crearemos una clase que será el formato para recuperar los datos de la base de datos. 

