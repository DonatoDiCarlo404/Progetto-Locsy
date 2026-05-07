const rateLimit = require('express-rate-limit');

// Limiter generale per le API
exports.apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 100, // 100 richieste per IP
  message: {
    success: false,
    message: 'Troppe richieste da questo IP, riprova più tardi'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Limiter per auth (login/register)
exports.authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minuti
  max: 5, // 5 tentativi
  message: {
    success: false,
    message: 'Troppi tentativi di login, riprova tra 15 minuti'
  },
  skipSuccessfulRequests: true
});

// Limiter per creazione segnalazioni
exports.segnalazioneLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 ora
  max: 10, // 10 segnalazioni per ora
  message: {
    success: false,
    message: 'Troppe segnalazioni, riprova tra un\'ora'
  }
});
