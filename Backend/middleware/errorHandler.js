// Middleware per gestire errori globali
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log dell'errore per debug
  console.error('Error:', err);

  // Mongoose CastError (ID non valido)
  if (err.name === 'CastError') {
    const message = 'Risorsa non trovata';
    error.statusCode = 404;
    error.message = message;
  }

  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const message = `${field} già esistente`;
    error.statusCode = 400;
    error.message = message;
  }

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error.statusCode = 400;
    error.message = message;
  }

  // JWT Error
  if (err.name === 'JsonWebTokenError') {
    const message = 'Token non valido';
    error.statusCode = 401;
    error.message = message;
  }

  // JWT Expired Error
  if (err.name === 'TokenExpiredError') {
    const message = 'Token scaduto';
    error.statusCode = 401;
    error.message = message;
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Errore del server',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
