# Usamos una imagen de PHP con Apache
FROM php:7.4-apache

# Instalamos extensiones comunes de PHP (como las que usas en el curso)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copiamos el código de tu carpeta actual al servidor de Docker
COPY . /var/www/html/

# Damos permisos para que Apache pueda leer los archivos
RUN chown -R www-data:www-data /var/www/html