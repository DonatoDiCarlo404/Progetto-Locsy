const jwt = require('jsonwebtoken');

// Genera JWT token
exports.generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

// Invia risposta con token
exports.sendTokenResponse = (user, statusCode, res) => {
  const token = exports.generateToken(user._id);

  res.status(statusCode).json({
    success: true,
    token,
    user: {
      _id: user._id,
      nome: user.nome,
      cognome: user.cognome,
      email: user.email,
      ruolo: user.ruolo,
      avatar: user.avatar
    }
  });
};
