module.exports.PORT = process.env.PORT || 3000;
module.exports.MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/news-explorer';
module.exports.JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

module.exports.ERROR_MESSAGES = {
  UNAUTHORIZED: 'Se requiere autorización',
  INVALID_TOKEN: 'Token inválido',
  INVALID_CREDENTIALS: 'Correo o contraseña incorrectos',
  USER_NOT_FOUND: 'Usuario no encontrado',
  EMAIL_TAKEN: 'El correo ya está registrado',
  INVALID_USER_DATA: 'Datos inválidos al crear el usuario',
  INVALID_ARTICLE_DATA: 'Datos inválidos al crear el artículo',
  ARTICLE_NOT_FOUND: 'Artículo no encontrado',
  FORBIDDEN_DELETE: 'No puedes borrar artículos de otro usuario',
  INVALID_ARTICLE_ID: 'ID de artículo inválido',
  NOT_FOUND: 'Recurso no encontrado',
  SERVER_ERROR: 'Error interno del servidor',
};
