# News Explorer — Backend

API del proyecto final de TripleTen: News Explorer. Permite registrar usuarios, iniciar sesión y guardar/eliminar artículos de noticias asociados a una cuenta.

## Demo

🔗 API en producción: [https://newsexplorerjose.mooo.com](https://newsexplorerjose.mooo.com)

## Tecnologías

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Token (JWT) para autenticación
- bcryptjs para el hash de contraseñas
- celebrate/Joi para validación de datos
- winston + express-winston para logging
- ESLint (Airbnb base)

## Rutas de la API

### Públicas
- `POST /signup` — crea un usuario (email, password, name)
- `POST /signin` — inicia sesión y devuelve un JWT

### Protegidas (requieren token JWT)
- `GET /users/me` — devuelve email y nombre del usuario autenticado
- `GET /articles` — devuelve los artículos guardados por el usuario
- `POST /articles` — guarda un nuevo artículo
- `DELETE /articles/:articleId` — elimina un artículo propio

## Instalación local

1. Clona el repositorio:

```bash
git clone https://github.com/josecarlos11dot/news-explorer-backend.git
cd news-explorer-backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Asegúrate de tener MongoDB corriendo localmente en `mongodb://127.0.0.1:27017`.

4. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

El servidor corre por defecto en el puerto 3000.

## Repositorio relacionado

- [Frontend](https://github.com/josecarlos11dot/news-explorer-frontend)
