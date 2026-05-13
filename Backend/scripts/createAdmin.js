/**
 * Script per creare un utente Admin
 * Esegui con: node scripts/createAdmin.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');

const User = require('../models/User');

const createAdmin = async () => {
  try {
    // Connetti al database
    await connectDB();
    
    console.log('🔍 Cerco se esiste già un admin...');
    
    const existingAdmin = await User.findOne({ email: 'admin@locsy.it' });
    
    if (existingAdmin) {
      console.log('⚠️  Admin già esistente, lo elimino e ricreo...');
      await User.deleteOne({ email: 'admin@locsy.it' });
      console.log('🗑️  Admin vecchio eliminato');
    }
    
    console.log('📝 Creo nuovo utente admin...');
    
    // Crea admin (la password verrà hashata automaticamente dal pre-save hook)
    const admin = await User.create({
      nome: 'Admin',
      cognome: 'Locsy',
      email: 'admin@locsy.it',
      password: 'admin123', // Password in chiaro - verrà hashata dal model
      ruolo: 'admin',
      attivo: true
    });
    
    console.log('✅ Admin creato con successo!');
    console.log('👤 Nome:', admin.nome, admin.cognome);
    console.log('📧 Email:', admin.email);
    console.log('🔑 Password: admin123');
    console.log('');
    console.log('💡 Usa queste credenziali per testare le route admin in Postman!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Errore:', error.message);
    process.exit(1);
  }
};

createAdmin();
