# Levantar el Front
npm run dev

# Crear los Contenedores
docker compose up -d --build

# Iniciar los contenedores una vez iniciados
docker compose up -d (El -d es para que se ejecute en segundo plano y pueda seguir utilizando la terminal)

# Utilizar para entrar a la parte del php artisan
docker exec -it casino-backend sh/ssh/bash

# Crear las Migraciones
php artisan migrate

# Crear Controladores
php artisan make:controller "Nombre del Contolador"

# Crear Modelos
php artisan make:model "Nombre del modelo" -m 

# Creación de modelo,migraciones y contolador de recursos(Comando Óptimo)
php artisan make:model "NombreDelModelo" -m --controller --resource --model="NombreDelModelo"

# Problemas de Permisos de Usuario
sudo chown -R $USER:$USER .     