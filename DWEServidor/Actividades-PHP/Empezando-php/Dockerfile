# Utilizamos una imagen base de PHP con FPM
FROM php:8.2.14-fpm

# Directorio de trabajo en la imagen
WORKDIR /var/www/html

# Copiamos el contenido de la carpeta "codigophp" al directorio de trabajo en la imagen
COPY codigophp/ .

# Exponemos el puerto 9000, que es el puerto por defecto para FPM
EXPOSE 9000

# Comando que se ejecutará al arrancar el contenedor
CMD ["php-fpm"]
