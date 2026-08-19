# News Explorer — Backend

API del proyecto final de TripleTen: News Explorer. Permite registrar usuarios, iniciar sesión y guardar/eliminar artículos de noticias asociados a una cuenta.

## Demo

🔗 API en producción: [https://api.newsexplorerjose.mooo.com](https://api.newsexplorerjose.mooo.com)

## Tecnologías

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Token (JWT) para autenticación
- bcryptjs para el hash de contraseñas
- celebrate/Joi para validación de datos
- winston + express-winston para logging
- helmet para headers de seguridad
- express-rate-limit para limitar solicitudes por IP
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

## Nota sobre warnings de instalación

Al ejecutar `npm install`, aparecen algunos `npm warn deprecated` (paquetes como `glob`, `rimraf`, `inflight`, `@humanwhocodes/*`). Estos provienen de dependencias internas de **ESLint 8**, versión requerida por este proyecto porque es la última compatible con el formato `.eslintrc` (extendiendo `airbnb-base`) que exige explícitamente la rúbrica del bootcamp. Migrar a ESLint 9 o superior eliminaría estos warnings, pero requeriría reemplazar `.eslintrc` por el nuevo formato `eslint.config.js`, lo cual entraría en conflicto con ese requisito puntual. Los warnings son informativos: no afectan la funcionalidad, seguridad ni el resultado de `npx eslint .`, que se ejecuta sin errores.

## Nota sobre el flujo de Git

A diferencia de la entrega del frontend (donde hice merge de `stage-react-api` a `main` para practicar el flujo completo), en esta entrega dejo intencionalmente el Pull Request de `stage-back-end` → `main` **abierto sin fusionar**, tal como indica la consigna oficial del proyecto: el merge debe realizarse únicamente después de que el trabajo sea acreditado por el revisor.

## Repositorio relacionado

- [Frontend](https://github.com/josecarlos11dot/news-explorer-frontend)
