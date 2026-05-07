const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protegge le route richiedendo autenticazione
exports.protect = async (req, res, next) => {
  let token;

  // Verifica se il token è presente nell'header Authorization
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Non autorizzato - Token mancante'
    });
  }

  try {
    // Verifica il token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Aggiungi l'utente alla request (senza password)
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Utente non trovato'
      });
    }

    if (!req.user.attivo) {
      return res.status(403).json({
        success: false,
        message: 'Account disattivato'
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Non autorizzato - Token non valido'
    });
  }
};

// Restringe l'accesso in base al ruolo
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.ruolo)) {
      return res.status(403).json({
        success: false,
        message: `Il ruolo '${req.user.ruolo}' non è autorizzato ad accedere a questa risorsa`
      });
    }
    next();
  };
};
