# Makefile para el proyecto Casino (Laravel + React)

# Nombres de los servicios en docker-compose.yml
BACKEND_SERVICE = casino-backend
FRONTEND_SERVICE = casino-frontend
DB_SERVICE = casino-db

# =========================================================
# TAREAS DE AYUDA Y ARRANQUE (DAILY DRIVER)
# =========================================================

.PHONY: help up down clean start logs bash

help:
	@echo "==========================================="
	@echo " 	 	COMANDOS DE DOCKER COMPOSE 	 	"
	@echo "==========================================="
	@echo "make up 	 - Arranca y reconstruye todos los contenedores."
	@echo "make start 	 - Arranca los contenedores ya construidos (Uso diario)."
	@echo "make down 	 - Detiene y elimina contenedores (SIN VOLÚMENES)."
	@echo "make clean 	 - Detiene, elimina contenedores y VOLÚMENES de datos (LIMPIEZA TOTAL)."
	@echo "make logs 	 - Muestra los logs de todos los servicios."
	@echo "make bash 	 - Abre una sesión de Bash en el contenedor del Backend."
	@echo ""
	@echo "==========================================="
	@echo " 	 	TAREAS DE CONFIGURACIÓN 	 	 "
	@echo "==========================================="
	@echo "make init 	 - Ejecuta la configuración inicial del proyecto (UNA SOLA VEZ)."
	@echo "make migrate-fresh - Borra BD, migra y siembra (dev)."
	@echo "make install-front - Instala dependencias NPM en el Frontend."

up:
	docker compose up -d --build

start:
	docker compose up -d

down:
	docker compose down

clean:
	docker compose down -v

logs:
	docker compose logs -f

bash:
	docker compose exec $(BACKEND_SERVICE) bash


# TAREAS DE INICIALIZACIÓN (Solo la primera vez)

.PHONY: init composer-install key-generate migrate permissions install-front

# Tarea maestra: Configuración completa para un proyecto nuevo
init: composer-install key-generate permissions migrate install-front
	@echo "==========================================="
	@echo " 	 	¡PROYECTO LISTO PARA DESARROLLO! 	 "
	@echo " 	 	Frontend: http://localhost:3000 	 "
	@echo " 	 	Backend:  http://localhost:8000 	 "
	@echo "==========================================="

composer-install:
	@echo "--- Instalando dependencias de Composer..."
	# Volvemos a 'exec' porque 'run' está fallando con el error de servicio.
	docker compose exec $(BACKEND_SERVICE) composer install
	
key-generate:
	@echo "--- Generando APP_KEY de Laravel..."
	docker compose exec $(BACKEND_SERVICE) php artisan key:generate

permissions:
	@echo "--- Asignando permisos a storage y cache..."
	# Asume que tu imagen PHP está configurada para www-data o usuario estándar
	docker compose exec $(BACKEND_SERVICE) chmod -R 777 storage bootstrap/cache

migrate:
	@echo "--- Ejecutando migraciones de la base de datos..."
	docker compose exec $(BACKEND_SERVICE) php artisan migrate

migrate-fresh:
	@echo "--- Recreando la base de datos (migrate:fresh --seed)..."
	docker compose exec $(BACKEND_SERVICE) php artisan migrate:fresh --seed

install-front:
	@echo "--- Instalando dependencias NPM del Frontend..."
	docker compose exec $(FRONTEND_SERVICE) npm install