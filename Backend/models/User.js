const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Il nome è obbligatorio'],
    trim: true
  },
  cognome: {
    type: String,
    required: [true, 'Il cognome è obbligatorio'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'L\'email è obbligatoria'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Email non valida']
  },
  password: {
    type: String,
    required: [true, 'La password è obbligatoria'],
    minlength: [6, 'La password deve essere di almeno 6 caratteri'],
    select: false // Non restituire la password nelle query
  },
  ruolo: {
    type: String,
    enum: ['cittadino', 'admin'],
    default: 'cittadino'
  },
  avatar: {
    type: String,
    default: ''
  },
  telefono: {
    type: String,
    default: ''
  },
  indirizzo: {
    type: String,
    default: ''
  },
  dataRegistrazione: {
    type: Date,
    default: Date.now
  },
  attivo: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index per performance (email già indicizzato da unique: true)
userSchema.index({ ruolo: 1 });

// Hash password prima del salvataggio
userSchema.pre('save', async function() {
  if (!this.isModified('password')) {
    return;
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Metodo per confrontare password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Virtual per nome completo
userSchema.virtual('nomeCompleto').get(function() {
  return `${this.nome} ${this.cognome}`;
});

module.exports = mongoose.model('User', userSchema);
