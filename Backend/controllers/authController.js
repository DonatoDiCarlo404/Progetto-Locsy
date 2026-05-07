const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const { sendTokenResponse } = require('../utils/jwt');
const { validationResult } = require('express-validator');

// @desc    Registrazione nuovo utente
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  const { nome, cognome, email, password } = req.body;

  // Verifica se l'utente esiste già
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      success: false,
      message: 'Email già registrata'
    });
  }

  // Crea utente
  const user = await User.create({
    nome,
    cognome,
    email,
    password
  });

  sendTokenResponse(user, 201, res);
});

// @desc    Login utente
// @route   POST /api/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validazione
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email e password sono obbligatori'
    });
  }

  // Trova utente con password
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Credenziali non valide'
    });
  }

  // Verifica password
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: 'Credenziali non valide'
    });
  }

  // Verifica se l'account è attivo
  if (!user.attivo) {
    return res.status(403).json({
      success: false,
      message: 'Account disattivato'
    });
  }

  sendTokenResponse(user, 200, res);
});

// @desc    Get utente corrente
// @route   GET /api/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Aggiorna profilo utente
// @route   PUT /api/auth/updateprofile
// @access  Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const fieldsToUpdate = {
    nome: req.body.nome,
    cognome: req.body.cognome,
    telefono: req.body.telefono,
    indirizzo: req.body.indirizzo
  };

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  });
});

// @desc    Aggiorna password
// @route   PUT /api/auth/updatepassword
// @access  Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  // Verifica password corrente
  if (!(await user.matchPassword(req.body.currentPassword))) {
    return res.status(401).json({
      success: false,
      message: 'Password corrente non corretta'
    });
  }

  user.password = req.body.newPassword;
  await user.save();

  sendTokenResponse(user, 200, res);
});
