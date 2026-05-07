const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const { authLimiter } = require('../middleware/rateLimiter');
const {
  register,
  login,
  getMe,
  updateProfile,
  updatePassword
} = require('../controllers/authController');

// Validazione registrazione
const registerValidation = [
  body('nome').trim().notEmpty().withMessage('Il nome è obbligatorio'),
  body('cognome').trim().notEmpty().withMessage('Il cognome è obbligatorio'),
  body('email').isEmail().withMessage('Email non valida'),
  body('password').isLength({ min: 6 }).withMessage('La password deve essere di almeno 6 caratteri')
];

// Routes pubbliche
router.post('/register', authLimiter, registerValidation, register);
router.post('/login', authLimiter, login);

// Routes protette
router.get('/me', protect, getMe);
router.put('/updateprofile', protect, updateProfile);
router.put('/updatepassword', protect, updatePassword);

module.exports = router;
