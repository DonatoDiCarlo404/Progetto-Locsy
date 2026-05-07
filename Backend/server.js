const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');

// Carica variabili d'ambiente
dotenv.config();

// Connetti al database
connectDB();

const app = express();

// Middleware di sicurezza
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use('/api/', apiLimiter);

// Route di test
app.get('/', (req, res) => {
  res.json({ 
    message: 'API Locsy - Server attivo! 🚀',
    version: '1.0.0',
    docs: '/api/docs'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: 'Connected'
  });
});

// Import routes
const authRoutes = require('./routes/auth');
const segnalazioniRoutes = require('./routes/segnalazioni');
const notizieRoutes = require('./routes/notizie');
const commentiRoutes = require('./routes/commenti');
const eventiRoutes = require('./routes/eventi');
const ristorantiRoutes = require('./routes/ristoranti');
const recensioniRoutes = require('./routes/recensioni');
const offerteRoutes = require('./routes/offerte');
const luoghiRoutes = require('./routes/luoghi');
const salvatiRoutes = require('./routes/salvati');
const notificheRoutes = require('./routes/notifiche');
const farmacieRoutes = require('./routes/farmacie');
const adminRoutes = require('./routes/admin');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/segnalazioni', segnalazioniRoutes);
app.use('/api/notizie', notizieRoutes);
app.use('/api/commenti', commentiRoutes);
app.use('/api/eventi', eventiRoutes);
app.use('/api/ristoranti', ristorantiRoutes);
app.use('/api/recensioni', recensioniRoutes);
app.use('/api/offerte', offerteRoutes);
app.use('/api/luoghi', luoghiRoutes);
app.use('/api/salvati', salvatiRoutes);
app.use('/api/notifiche', notificheRoutes);
app.use('/api/farmacie', farmacieRoutes);
app.use('/api/admin', adminRoutes);

// Gestione errori 404
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Route non trovata' 
  });
});

// Error handler middleware (deve essere l'ultimo)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server in esecuzione sulla porta ${PORT}`);
  console.log(`📍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
