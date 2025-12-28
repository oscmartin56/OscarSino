# 1. IMAGEN BASE (solo PHP-FPM)
FROM php:8.3-fpm-alpine

# 2. INSTALACIÓN DE DEPENDENCIAS DEL SISTEMA
RUN apk add --no-cache \
    git \
    mysql-client \
    && docker-php-ext-install pdo_mysql

# 3. DIRECTORIO DE TRABAJO
WORKDIR /var/www/html

# 4. INSTALACIÓN DE COMPOSER
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 5. CONFIGURACIÓN DE PERMISOS DE LARAVEL
# Este paso es crucial para que Laravel pueda escribir archivos de logs, caché y sesiones.
RUN mkdir -p storage bootstrap/cache && \
    # Asigna permisos de lectura/escritura/ejecución (ug+rwx) a estas carpetas.
    chmod -R ug+rwx storage bootstrap/cache && \
    # Asigna la propiedad de estas carpetas al usuario 'www-data'.
    chown -R www-data:www-data storage bootstrap/cache && \
    echo "DEBUG: permisos configurados"

# 6. COMANDO DE INICIO
# Se ejecuta por defecto. Inicia el proceso de PHP-FPM, que espera peticiones de Nginx.
CMD ["php-fpm"]