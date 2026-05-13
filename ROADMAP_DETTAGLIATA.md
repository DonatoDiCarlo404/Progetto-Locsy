# 🗺️ ROADMAP DETTAGLIATA - App Comunale Completa

> **App gestionale comunale con funzionalità social, servizi cittadini e business locale**  
> **Stack**: MERN (MongoDB, Express.js, React + Vite, Node.js)  
> **Target**: Web + Mobile (PWA primary, App Store opzionale)  
> **Deploy**: Vercel (frontend) + Render (backend) + MongoDB Atlas

---

## 📋 INDICE RAPIDO

- [FASE 0: Setup e Pianificazione](#fase-0) - Settimana 1
- [FASE 1-2: Backend Fondamenta](#fase-1) - Settimane 2-4
- [FASE 3: Autenticazione](#fase-3) - Settimana 5
- [FASE 4: API Core](#fase-4) - Settimane 6-9
- [FASE 5: Frontend Base](#fase-5) - Settimane 10-12
- [FASE 6: Homepage e Card Servizi](#fase-6) - Settimane 13-15
- [FASE 7: Sezioni Social](#fase-7) - Settimane 16-17
- [FASE 8: Dashboard Admin](#fase-8) - Settimana 18
- [FASE 9: Funzionalità Avanzate](#fase-9) - Settimane 19-20
- [FASE 10: Testing e Ottimizzazione](#fase-10) - Settimana 21
- [FASE 11: Deploy Produzione](#fase-11) - Settimana 22
- [FASE 12: SEO e Performance](#fase-12) - Settimana 23
- [FASE 13: PWA Mobile](#fase-13) - Settimana 24
- [FASE 14: App Store (Opzionale)](#fase-14) - Settimane 25-26
- [FASE 15: Lancio e Post-Lancio](#fase-15) - Settimana 27+

---

## 🎯 FUNZIONALITÀ COMPLETE APP

### 🏠 Homepage
- 📅 **Calendario** eventi integrato
- 🌤️ **Meteo** locale in tempo reale
- 5 **Card Servizi**: Segnala, Rifiuti, Trasporti, Farmacie, Sanità
- 📰 **Notizie dal Comune** (con commenti social)
- 🎉 **Eventi & Esperienze** (calendario eventi)
- 🏛️ **Luoghi da Visitare** (attrazioni turistiche)
- 🛍️ **Offerte & Negozi** (promozioni commercianti)
- 🍕 **Dove Mangiare** (ristoranti con rating)

### 👤 Utenti
- Registrazione/Login (email + password)
- Profilo personale
- Impostazioni (notifiche, privacy)
- Sistema **Salvati/Preferiti**
- Commenti su notizie
- Recensioni ristoranti

### 👨‍💼 Amministratore
- Dashboard completa
- Gestione segnalazioni (cambio stato, risposta)
- Pubblicazione notizie
- Gestione eventi
- Moderazione commenti
- Gestione ristoranti/offerte/luoghi
- Analytics

### 📱 Navigazione
- **Navbar superiore**: Logo + info comune
- **Navbar inferiore sticky**: Home | Ricerca | Salvati | Profilo

---

## 📦 FASE 0: PIANIFICAZIONE E SETUP (Settimana 1)

### 0.1 Analisi e Documentazione
- [ ] Creare wireframes per tutte le pagine principali:
  - Homepage (con calendario + meteo + card)
  - Dettaglio segnalazione
  - Pagina rifiuti (con assistente)
  - Pagina notizie (con commenti)
  - Pagina eventi
  - Pagina ristoranti (con rating)
  - Dashboard admin
  - Profilo utente
- [ ] Definire schema colori/branding
- [ ] Creare documento architettura (models, API, routes)
- [ ] Definire ruoli: Cittadino, Amministratore, (Moderatore opzionale)

### 0.2 Setup Ambiente Sviluppo
- [ ] Installare Node.js (v18+ LTS)
- [ ] Installare MongoDB Compass
- [ ] Setup account MongoDB Atlas (free tier)
- [ ] Configurare Git + GitHub repository
- [ ] Setup VS Code con estensioni:
  - ESLint
  - Prettier
  - ES7+ React/Redux snippets
  - MongoDB for VS Code
- [ ] Installare Postman/Insomnia (test API)

### 0.3 Inizializzazione Progetto
```bash
mkdir app-comunale
cd app-comunale
git init
echo "node_modules\n.env\n.DS_Store" > .gitignore
```

---

## 🔧 FASE 1: BACKEND - SETUP BASE (Settimane 2-3) ✅ COMPLETATA

> **🎯 CHECKPOINT FASE 1 - Data completamento: 5 Maggio 2026**  
> **Status**: ✅ Backend setup completato  
> **Struttura**: Cartelle, dipendenze, middleware tutti configurati  
> **Server**: Express funzionante con CORS, Helmet, Rate Limiting

### 1.1 Struttura Backend
```bash
mkdir backend
cd backend
npm init -y
```

**Installare dipendenze:**
```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install express-validator express-rate-limit helmet
npm install multer cloudinary
npm install --save-dev nodemon
```

**Struttura cartelle:**
```
backend/
├── config/
│   ├── db.js              # Connessione MongoDB
│   └── cloudinary.js      # Config upload immagini
├── models/
│   ├── User.js
│   ├── Segnalazione.js
│   ├── Notizia.js
│   ├── Evento.js
│   ├── Ristorante.js
│   ├── Offerta.js
│   ├── Luogo.js
│   ├── Commento.js
│   ├── Recensione.js
│   ├── Salvato.js
│   ├── Notifica.js
│   ├── Farmacia.js
│   ├── RifiutoDatabase.js
│   └── ImpostazioniComune.js
├── controllers/
│   ├── authController.js
│   ├── segnalazioniController.js
│   ├── notizieController.js
│   ├── eventiController.js
│   ├── ristorantiController.js
│   ├── offerteController.js
│   ├── luoghiController.js
│   ├── commentiController.js
│   ├── recensioniController.js
│   ├── salvatiController.js
│   ├── notificheController.js
│   ├── rifiutiController.js
│   ├── farmacieController.js
│   ├── trasportiController.js
│   ├── meteoController.js
│   └── adminController.js
├── routes/
│   ├── auth.js
│   ├── segnalazioni.js
│   ├── notizie.js
│   ├── eventi.js
│   ├── ristoranti.js
│   ├── offerte.js
│   ├── luoghi.js
│   ├── commenti.js
│   ├── recensioni.js
│   ├── salvati.js
│   ├── notifiche.js
│   ├── rifiuti.js
│   ├── farmacie.js
│   ├── trasporti.js
│   ├── meteo.js
│   ├── ricerca.js
│   └── admin.js
├── middleware/
│   ├── auth.js            # Verifica JWT
│   ├── admin.js           # Verifica ruolo admin
│   ├── upload.js          # Multer config
│   └── errorHandler.js
├── utils/
│   ├── seedRifiuti.js     # Popola DB rifiuti
│   └── notificationHelper.js
├── server.js
└── .env
```

### 1.2 File .env
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_super_secret_key_change_in_production
JWT_EXPIRE=30d
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
OPENWEATHER_API_KEY=
```

### 1.3 Server.js Base
- [ ] Configurare Express server
- [ ] Middleware: CORS, express.json(), helmet
- [ ] Connessione MongoDB
- [ ] Error handler centralizzato
- [ ] Test server: `npm run dev`

---

## 🗄️ FASE 2: DATABASE MODELS (Settimana 4) ✅ COMPLETATA

> **🎯 CHECKPOINT FASE 2 - Data completamento: 6 Maggio 2026**  
> **Status**: ✅ Tutti i 13 models creati e funzionanti  
> **Models**: User, Segnalazione, Notizia, Evento, Ristorante, Recensione, Offerta, Luogo, Commento, Salvato, Notifica, Farmacia, ImpostazioniComune  
> **Features**: Schema validation, relationships, indexes, default values

### 2.1 User Model
```javascript
// models/User.js
{
  nome: String (required),
  cognome: String (required),
  email: String (unique, required),
  password: String (hashed, required),
  ruolo: String (enum: ['cittadino', 'admin'], default: 'cittadino'),
  avatar: String (URL),
  telefono: String,
  dataRegistrazione: Date (default: now),
  ultimoAccesso: Date,
  attivo: Boolean (default: true),
  verificato: Boolean (default: false),
  impostazioniNotifiche: {
    rifiuti: Boolean (default: false),
    orarioNotificaRifiuti: String (default: '20:30'),
    notizie: Boolean (default: true),
    eventi: Boolean (default: true),
    segnalazioni: Boolean (default: true)
  }
}
```

### 2.2 Segnalazione Model
```javascript
// models/Segnalazione.js
{
  autore: ObjectId (ref: 'User', required),
  descrizione: String (required),
  categoria: String (enum: [
    'Strade e Marciapiedi',
    'Illuminazione Pubblica',
    'Rifiuti e pulizia',
    'Verde pubblico',
    'Segnaletica',
    'Altro'
  ], required),
  foto: [String] (array URL),
  posizione: {
    indirizzo: String,
    coordinate: {
      type: { type: String, default: 'Point' },
      coordinates: [Number] // [lng, lat]
    }
  },
  stato: String (enum: ['nuova', 'in_lavorazione', 'risolta', 'rifiutata'], default: 'nuova'),
  priorita: String (enum: ['bassa', 'media', 'alta'], default: 'media'),
  dataCreazione: Date (default: now),
  dataAggiornamento: Date,
  rispostaAdmin: String,
  dataRisposta: Date,
  likes: [ObjectId] (ref: 'User'),
  viste: Number (default: 0)
}
// Index geospaziale per ricerca per posizione
```

### 2.3 Notizia Model
```javascript
// models/Notizia.js
{
  titolo: String (required),
  contenuto: String (required),
  categoria: String (enum: ['Viabilità', 'Vita cittadina', 'Istituzionale', 'Cultura'], required),
  immagineCopertina: String (URL),
  autore: ObjectId (ref: 'User'), // Admin
  dataPubblicazione: Date (default: now),
  dataAggiornamento: Date,
  pubblicata: Boolean (default: true),
  inEvidenza: Boolean (default: false),
  tags: [String],
  likes: [ObjectId] (ref: 'User'),
  viste: Number (default: 0),
  commentiAbilitati: Boolean (default: true)
}
```

### 2.4 Evento Model
```javascript
// models/Evento.js
{
  titolo: String (required),
  descrizione: String (required),
  immagine: String (URL),
  dataInizio: Date (required),
  dataFine: Date,
  oraInizio: String,
  oraFine: String,
  luogo: String,
  indirizzo: String,
  coordinate: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  categoria: String,
  organizzatore: String,
  suggerito: Boolean (default: false),
  partecipanti: [ObjectId] (ref: 'User'),
  maxPartecipanti: Number,
  prezzo: Number (default: 0),
  linkEsterno: String,
  pubblicato: Boolean (default: true),
  dataCreazione: Date (default: now)
}
```

### 2.5 Ristorante Model
```javascript
// models/Ristorante.js
{
  nome: String (required),
  descrizione: String,
  categoria: String (enum: ['Tradizionale', 'Pizza', 'Gourmet', 'Fast Food', 'Etnico', 'Altro']),
  immagine: String (URL),
  indirizzo: String (required),
  coordinate: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  telefono: String,
  email: String,
  sitoWeb: String,
  orari: [{
    giorno: String, // es. 'Lunedì'
    aperto: Boolean,
    orario: String // es. '12:00-15:00, 19:00-23:00'
  }],
  fasciaDiPrezzo: String (enum: ['€', '€€', '€€€', '€€€€']),
  ratingMedio: Number (default: 0),
  numeroRecensioni: Number (default: 0),
  pubblicato: Boolean (default: true),
  dataCreazione: Date (default: now)
}
```

### 2.6 Recensione Model
```javascript
// models/Recensione.js
{
  ristorante: ObjectId (ref: 'Ristorante', required),
  autore: ObjectId (ref: 'User', required),
  rating: Number (min: 1, max: 5, required),
  commento: String,
  foto: [String],
  dataCreazione: Date (default: now),
  likes: [ObjectId] (ref: 'User')
}
// Index: ristorante + autore (unique) - una recensione per utente per ristorante
```

### 2.7 Offerta Model
```javascript
// models/Offerta.js
{
  titolo: String (required),
  descrizione: String (required),
  nomeNegozio: String (required),
  categoria: String,
  immagine: String (URL),
  sconto: String, // es. '20%'
  dataInizio: Date,
  dataFine: Date,
  indirizzo: String,
  telefono: String,
  pubblicato: Boolean (default: true),
  dataCreazione: Date (default: now)
}
```

### 2.8 Luogo Model
```javascript
// models/Luogo.js
{
  nome: String (required),
  descrizione: String,
  categoria: String (enum: ['Monumento', 'Museo', 'Chiesa', 'Parco', 'Altro']),
  immagine: String (URL),
  galleria: [String],
  indirizzo: String,
  coordinate: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  orari: String,
  prezzo: String,
  telefono: String,
  sitoWeb: String,
  suggerito: Boolean (default: false),
  pubblicato: Boolean (default: true),
  dataCreazione: Date (default: now)
}
```

### 2.9 Commento Model
```javascript
// models/Commento.js
{
  contenuto: String (required),
  autore: ObjectId (ref: 'User', required),
  tipoRiferimento: String (enum: ['notizia', 'evento'], required),
  riferimento: ObjectId (required), // ID notizia o evento
  dataCreazione: Date (default: now),
  likes: [ObjectId] (ref: 'User'),
  risposte: [ObjectId] (ref: 'Commento') // Thread commenti
}
```

### 2.10 Salvato Model
```javascript
// models/Salvato.js
{
  utente: ObjectId (ref: 'User', required),
  tipo: String (enum: ['notizia', 'evento', 'ristorante', 'luogo', 'offerta'], required),
  riferimento: ObjectId (required),
  dataSalvataggio: Date (default: now)
}
// Index: utente + tipo + riferimento (unique)
```

### 2.11 Notifica Model
```javascript
// models/Notifica.js
{
  utente: ObjectId (ref: 'User', required),
  tipo: String (enum: ['segnalazione', 'commento', 'evento', 'rifiuti', 'sistema'], required),
  titolo: String (required),
  messaggio: String (required),
  link: String,
  letta: Boolean (default: false),
  dataCreazione: Date (default: now)
}
```

### 2.12 Farmacia Model
```javascript
// models/Farmacia.js
{
  nome: String (required),
  indirizzo: String (required),
  coordinate: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  telefono: String (required),
  diTurno: Boolean (default: false),
  dataTurno: Date,
  orari: String, // es. '08:30 - 19:30'
  apertura247: Boolean (default: false),
  email: String,
  pubblicato: Boolean (default: true)
}
```

### 2.13 RifiutoDatabase Model
```javascript
// models/RifiutoDatabase.js
{
  nome: String (required, unique), // es. 'guscio uova'
  sinonimi: [String], // es. ['gusci', 'uova guscio']
  categoria: String (enum: [
    'Organico',
    'Carta e Cartone',
    'Plastica e Lattine',
    'Vetro',
    'Indifferenziato',
    'Ingombranti'
  ], required),
  descrizione: String,
  note: String // es. 'se sporco di cibo → indifferenziato'
}
// Index text search su nome e sinonimi
```

### 2.14 ImpostazioniComune Model
```javascript
// models/ImpostazioniComune.js
{
  nomeComune: String (required),
  logo: String (URL),
  coloriTema: {
    primario: String, // hex
    secondario: String
  },
  contatti: {
    telefono: String,
    email: String,
    pec: String,
    indirizzo: String
  },
  social: {
    facebook: String,
    instagram: String,
    twitter: String
  },
  calendarioRifiuti: [{
    giorno: String, // es. 'Lunedì'
    tipo: String // es. 'Carta e Cartone'
  }],
  trasporti: {
    lineaUrbana: {
      orari: String,
      giorni: String
    }
  },
  numeriUtili: [{
    nome: String, // es. 'Ingombranti'
    numero: String
  }]
}
```

---

## 🔐 FASE 3: AUTENTICAZIONE (Settimana 5) ✅ COMPLETATA

> **🎯 CHECKPOINT FASE 3 - Data completamento: 6 Maggio 2026**  
> **Status**: ✅ Sistema autenticazione completo  
> **Features**: JWT tokens, password hashing (bcrypt), middleware auth, middleware admin  
> **Endpoints**: /register, /login, /me, /update-profile, /change-password

### 3.1 Middleware Auth
- [ ] Creare `middleware/auth.js` per verificare JWT
- [ ] Creare `middleware/admin.js` per verificare ruolo admin
- [ ] Helper per hash password (bcryptjs)
- [ ] Helper per generare JWT

### 3.2 Auth Controller e Routes
**POST /api/auth/register**
- [ ] Validazione input (email valida, password min 8 caratteri)
- [ ] Check email già esistente
- [ ] Hash password
- [ ] Crea utente
- [ ] Genera JWT
- [ ] Return user + token

**POST /api/auth/login**
- [ ] Validazione credenziali
- [ ] Confronto password
- [ ] Aggiorna ultimoAccesso
- [ ] Genera JWT
- [ ] Return user + token

**GET /api/auth/me**
- [ ] Middleware auth required
- [ ] Return utente corrente dal token

**PUT /api/auth/update-profile**
- [ ] Update nome, cognome, telefono, avatar
- [ ] Validazione

**PUT /api/auth/update-settings**
- [ ] Update impostazioniNotifiche

**PUT /api/auth/change-password**
- [ ] Verifica vecchia password
- [ ] Hash nuova password
- [ ] Update

---

## 🚀 FASE 4: API BACKEND CORE (Settimane 6-9) ✅ COMPLETATA

> **🎯 CHECKPOINT FASE 4 - Data completamento: 7 Maggio 2026**  
> **Status**: ✅ Core API Backend completate e funzionanti  
> **Controllers creati**: 11 (Auth, Segnalazioni, Notizie, Commenti, Eventi, Ristoranti, Recensioni, Offerte, Luoghi, Salvati, Notifiche, Farmacie, Admin)  
> **Routes montate**: 13 endpoint principali  
> **Middleware**: Auth, Authorization, Error Handling, Rate Limiting, Upload  
> **Nota**: API Rifiuti, Trasporti, Meteo e Ricerca Globale verranno implementate in seguito durante lo sviluppo frontend

### 4.1 API Segnalazioni (Settimana 6) ✅

**GET /api/segnalazioni**
- [ ] Lista tutte le segnalazioni
- [ ] Filtri: categoria, stato, autore
- [ ] Sort: più recenti, più viste
- [ ] Paginazione (limit, skip)
- [ ] Populate autore (nome, avatar)

**GET /api/segnalazioni/:id**
- [ ] Dettaglio segnalazione
- [ ] Incrementa viste
- [ ] Populate autore

**POST /api/segnalazioni** (auth required)
- [ ] Crea nuova segnalazione
- [ ] Upload foto (max 5)
- [ ] Validazione campi
- [ ] Notifica admin

**PUT /api/segnalazioni/:id** (auth required)
- [ ] Solo autore o admin può modificare
- [ ] Update descrizione, categoria, foto

**DELETE /api/segnalazioni/:id** (auth required)
- [ ] Solo autore o admin

**PUT /api/segnalazioni/:id/stato** (admin only)
- [ ] Cambia stato segnalazione
- [ ] Aggiungi rispostaAdmin
- [ ] Notifica autore segnalazione

**POST /api/segnalazioni/:id/like** (auth required)
- [ ] Toggle like

**GET /api/segnalazioni/mie** (auth required)
- [ ] Segnalazioni utente loggato

**GET /api/segnalazioni/vicine**
- [ ] Query geospaziale (coordinate + radius)
- [ ] Return segnalazioni vicine

### 4.2 API Notizie (Settimana 6) ✅

**GET /api/notizie**
- [x] Lista notizie pubblicate
- [x] Filtri: categoria, inEvidenza
- [x] Sort: più recenti
- [x] Paginazione

**GET /api/notizie/:id**
- [x] Dettaglio notizia
- [x] Incrementa viste
- [x] Include count commenti

**POST /api/notizie** (admin only)
- [x] Crea notizia
- [ ] Upload immagine copertina (da implementare)

**PUT /api/notizie/:id** (admin only)
- [x] Update notizia

**DELETE /api/notizie/:id** (admin only)
- [x] Elimina notizia + commenti

**POST /api/notizie/:id/like** (auth required)
- [x] Toggle like

### 4.3 API Commenti (Settimana 7) ✅

**GET /api/commenti**
- [x] Query: tipo + riferimento ID
- [x] Return commenti con autore
- [x] Sort: più vecchi prima

**POST /api/commenti** (auth required)
- [x] Crea commento
- [ ] Notifica autore notizia/evento (da implementare)

**DELETE /api/commenti/:id** (auth required)
- [x] Solo autore o admin

**POST /api/commenti/:id/like** (auth required)
- [x] Toggle like

**POST /api/commenti/:id/reply** (auth required)
- [x] Risposta a commento (thread)

### 4.4 API Eventi (Settimana 7) ✅

**GET /api/eventi**
- [x] Filtri: data (futuri/passati), categoria
- [x] Sort: prossimi eventi prima
- [x] Include: suggerito in evidenza

**GET /api/eventi/:id**
- [x] Dettaglio evento
- [x] Include: numero partecipanti, commenti

**POST /api/eventi** (admin only)
- [x] Crea evento
- [ ] Upload immagine (da implementare)

**PUT /api/eventi/:id** (admin only)
- [x] Update evento

**DELETE /api/eventi/:id** (admin only)
- [x] Elimina evento

**POST /api/eventi/:id/partecipa** (auth required)
- [x] Toggle partecipazione
- [x] Check maxPartecipanti

**GET /api/eventi/calendario**
- [x] Return eventi aggregati per mese
- [x] Per componente calendario

### 4.5 API Ristoranti e Recensioni (Settimana 8) ✅

**GET /api/ristoranti**
- [x] Lista ristoranti pubblicati
- [x] Filtri: categoria, fasciaDiPrezzo
- [x] Sort: rating, nome
- [x] Include: ratingMedio

**GET /api/ristoranti/:id**
- [x] Dettaglio ristorante
- [x] Include: recensioni recenti

**POST /api/ristoranti** (admin only)
- [x] Crea ristorante

**PUT /api/ristoranti/:id** (admin only)
- [x] Update ristorante

**DELETE /api/ristoranti/:id** (admin only)
- [x] Elimina

**POST /api/recensioni** (auth required)
- [x] Crea recensione (solo se non esiste già)
- [x] Update ratingMedio ristorante
- [x] Update numeroRecensioni

**PUT /api/recensioni/:id** (auth required)
- [x] Modifica solo propria recensione
- [x] Ricalcola ratingMedio

**DELETE /api/recensioni/:id** (auth required)
- [x] Solo autore o admin

**GET /api/ristoranti/:id/recensioni**
- [x] Lista recensioni ristorante
- [x] Sort: più recenti

### 4.6 API Offerte, Luoghi (Settimana 8) ✅

**Offerte** (CRUD admin):
- [x] GET /api/offerte
- [x] GET /api/offerte/:id
- [x] POST /api/offerte (admin)
- [x] PUT /api/offerte/:id (admin)
- [x] DELETE /api/offerte/:id (admin)

**Luoghi** (CRUD admin):
- [x] GET /api/luoghi
- [x] GET /api/luoghi/:id
- [x] POST /api/luoghi (admin)
- [x] PUT /api/luoghi/:id (admin)
- [x] DELETE /api/luoghi/:id (admin)

### 4.7 API Salvati (Settimana 9) ✅

**GET /api/salvati** (auth required)
- [x] Return tutti i salvati utente
- [x] Populate riferimenti completi
- [x] Group by tipo

**POST /api/salvati** (auth required)
- [x] Salva item (notizia/evento/ristorante/luogo/offerta)
- [x] Check duplicati

**DELETE /api/salvati/:id** (auth required)
- [x] Rimuovi da salvati

**POST /api/salvati/toggle** (auth required)
- [x] Toggle salva/rimuovi in un'unica chiamata

### 4.8 API Rifiuti (Settimana 9)

**GET /api/rifiuti/cerca**
- [ ] Query param: q (es. 'guscio uova')
- [ ] Text search su nome + sinonimi
- [ ] Return categoria + descrizione

**GET /api/rifiuti/calendario**
- [ ] Return calendario raccolta del comune

**PUT /api/rifiuti/notifiche** (auth required)
- [ ] Attiva/disattiva notifiche
- [ ] Set orario notifica

**Seed Database Rifiuti:**
- [ ] Script `utils/seedRifiuti.js`
- [ ] Popolare con 500-1000 rifiuti comuni
- [ ] Categorie: Organico, Carta, Plastica, Vetro, Indifferenziato, Ingombranti

### 4.9 API Farmacie (Settimana 9) ✅

**GET /api/farmacie**
- [x] Lista farmacie
- [x] Evidenzia di turno in cima

**GET /api/farmacie/turno**
- [x] Return solo farmacie di turno oggi

**GET /api/farmacie/vicine**
- [x] Query geospaziale (coordinate + radius)

**POST /api/farmacie** (admin)
- [x] CRUD admin farmacie

### 4.10 API Trasporti, Meteo

**GET /api/trasporti/info**
- [ ] Return info trasporti da ImpostazioniComune

**GET /api/trasporti/fermate-vicine**
- [ ] Geolocalizzazione (se API disponibile)

**GET /api/meteo**
- [ ] Chiamata a OpenWeatherMap API
- [ ] Cache 1 ora
- [ ] Return: temperatura, condizioni, previsioni 5 giorni

### 4.11 API Ricerca Globale

**GET /api/ricerca**
- [ ] Query param: q
- [ ] Cerca in: notizie, eventi, ristoranti, luoghi, offerte
- [ ] Return risultati aggregati per tipo
- [ ] Limite 10 risultati per tipo

### 4.12 API Notifiche ✅

**GET /api/notifiche** (auth required)
- [x] Lista notifiche utente
- [x] Filter: non lette

**GET /api/notifiche/count** (auth required)
- [x] Conta non lette

**PUT /api/notifiche/:id/letta** (auth required)
- [x] Segna come letta

**PUT /api/notifiche/leggi-tutte** (auth required)
- [x] Segna tutte come lette

**DELETE /api/notifiche/:id** (auth required)
- [x] Elimina notifica

### 4.13 API Admin Dashboard (admin only) ✅

**GET /api/admin/stats**
- [x] Statistiche generali:
  - Utenti totali, nuovi oggi/settimana
  - Segnalazioni per stato
  - Notizie pubblicate
  - Eventi prossimi
  - Engagement (commenti, like)

**GET /api/admin/segnalazioni**
- [x] Tutte le segnalazioni con filtri avanzati
- [ ] Export CSV (opzionale - da implementare)

**GET /api/admin/utenti**
- [x] Lista utenti
- [x] Filtri: attivi, verificati

**PUT /api/admin/utenti/:id/ban**
- [x] Ban/unban utente

**DELETE /api/admin/commenti/:id**
- [x] Moderazione commenti

### 4.14 API Esterne e Integrazioni 🌐

> **📋 STACK DATI CONSIGLIATO PER LOCSY**

| Tipo Dato | Fonte | API/Metodo | Costo |
|-----------|-------|------------|-------|
| **Farmacie** | OpenStreetMap + Ministero Salute | Overpass API (OSM) | ✅ Gratuito |
| **Ospedali** | OpenStreetMap | Overpass API (OSM) | ✅ Gratuito |
| **Monumenti** | Wikipedia + Dati Comune | MediaWiki API + Seed manuale | ✅ Gratuito |
| **Attività Commerciali** | Creator verificati | Dashboard interna | - |
| **Eventi** | Dashboard creator | Sistema interno | - |
| **Meteo** | OpenWeatherMap | Current Weather API | ✅ Free: 1000 calls/giorno |
| **Comuni** | ISTAT + DatiComuni.it | REST API pubbliche | ✅ Gratuito |
| **Mappe** | OpenStreetMap | Leaflet.js + OSM tiles | ✅ Gratuito |
| **Geocoding** | Nominatim | Nominatim API (OSM) | ✅ Gratuito (1 req/sec) |

#### API Meteo - OpenWeatherMap
```javascript
// GET /api/meteo
// Endpoint: https://api.openweathermap.org/data/2.5/weather
const getMeteo = async (lat, lon) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=it&appid=${apiKey}`;
  const response = await fetch(url);
  return response.json();
};

// Free Tier: 1000 calls/giorno
// Signup: https://openweathermap.org/api
```

#### API Geocoding - Nominatim (OpenStreetMap)
```javascript
// Reverse Geocoding: coordinate → indirizzo
const reverseGeocode = async (lat, lon) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Locsy-App' } // Obbligatorio!
  });
  return response.json();
};

// Forward Geocoding: indirizzo → coordinate
const forwardGeocode = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  const response = await fetch(url, {
    headers: { 'User-Agent': 'Locsy-App' }
  });
  return response.json();
};

// Limiti: 1 richiesta al secondo, no API key necessaria
// Docs: https://nominatim.org/release-docs/latest/api/Overview/
```

#### API Dati Comuni - ISTAT
```javascript
// GET /api/comuni/:codiceIstat
// Database comuni italiani: https://github.com/matteocontrini/comuni-json
// Alternative: https://daticomuni.it/api

// Seed database con file JSON statico
const comuniData = require('./data/comuni.json');
// Include: nome, provincia, regione, CAP, coordinate, popolazione
```

#### API Farmacie - OpenStreetMap
```javascript
// Overpass API per query POI (Points of Interest)
const getFarmacie = async (lat, lon, radius = 5000) => {
  const query = `
    [out:json];
    node["amenity"="pharmacy"](around:${radius},${lat},${lon});
    out body;
  `;
  
  const response = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: query
  });
  
  return response.json();
};

// Gratuito, no API key
// Docs: https://wiki.openstreetmap.org/wiki/Overpass_API
```

#### Integrazione Ministero Salute (Farmacie di Turno)
```javascript
// Purtroppo non esiste API pubblica unificata
// Soluzioni:
// 1. Scraping sito regionale (no consigliato)
// 2. Input manuale da dashboard admin
// 3. Integrazione con sistemi locali ASL

// Modello DB con campo "diTurno" gestito manualmente
```

#### API Mappe - Leaflet + OpenStreetMap
```javascript
// Frontend: React-Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ center, markers }) => (
  <MapContainer center={center} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    />
    {markers.map(marker => (
      <Marker key={marker.id} position={marker.position}>
        <Popup>{marker.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

// Gratuito, no API key, tile server pubblico
```

#### Rate Limiting e Caching
```javascript
// Backend caching per ridurre chiamate API
const NodeCache = require('node-cache');
const meteoCache = new NodeCache({ stdTTL: 3600 }); // 1 ora

const getMeteoWithCache = async (lat, lon) => {
  const key = `meteo_${lat}_${lon}`;
  const cached = meteoCache.get(key);
  
  if (cached) return cached;
  
  const data = await getMeteo(lat, lon);
  meteoCache.set(key, data);
  return data;
};
```

#### TODO: Implementazione API Esterne
- [ ] Registrazione OpenWeatherMap (API key)
- [ ] Implementare endpoint /api/meteo con caching
- [ ] Implementare helper geocoding (Nominatim)
- [ ] Seed database comuni italiani (JSON statico)
- [ ] Creare script import farmacie da OSM
- [ ] Testare limiti rate Nominatim (1 req/sec)
- [ ] Documentare User-Agent obbligatorio per OSM

### 4.15 Testing e Validazione ✅

> **🎯 CHECKPOINT TESTING - Data completamento: 13 Maggio 2026**  
> **Status**: ✅ Testing completo di tutte le API implementate  
> **Tools**: Postman Collection con 60+ test organizzati  
> **Ambiente**: MongoDB Atlas, server Express.js su porta 5000  
> **Credenziali Admin**: admin@locsy.it / admin123  
> **Credenziali Test**: mario.rossi@test.com / password123

#### Postman Collection Completa
- [x] **0. Health Check**: Server status endpoint
- [x] **1. Auth**: Register, Login, Get Me (3 test)
- [x] **2. Notizie**: Get All, Get by ID, Create, Like (4+ test)
- [x] **3. Eventi**: Get All, Calendario, Create, Partecipa (4+ test)
- [x] **4. Ristoranti & Recensioni**: CRUD ristoranti, Create recensione (5+ test)
- [x] **5. Commenti**: Get by riferimento, Create, Delete, Like, Reply (5+ test)
- [x] **6. Luoghi**: Get All, Get by ID, Create (3+ test)
- [x] **7. Offerte**: Get All, Get by ID, Create (3+ test)
- [x] **8. Farmacie**: Get All, Get Turno, Create (3+ test)
- [x] **9. Salvati**: Get My Salvati, Toggle Salvato (2+ test)
- [x] **10. Notifiche**: Get Notifiche, Count, Leggi Tutte (3+ test)
- [x] **11. Admin**: Get Stats, Get All Users, Ban User (3+ test)

**Features Postman Collection:**
- Auto-save JWT token dopo login
- Variabili globali: {{baseUrl}}, {{authToken}}
- Test scripts per validazione responses
- Organizzazione per moduli funzionali

#### Bug Fixati Durante Testing
1. ✅ **Admin Password Hash**: Rimosso double-hashing in createAdmin.js
2. ✅ **Notizia Enum**: Aggiornate categorie a ['Viabilità','Vita cittadina','Istituzionale','Cultura']
3. ✅ **Notizia Likes**: Aggiunto campo `likes: [ObjectId]` mancante
4. ✅ **Coordinate Geospaziali**: Rimosso `default:'Point'` da 5 models (Evento, Ristorante, Luogo, Farmacia, Segnalazione), aggiunto `sparse:true` agli indici 2dsphere
5. ✅ **Commento Validation**: Rimosso `required:true` da `tipoRiferimentoModel` (popolato da hook)
6. ✅ **Mongoose 9.x Hooks**: Convertiti pre-save hooks da `function(next)` a `async function()` (Commento, Salvato)
7. ✅ **Offerta Enum**: Aggiunte categorie ['Libri','Farmacia','Ristorante','Servizi']
8. ✅ **Salvato Validation**: Rimosso `required:true` da `tipoModel`, convertito pre-save hook

#### File di Configurazione Creati
- [x] **Backend/.env**: MongoDB Atlas URI, JWT secret, environment settings
- [x] **Backend/scripts/createAdmin.js**: Script per creare utente admin
- [x] **Locsy_API_Collection.postman_collection.json**: Suite test completa

#### Validazioni Completate
- [x] Autenticazione JWT funzionante
- [x] CRUD operations su tutti i models principali
- [x] Middleware auth e admin verificati
- [x] Rate limiting testato
- [x] Error handling centralizzato
- [x] Relazioni tra models (populate) funzionanti
- [x] Like/Toggle functionality verificata
- [x] Geospatial queries compatibili
- [x] Aggregazioni (calendario eventi, rating ristoranti)

**Risultato**: Tutte le 60+ API testate funzionano correttamente. Backend pronto per integrazione frontend.

---

## 🎨 FASE 5: FRONTEND - SETUP BASE (Settimane 10-12)

### 5.1 Setup React con Vite (Settimana 10)

```bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

**Installare dipendenze:**
```bash
npm install react-router-dom react-bootstrap bootstrap
npm install @reduxjs/toolkit react-redux redux-persist
npm install react-toastify react-icons
npm install leaflet react-leaflet
npm install date-fns
npm install react-calendar
npm install swiper
```

**Struttura cartelle:**
```
frontend/
├── public/
│   ├── icons/          # PWA icons
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NavbarBottom.jsx
│   │   │   └── Footer.jsx
│   │   ├── common/
│   │   │   ├── Card.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Pagination.jsx
│   │   ├── segnalazioni/
│   │   │   ├── SegnalazioneCard.jsx
│   │   │   ├── SegnalazioneForm.jsx
│   │   │   ├── MapSelector.jsx
│   │   │   └── FotoUpload.jsx
│   │   ├── notizie/
│   │   │   ├── NotiziaCard.jsx
│   │   │   ├── CommentoItem.jsx
│   │   │   └── CommentoForm.jsx
│   │   ├── eventi/
│   │   │   ├── EventoCard.jsx
│   │   │   ├── CalendarioEventi.jsx
│   │   │   └── PartecipaButton.jsx
│   │   ├── ristoranti/
│   │   │   ├── RistoranteCard.jsx
│   │   │   ├── RecensioneItem.jsx
│   │   │   ├── RecensioneForm.jsx
│   │   │   └── RatingStars.jsx
│   │   ├── rifiuti/
│   │   │   ├── AssistenteRifiuti.jsx
│   │   │   ├── CalendarioRifiuti.jsx
│   │   │   └── ImpostazioniNotifiche.jsx
│   │   └── admin/
│   │       ├── Sidebar.jsx
│   │       ├── StatCard.jsx
│   │       └── TableSegnalazioni.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profilo.jsx
│   │   ├── Segnala.jsx
│   │   ├── SegnalazioniLista.jsx
│   │   ├── SegnalazioneDettaglio.jsx
│   │   ├── Rifiuti.jsx
│   │   ├── Trasporti.jsx
│   │   ├── Farmacie.jsx
│   │   ├── Sanita.jsx
│   │   ├── Notizie.jsx
│   │   ├── NotiziaDettaglio.jsx
│   │   ├── Eventi.jsx
│   │   ├── EventoDettaglio.jsx
│   │   ├── Ristoranti.jsx
│   │   ├── RistoranteDettaglio.jsx
│   │   ├── Luoghi.jsx
│   │   ├── LuogoDettaglio.jsx
│   │   ├── Offerte.jsx
│   │   ├── Ricerca.jsx
│   │   ├── Salvati.jsx
│   │   ├── Impostazioni.jsx
│   │   └── admin/
│   │       ├── Dashboard.jsx
│   │       ├── GestioneSegnalazioni.jsx
│   │       ├── GestioneNotizie.jsx
│   │       ├── CreaNotizia.jsx
│   │       ├── GestioneEventi.jsx
│   │       ├── CreaEvento.jsx
│   │       ├── GestioneRistoranti.jsx
│   │       ├── GestioneUtenti.jsx
│   │       └── ImpostazioniComune.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── segnalazioniSlice.js
│   │   │   ├── notizieSlice.js
│   │   │   ├── eventiSlice.js
│   │   │   ├── ristorantiSlice.js
│   │   │   ├── salvatiSlice.js
│   │   │   └── notificheSlice.js
│   ├── services/
│   │   ├── api.js              # Helper fetch
│   │   ├── authService.js
│   │   ├── segnalazioniService.js
│   │   ├── notizieService.js
│   │   ├── eventiService.js
│   │   ├── ristorantiService.js
│   │   ├── rifiutiService.js
│   │   ├── meteoService.js
│   │   └── ricercaService.js
│   ├── utils/
│   │   ├── formatDate.js
│   │   ├── constants.js
│   │   └── validators.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useGeolocation.js
│   │   └── useDebounce.js
│   ├── assets/
│   │   └── images/
│   ├── styles/
│   │   └── custom.css
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
└── package.json
```

### 5.2 Configurazione Base (Settimana 10)

**`.env`:**
```env
VITE_API_URL=http://localhost:5000
VITE_OPENWEATHER_API_KEY=
```

**Redux Store:**
- [ ] Setup store con Redux Toolkit
- [ ] Configurare redux-persist (mantiene auth)
- [ ] Creare slices per: auth, segnalazioni, notizie, eventi, ristoranti, salvati, notifiche

**API Service (fetch nativa):**
```javascript
// services/api.js
const API_URL = import.meta.env.VITE_API_URL;

export const fetchAPI = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };
  
  const response = await fetch(`${API_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Errore di rete');
  }
  
  return response.json();
};

// Upload file
export const uploadFile = async (endpoint, file) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('image', file);
  
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  
  return response.json();
};
```

**React Router:**
- [ ] Setup routes con React Router v6
- [ ] PrivateRoute per pagine autenticate
- [ ] AdminRoute per dashboard admin

**React Bootstrap:**
- [ ] Import Bootstrap CSS
- [ ] Personalizza colori (variabili CSS)
- [ ] Tema comune (colori primario/secondario)

### 5.3 Layout Base (Settimana 11)

**Navbar Superiore:**
- [ ] Logo comune (dinamico da ImpostazioniComune)
- [ ] Nome comune
- [ ] (Desktop) Links: Home, Servizi, Notizie, Eventi
- [ ] Badge notifiche (count non lette)
- [ ] Menu utente (se loggato) o Login/Registrati

**Navbar Inferiore (Sticky):**
- [ ] 4 icone grandi con label:
  - 🏠 Home
  - 🔍 Ricerca
  - ❤️ Salvati (badge count)
  - 👤 Profilo
- [ ] Attiva icona pagina corrente
- [ ] Fixed bottom, z-index alto

**PrivateRoute Component:**
```javascript
const PrivateRoute = ({ children }) => {
  const { user } = useSelector(state => state.auth);
  return user ? children : <Navigate to="/login" />;
};
```

### 5.4 Pagine Auth (Settimana 11)

**Login Page:**
- [ ] Form: email, password
- [ ] Validazione client-side
- [ ] Submit → API login
- [ ] Salva token + user in Redux + localStorage
- [ ] Redirect a home
- [ ] Link "Non hai account? Registrati"

**Register Page:**
- [ ] Form: nome, cognome, email, password, conferma password
- [ ] Validazione (password min 8 caratteri, match)
- [ ] Submit → API register
- [ ] Auto-login dopo registrazione
- [ ] Redirect a home

**Profilo Page:**
- [ ] Mostra: nome, cognome, email
- [ ] Avatar (opzionale)
- [ ] Bottoni: Impostazioni, Notifiche, Privacy, Esci
- [ ] Lista "Mie Segnalazioni"
- [ ] Lista "Mie Recensioni"

**Impostazioni Page:**
- [ ] Form modifica nome, cognome, telefono
- [ ] Upload avatar
- [ ] Cambio password
- [ ] Impostazioni notifiche rifiuti
- [ ] Privacy e sicurezza (elimina account)

---

## 🏠 FASE 6: HOMEPAGE E CARD SERVIZI (Settimane 13-15)

### 6.1 Homepage - Sezione Hero (Settimana 13)

**Calendario + Meteo:**
- [ ] Component `CalendarioMeteo.jsx`
- [ ] Integrazione react-calendar
- [ ] Fetch meteo da API (OpenWeatherMap)
- [ ] Mostra: temperatura attuale, condizioni, icona
- [ ] Click data → mostra eventi quel giorno
- [ ] Design responsive (mobile: meteo sopra, calendario sotto)

### 6.2 Card Servizi (Settimana 13)

**5 Card cliccabili:**
- [ ] Component `CardServizio.jsx` riutilizzabile
- [ ] Icone grandi (react-icons)
- [ ] Labels: Segnala, Rifiuti, Trasporti, Farmacie, Sanità
- [ ] Hover effect
- [ ] Click → navigate to pagina dedicata
- [ ] Grid responsive (2 card/row mobile, 5 desktop)

### 6.3 Pagina Segnala (Settimana 14)

**Form Segnalazione:**
- [ ] Descrizione (textarea, max 500 caratteri)
- [ ] Categoria (select con 6 opzioni)
- [ ] Upload foto (max 5, drag & drop)
- [ ] Preview foto con bottone rimuovi
- [ ] Selezione posizione su mappa (Leaflet)
  - Click mappa → set coordinate
  - Reverse geocoding → ottieni indirizzo
  - "Usa posizione corrente" button
- [ ] Submit → POST /api/segnalazioni
- [ ] Success → redirect a dettaglio segnalazione
- [ ] Toast notifica successo

**Lista Segnalazioni:**
- [ ] Fetch GET /api/segnalazioni
- [ ] Filtri: categoria, stato
- [ ] Card per segnalazione con:
  - Foto preview
  - Categoria badge
  - Stato badge (colori: nuova=blue, in_lavorazione=orange, risolta=green)
  - Descrizione (troncata 100 caratteri)
  - Data
  - Like button + count
- [ ] Click → dettaglio
- [ ] Paginazione

**Dettaglio Segnalazione:**
- [ ] Foto gallery (Swiper)
- [ ] Descrizione completa
- [ ] Categoria, stato, priorità
- [ ] Mappa con marker posizione
- [ ] Autore (nome, avatar)
- [ ] Data creazione
- [ ] Like button (toggle)
- [ ] Risposta admin (se presente)
- [ ] "Segnalazioni vicine" (altre nello stesso raggio)

### 6.4 Pagina Rifiuti (Settimana 14)

**Assistente "Dove si butta?":**
- [ ] Input search (es. "guscio uova")
- [ ] Mentre digita → suggerimenti (debounce 300ms)
- [ ] Submit → GET /api/rifiuti/cerca?q=
- [ ] Mostra risultato:
  - Icona categoria (colore)
  - Nome rifiuto
  - Categoria (es. "Organico")
  - Descrizione/note
- [ ] Nessun risultato → "Non trovato, contatta il comune"

**Calendario Raccolta:**
- [ ] Fetch GET /api/rifiuti/calendario
- [ ] Card per ogni giorno:
  - Giorno settimana
  - Tipo rifiuto (es. "Carta e Cartone")
  - Icona/colore tipo
- [ ] Evidenzia giorno corrente

**Numeri Utili:**
- [ ] Lista numeri (es. Ingombranti: 1234567)
- [ ] Click → call telefono (mobile)

**Impostazioni Notifiche:**
- [ ] Toggle "Attiva promemoria"
- [ ] Time picker "Orario notifica" (default 20:30)
- [ ] Button "Salva impostazioni"
- [ ] PUT /api/rifiuti/notifiche

### 6.5 Pagina Trasporti (Settimana 15)

- [ ] Fetch info trasporti
- [ ] Mostra: linea urbana, orari, giorni
- [ ] "Trova fermata più vicina" button
  - Request geolocalizzazione
  - Mostra mappa con fermate (se disponibili)
  - Lista fermate con distanza

### 6.6 Pagina Farmacie (Settimana 15)

- [ ] Fetch GET /api/farmacie
- [ ] Sezione "Farmacia di Turno":
  - Card evidenziata
  - Nome, indirizzo
  - "Aperta 24/7" badge
  - Telefono (call button)
  - Mappa con marker
- [ ] Sezione "Altre Farmacie":
  - Lista card
  - Nome, indirizzo, orari
  - Telefono
- [ ] "Trova farmacie vicine" button
  - Geolocalizzazione
  - Ordina per distanza

### 6.7 Pagina Sanità (Settimana 15)

- [ ] Placeholder per info sanitarie
- [ ] Link ASL locale
- [ ] Contatti utili
- [ ] Orari ambulatori
- [ ] (Futuro: integrazione API se disponibile)

---

## 📰 FASE 7: SEZIONI SOCIAL E CONTENUTI (Settimane 16-17)

### 7.1 Notizie dal Comune (Settimana 16)

**Sezione Homepage:**
- [ ] Fetch GET /api/notizie?limit=4
- [ ] Card notizia con:
  - Immagine copertina
  - Categoria badge
  - Titolo (troncato 60 caratteri)
  - Data pubblicazione
  - Likes count
  - Commenti count
- [ ] "Vedi tutto" button → pagina notizie completa

**Pagina Lista Notizie:**
- [ ] Fetch tutte le notizie
- [ ] Filtri: categoria
- [ ] Sort: più recenti, più viste, più commentate
- [ ] Card notizia (come homepage ma descrizione)
- [ ] Paginazione

**Pagina Dettaglio Notizia:**
- [ ] Immagine copertina full width
- [ ] Titolo, categoria, data
- [ ] Contenuto completo
- [ ] Autore (admin)
- [ ] Like button
- [ ] Pulsante "Salva"
- [ ] **Sezione Commenti:**
  - Lista commenti (fetch GET /api/commenti?tipo=notizia&riferimento=:id)
  - Component CommentoItem (autore, testo, data, like)
  - Form nuovo commento (solo utenti registrati)
  - Submit → POST /api/commenti
  - Ricarica lista commenti
  - Thread risposte (opzionale v2)

### 7.2 Eventi & Esperienze (Settimana 16)

**Sezione Homepage:**
- [ ] Fetch GET /api/eventi?limit=4
- [ ] Evidenzia "Suggerito" con badge
- [ ] Card evento con:
  - Immagine
  - Data (formato: 12 lug)
  - Titolo
  - Orario
  - "Partecipo" button
- [ ] Swiper carousel (scroll orizzontale mobile)
- [ ] "Vedi tutto" → pagina eventi

**Pagina Lista Eventi:**
- [ ] Filtri: futuri/passati, categoria, data
- [ ] Sort: data prossima
- [ ] Card evento
- [ ] Vista calendario (react-calendar con marker eventi)

**Pagina Dettaglio Evento:**
- [ ] Immagine full
- [ ] Titolo, descrizione completa
- [ ] Data, ora inizio/fine
- [ ] Luogo, indirizzo
- [ ] Mappa con marker
- [ ] Organizzatore
- [ ] Prezzo (se presente)
- [ ] Link esterno (se presente)
- [ ] "Parteciperò" button
  - POST /api/eventi/:id/partecipa
  - Mostra stato (se già partecipa)
  - Count partecipanti
- [ ] Lista partecipanti (avatar + nome)
- [ ] Sezione commenti (come notizie)
- [ ] "Salva" button

### 7.3 Luoghi da Visitare (Settimana 17)

**Sezione Homepage:**
- [ ] Fetch GET /api/luoghi?limit=3
- [ ] Card luogo con:
  - Immagine
  - Nome
  - Badge "Suggerito"
- [ ] "Vedi tutto"

**Pagina Lista Luoghi:**
- [ ] Fetch tutti i luoghi
- [ ] Filtri: categoria
- [ ] Card grid

**Pagina Dettaglio Luogo:**
- [ ] Gallery immagini (Swiper)
- [ ] Nome, descrizione
- [ ] Categoria
- [ ] Indirizzo, mappa
- [ ] Orari, prezzo
- [ ] Contatti (telefono, sito web)
- [ ] "Salva" button

### 7.4 Offerte & Negozi (Settimana 17)

**Sezione Homepage:**
- [ ] Fetch GET /api/offerte?limit=3
- [ ] Card offerta con:
  - Immagine
  - Titolo offerta
  - Nome negozio
  - Sconto badge (es. "20%")
- [ ] "Vedi tutto"

**Pagina Lista Offerte:**
- [ ] Fetch tutte
- [ ] Card grid
- [ ] Filtri: categoria, data scadenza

**Pagina Dettaglio Offerta:**
- [ ] Immagine
- [ ] Titolo, descrizione
- [ ] Nome negozio, indirizzo
- [ ] Telefono
- [ ] Periodo validità
- [ ] "Salva" button

### 7.5 Dove Mangiare (Settimana 17)

**Sezione Homepage:**
- [ ] Fetch GET /api/ristoranti?limit=3
- [ ] Card ristorante con:
  - Immagine
  - Nome
  - Categoria cucina
  - Rating stelle (★★★★☆)
  - Numero recensioni
- [ ] "Vedi tutto"

**Pagina Lista Ristoranti:**
- [ ] Fetch tutti
- [ ] Filtri: categoria, fasciaDiPrezzo, rating
- [ ] Sort: rating, nome
- [ ] Card grid

**Pagina Dettaglio Ristorante:**
- [ ] Immagine
- [ ] Nome, descrizione
- [ ] Categoria, fascia prezzo
- [ ] Rating medio (stelle grandi)
- [ ] Indirizzo, mappa
- [ ] Contatti (telefono, email, sito)
- [ ] Orari apertura (per giorno)
- [ ] "Salva" button
- [ ] **Sezione Recensioni:**
  - Statistiche (distribuzione stelle: 5★: 70%, 4★: 20%, ...)
  - Lista recensioni
    - Component RecensioneItem
    - Autore, rating stelle, commento, foto, data
    - Like button
  - "Scrivi recensione" button (solo se registrato e non ha già recensito)
  - Form RecensioneForm:
    - Select rating (1-5 stelle)
    - Textarea commento
    - Upload foto (max 3)
    - Submit → POST /api/recensioni
    - Ricarica pagina

---

## 👨‍💼 FASE 8: DASHBOARD AMMINISTRATORE (Settimana 18)

### 8.1 Layout Admin

**Sidebar:**
- [ ] Menu navigazione:
  - 📊 Dashboard
  - 📝 Segnalazioni
  - 📰 Notizie
  - 🎉 Eventi
  - 🍕 Ristoranti
  - 🛍️ Offerte
  - 🏛️ Luoghi
  - 💊 Farmacie
  - 👥 Utenti
  - ⚙️ Impostazioni Comune
- [ ] Logout button

**AdminRoute:**
- [ ] Check user.ruolo === 'admin'
- [ ] Redirect to home se non admin

### 8.2 Dashboard Home

- [ ] Fetch GET /api/admin/stats
- [ ] Stat cards:
  - Utenti totali, nuovi questa settimana
  - Segnalazioni (nuove, in lavorazione, risolte)
  - Notizie pubblicate questo mese
  - Eventi prossimi
  - Commenti oggi
- [ ] Grafico segnalazioni per categoria (Chart.js opzionale)
- [ ] Lista "Segnalazioni urgenti" (priorità alta)
- [ ] Lista "Ultimi commenti"

### 8.3 Gestione Segnalazioni

- [ ] Fetch GET /api/admin/segnalazioni
- [ ] Tabella con:
  - ID, autore, categoria, stato, priorità, data
  - Azioni: visualizza, cambia stato
- [ ] Filtri: stato, categoria, priorità
- [ ] Click → modal dettaglio:
  - Tutte le info segnalazione
  - Select "Cambia stato"
  - Textarea "Risposta admin"
  - Button "Salva" → PUT /api/segnalazioni/:id/stato
  - Notifica utente

### 8.4 Gestione Notizie

**Lista Notizie:**
- [ ] Fetch GET /api/notizie (include non pubblicate)
- [ ] Tabella: titolo, categoria, data, pubblicata, azioni
- [ ] Azioni: modifica, elimina
- [ ] Button "Crea Nuova Notizia"

**Crea/Modifica Notizia:**
- [ ] Form:
  - Titolo
  - Categoria (select)
  - Contenuto (textarea o editor rich text)
  - Upload immagine copertina
  - Checkbox "Pubblica", "In evidenza"
  - Tags (input multiple)
- [ ] Submit → POST /api/notizie (o PUT per modifica)
- [ ] Redirect a lista

### 8.5 Gestione Eventi

**Lista Eventi:**
- [ ] Fetch GET /api/eventi
- [ ] Tabella: titolo, data, categoria, pubblicato, azioni
- [ ] Button "Crea Nuovo Evento"

**Crea/Modifica Evento:**
- [ ] Form:
  - Titolo, descrizione
  - Upload immagine
  - Data inizio/fine (date picker)
  - Ora inizio/fine
  - Luogo, indirizzo
  - Categoria
  - Organizzatore
  - Max partecipanti (opzionale)
  - Prezzo
  - Link esterno
  - Checkbox "Suggerito", "Pubblicato"
- [ ] Submit → POST /api/eventi

### 8.6 Gestione Ristoranti, Offerte, Luoghi

**Pattern simile:**
- [ ] Lista con tabella
- [ ] CRUD completo
- [ ] Form creazione/modifica

### 8.7 Gestione Farmacie

- [ ] Lista farmacie
- [ ] Abilita/disabilita "Di turno"
- [ ] Set data turno
- [ ] CRUD farmacie

### 8.8 Gestione Utenti

- [ ] Fetch GET /api/admin/utenti
- [ ] Tabella: nome, email, ruolo, attivo, data registrazione
- [ ] Filtri: attivi, ruolo
- [ ] Azioni:
  - Visualizza profilo
  - Ban/Unban → PUT /api/admin/utenti/:id/ban
  - (Opzionale) Cambia ruolo

### 8.9 Impostazioni Comune

- [ ] Fetch GET /api/impostazioni-comune
- [ ] Form:
  - Nome comune
  - Upload logo
  - Colori tema (color picker)
  - Contatti (telefono, email, pec, indirizzo)
  - Social (facebook, instagram, twitter)
  - Calendario rifiuti (per giorno settimana)
  - Trasporti info
  - Numeri utili
- [ ] Submit → PUT /api/impostazioni-comune

---

## 🔍 FASE 9: FUNZIONALITÀ AVANZATE (Settimane 19-20)

### 9.1 Ricerca Globale (Settimana 19)

**Pagina Ricerca:**
- [ ] Input search con debounce
- [ ] Fetch GET /api/ricerca?q=query
- [ ] Risultati divisi per sezione:
  - Notizie (max 10)
  - Eventi (max 10)
  - Ristoranti (max 10)
  - Luoghi (max 10)
  - Offerte (max 10)
- [ ] Card per ogni risultato
- [ ] "Vedi tutti" per sezione
- [ ] Nessun risultato → "Nessun risultato trovato"

**Ricerca nella navbar:**
- [ ] Icon ricerca nella navbar bottom
- [ ] Click → pagina ricerca con focus su input

### 9.2 Salvati/Preferiti (Settimana 19)

**Pagina Salvati:**
- [ ] Fetch GET /api/salvati
- [ ] Tabs: Tutto, Notizie, Eventi, Ristoranti, Luoghi, Offerte
- [ ] Card per ogni item salvato
- [ ] Button "Rimuovi" → DELETE /api/salvati/:id
- [ ] Empty state: "Nessun elemento salvato"

**Pulsante "Salva":**
- [ ] In ogni dettaglio (notizia, evento, ristorante, luogo, offerta)
- [ ] Icon cuore vuoto/pieno
- [ ] Click → POST /api/salvati/toggle
- [ ] Update UI

### 9.3 Notifiche Push (Settimana 20)

**Notifiche In-App:**
- [ ] Icon campana nella navbar con badge count
- [ ] Dropdown lista notifiche:
  - Fetch GET /api/notifiche?limit=5
  - NotificaItem (icona, messaggio, data, letta/non letta)
  - Click → segna letta + navigate to link
  - "Vedi tutte" → pagina notifiche completa

**Pagina Notifiche:**
- [ ] Lista completa notifiche
- [ ] Filtri: non lette, tipo
- [ ] Button "Segna tutte come lette"
- [ ] Swipe per eliminare (mobile)

**Sistema Backend Notifiche:**
- [ ] Quando admin risponde segnalazione → notifica autore
- [ ] Quando qualcuno commenta su notizia → notifica altri commentatori
- [ ] Quando evento a cui partecipo è vicino → notifica reminder
- [ ] Sera prima raccolta rifiuti → notifica (cron job)

**Cron Job Rifiuti (Backend):**
```javascript
// Ogni giorno alle 20:30
cron.schedule('30 20 * * *', async () => {
  // Trova utenti con notifiche rifiuti attive
  const utenti = await User.find({ 
    'impostazioniNotifiche.rifiuti': true 
  });
  
  // Determina tipo rifiuto domani
  const domani = getDomaniGiornoSettimana();
  const tipoRifiuto = calendarioRifiuti[domani];
  
  // Crea notifica per ogni utente
  for (const utente of utenti) {
    await Notifica.create({
      utente: utente._id,
      tipo: 'rifiuti',
      titolo: 'Promemoria Raccolta Rifiuti',
      messaggio: `Domani è il giorno della raccolta: ${tipoRifiuto}`,
    });
  }
});
```

### 9.4 Geolocalizzazione (Settimana 20)

**Hook useGeolocation:**
```javascript
const useGeolocation = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  
  const getPosition = () => {
    if (!navigator.geolocation) {
      setError('Geolocalizzazione non supportata');
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      (pos) => setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }),
      (err) => setError(err.message)
    );
  };
  
  return { position, error, getPosition };
};
```

**Utilizzi:**
- [ ] Selezione posizione segnalazione
- [ ] Trova farmacie vicine
- [ ] Trova fermate trasporti vicine
- [ ] Trova ristoranti vicini
- [ ] Mappa con marker "Tu sei qui"

### 9.5 Upload e Compressione Immagini

**Frontend:**
- [ ] Component FotoUpload con drag & drop
- [ ] Preview immagini
- [ ] Compressione client-side (browser-image-compression)
- [ ] Max 5 foto per segnalazione
- [ ] Max 3 foto per recensione
- [ ] Progress bar upload

**Backend:**
- [ ] Multer middleware
- [ ] Upload su Cloudinary
- [ ] Resize/ottimizzazione automatica
- [ ] Return URL immagine

---

## ✅ FASE 10: TESTING E DEBUG (Settimana 21)

### 10.1 Testing Backend

**API Testing con Postman:**
- [ ] Creare collection Postman con tutte le API
- [ ] Test manuale ogni endpoint
- [ ] Test edge cases:
  - Richieste senza auth (dove richiesta)
  - Input invalidi
  - ID inesistenti
  - Limiti (max foto, max caratteri)
- [ ] Verificare error messages

**Unit Testing (Opzionale):**
- [ ] Jest + Supertest
- [ ] Test models
- [ ] Test auth middleware
- [ ] Test controllers principali

### 10.2 Testing Frontend

**Test Manuali:**
- [ ] Ogni pagina su:
  - Chrome
  - Firefox
  - Safari
  - Edge
- [ ] Responsive test:
  - Mobile (320px, 375px, 414px)
  - Tablet (768px, 1024px)
  - Desktop (1280px, 1920px)
- [ ] Test flussi completi:
  - Registrazione → Login → Crea segnalazione → Commenta notizia → Logout
  - Admin: Login → Gestisci segnalazione → Pubblica notizia → Crea evento
  - Utente: Cerca ristorante → Scrivi recensione → Salva preferito

**Performance Testing:**
- [ ] Lighthouse audit (desktop + mobile)
  - Performance > 90
  - Accessibility > 90
  - Best Practices > 90
  - SEO > 90
- [ ] Test velocità caricamento
- [ ] Test con slow 3G network

### 10.3 Bug Fixing

- [ ] Lista bug trovati durante testing
- [ ] Priorità: critici → medio → bassi
- [ ] Fix iterativo
- [ ] Re-test dopo fix

### 10.4 Ottimizzazioni

**Frontend:**
- [ ] Lazy loading routes (React.lazy + Suspense)
- [ ] Lazy loading immagini
- [ ] Debounce su ricerca
- [ ] Memoization componenti pesanti (React.memo)
- [ ] Code splitting
- [ ] Ridurre bundle size (analisi con vite-bundle-visualizer)

**Backend:**
- [ ] Database indexing:
  - User.email (unique)
  - Segnalazione.coordinate (geospatial)
  - Notizia.dataPubblicazione
  - Evento.dataInizio
  - Text index su Notizia.titolo + contenuto
  - Text index su RifiutoDatabase.nome + sinonimi
- [ ] Query optimization (select only needed fields)
- [ ] Caching (Redis opzionale):
  - Cache meteo (1 ora)
  - Cache impostazioni comune
  - Cache calendario rifiuti

---

## 🚀 FASE 11: DEPLOY PRODUZIONE (Settimana 22)

> **💡 STRATEGIA BILLING CLIENTE:**  
> Durante lo sviluppo utilizzare account personali gratuiti (MongoDB Atlas Free, Vercel Free, etc.).  
> **Per la produzione cliente**, creare account separati intestati al cliente per:
> - MongoDB Atlas M10+ (fatturazione diretta al cliente)
> - Cloudinary (se supera free tier)
> - Altri servizi a pagamento (Render Starter, domini, email service, etc.)
> 
> **Vantaggi**: costi trasparenti, scalabilità gestita dal cliente, no intermediazione pagamenti.

### 11.1 Setup Produzione

**MongoDB Atlas:**
- [ ] **Sviluppo**: Usare account personale con Free Tier (M0)
- [ ] **Produzione Cliente**: Creare account MongoDB Atlas intestato al cliente
- [ ] Upgrade a M10 Shared Cluster (fatturazione diretta cliente)
- [ ] Setup database produzione
- [ ] Configurare IP whitelist (0.0.0.0/0 per accesso pubblico)
- [ ] Backup automatici abilitati
- [ ] Creare utente DB con password forte

**Cloudinary:**
- [ ] Account produzione
- [ ] Configurare upload preset
- [ ] Ottimizzazione automatica immagini

**Variabili Ambiente:**
- [ ] Verificare tutte le variabili .env
- [ ] API keys sicure (rigenerare per produzione)
- [ ] JWT_SECRET forte e unico

### 11.2 Deploy Backend (Render.com)

- [ ] Creare account Render.com
- [ ] New Web Service
- [ ] Connettere repository GitHub
- [ ] Configurazione:
  - Build command: `cd backend && npm install`
  - Start command: `cd backend && npm start`
  - Environment: Node
  - Plan: Free (o Starter $7/mese per always-on)
- [ ] Variabili ambiente:
  - NODE_ENV=production
  - MONGO_URI=...
  - JWT_SECRET=...
  - CLOUDINARY_*=...
  - Tutte le altre
- [ ] Deploy
- [ ] Test API: https://your-app.onrender.com/api/...

**Alternative Backend:**
- Railway.app
- Fly.io
- Heroku
- DigitalOcean App Platform

### 11.3 Deploy Frontend (Vercel)

- [ ] Creare account Vercel
- [ ] Import repository GitHub
- [ ] Configurazione:
  - Framework Preset: Vite
  - Root Directory: frontend
  - Build command: `npm run build`
  - Output directory: `dist`
- [ ] Variabili ambiente:
  - VITE_API_URL=https://your-backend.onrender.com
  - VITE_OPENWEATHER_API_KEY=...
- [ ] Deploy
- [ ] Test app: https://your-app.vercel.app

**Alternative Frontend:**
- Netlify
- Cloudflare Pages
- GitHub Pages (solo static)

### 11.4 Configurazione Dominio (Opzionale)

- [ ] Acquistare dominio (es. app-comune.it) - ~€10/anno
- [ ] Configurare DNS:
  - Frontend: CNAME → Vercel
  - Backend: CNAME → Render (o API subdomain)
- [ ] SSL automatico (fornito da Vercel/Render)
- [ ] Update VITE_API_URL con dominio custom

### 11.5 Test Produzione

- [ ] Test completo app in produzione
- [ ] Verificare tutte le funzionalità
- [ ] Test su dispositivi reali (mobile, tablet)
- [ ] Test performance
- [ ] Verificare notifiche email (se implementate)
- [ ] Verificare upload immagini

### 11.6 Monitoring e Logging

**Error Tracking (Opzionale):**
- [ ] Setup Sentry (free tier)
- [ ] Traccia errori backend + frontend
- [ ] Alert via email

**Analytics (Opzionale):**
- [ ] Google Analytics
- [ ] Plausible Analytics (privacy-friendly)

**Uptime Monitoring:**
- [ ] UptimeRobot (free) - ping ogni 5 minuti
- [ ] Alert se down

---

## 🎨 FASE 12: SEO, PERFORMANCE, LEGAL (Settimana 23)

### 12.1 SEO Optimization

**Meta Tags:**
- [ ] Ogni pagina con meta tags unici:
  - title (max 60 caratteri)
  - description (max 160 caratteri)
  - og:image (Open Graph per social sharing)
  - og:title, og:description
  - twitter:card
- [ ] React Helmet o react-helmet-async

**Sitemap.xml:**
- [ ] Generare sitemap automaticamente
- [ ] Include tutte le pagine pubbliche:
  - Homepage
  - Notizie (lista + dettagli)
  - Eventi (lista + dettagli)
  - Ristoranti (lista + dettagli)
  - Luoghi
- [ ] Submit a Google Search Console

**robots.txt:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /profilo/
Disallow: /impostazioni/
Sitemap: https://your-app.com/sitemap.xml
```

**Structured Data (Schema.org):**
- [ ] LocalBusiness schema per ristoranti
- [ ] Event schema per eventi
- [ ] Organization schema per comune
- [ ] JSON-LD in <head>

**Performance SEO:**
- [ ] Lighthouse SEO score > 90
- [ ] Core Web Vitals ottimizzati:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

### 12.2 Performance Optimization

**Immagini:**
- [ ] Formato WebP (Cloudinary auto-format)
- [ ] Lazy loading con intersection observer
- [ ] Responsive images (srcset)
- [ ] Placeholder blur-up effect

**Caching:**
- [ ] Service Worker per cache assets statici
- [ ] Cache API responses (con invalidazione)
- [ ] HTTP cache headers (backend)

**CSS/JS:**
- [ ] Minificazione automatica (Vite build)
- [ ] Rimuovere CSS unused (PurgeCSS)
- [ ] Preload critical fonts
- [ ] Defer non-critical JS

**Backend Performance:**
- [ ] Database indexing (fatto in FASE 10)
- [ ] Pagination ovunque (limite max 50 items)
- [ ] Select only needed fields (no fetch interi documents se non serve)
- [ ] Compression middleware (gzip/brotli)

### 12.3 Accessibility (a11y)

- [ ] Contrasto colori WCAG AA compliant
- [ ] ARIA labels su icone/buttons
- [ ] Focus indicators visibili
- [ ] Navigazione da tastiera funzionante
- [ ] Screen reader friendly
- [ ] Alt text su tutte le immagini
- [ ] Form labels corretti
- [ ] Test con Lighthouse Accessibility

### 12.4 Security

**Headers HTTP:**
- [ ] Helmet.js configurato (backend)
- [ ] CORS configurato correttamente
- [ ] Content-Security-Policy
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff

**Protezione Input:**
- [ ] Sanitizzazione input (express-validator)
- [ ] SQL injection protected (Mongoose ODM)
- [ ] XSS protection (sanitizza HTML in commenti/notizie)
- [ ] Rate limiting (max 100 req/15min per IP)

**Authentication:**
- [ ] Password min 8 caratteri
- [ ] JWT con scadenza
- [ ] HTTPS obbligatorio in produzione
- [ ] Logout sicuro (clear token)

### 12.5 Cookie Policy & Privacy (GDPR)

**Cookie Banner:**
- [ ] Component CookieBanner
- [ ] Mostra al primo accesso
- [ ] Spiega cookies usati:
  - Tecnici (auth token, preferenze)
  - Analitici (Google Analytics - opzionale)
- [ ] Accetta/Rifiuta
- [ ] Link a Cookie Policy completa

**Privacy Policy:**
- [ ] Pagina `/privacy-policy`
- [ ] Contenuto:
  - Dati raccolti (email, nome, foto, posizione)
  - Finalità utilizzo
  - Base giuridica (GDPR)
  - Diritti utente (accesso, cancellazione, portabilità)
  - Conservazione dati
  - Contatti DPO/Responsabile
  - Cookie utilizzati
- [ ] Link nel footer

**Termini e Condizioni:**
- [ ] Pagina `/termini-condizioni`
- [ ] Contenuto:
  - Uso del servizio
  - Contenuti utente (segnalazioni, commenti, recensioni)
  - Moderazione e rimozione contenuti
  - Limitazione responsabilità
  - Modifiche ai termini
- [ ] Link nel footer

**Consenso Utente:**
- [ ] Checkbox in registrazione: "Accetto Privacy Policy e Termini"
- [ ] Obbligatorio per registrarsi
- [ ] Salvare data consenso nel User model

**GDPR Rights:**
- [ ] Pagina impostazioni con:
  - "Scarica i miei dati" (export JSON)
  - "Elimina account" (con conferma, rimuove dati personali)
- [ ] Email per richieste GDPR (privacy@app-comune.it)

---

## 📱 FASE 13: PROGRESSIVE WEB APP (Settimana 24)

### 13.1 PWA Setup

**Vite PWA Plugin:**
```bash
npm install vite-plugin-pwa -D
```

**vite.config.js:**
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png'],
      manifest: {
        name: 'App Comune - [Nome Comune]',
        short_name: 'App Comune',
        description: 'App ufficiale del Comune per cittadini',
        theme_color: '#0d6efd',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.your-app\.com\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 // 1 ora
              }
            }
          },
          {
            urlPattern: /^https:\/\/res\.cloudinary\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 giorni
              }
            }
          }
        ]
      }
    })
  ]
})
```

### 13.2 Icone PWA

- [ ] Creare icona app (512x512 PNG)
- [ ] Generare tutte le dimensioni richieste:
  - 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512
- [ ] Tool: https://realfavicongenerator.net/
- [ ] Salvare in `public/icons/`

### 13.3 Install Prompt

**Component InstallPWA:**
```javascript
const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    });
  }, []);
  
  const handleInstall = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('PWA installed');
      }
      setDeferredPrompt(null);
      setShowInstall(false);
    });
  };
  
  if (!showInstall) return null;
  
  return (
    <div className="install-banner">
      <p>Installa l'app per un'esperienza migliore!</p>
      <button onClick={handleInstall}>Installa</button>
      <button onClick={() => setShowInstall(false)}>Chiudi</button>
    </div>
  );
};
```

### 13.4 Offline Mode

**Strategia:**
- [ ] NetworkFirst per API (prova rete, poi cache)
- [ ] CacheFirst per immagini (cache prioritaria)
- [ ] Offline page custom se network error
- [ ] Toast "Sei offline" quando disconnesso

**Offline Features:**
- [ ] Visualizza contenuti cachati (notizie, eventi già visitati)
- [ ] "Sei offline" badge quando disconnesso
- [ ] Sincronizzazione automatica quando torna online

### 13.5 Push Notifications (Web)

**Backend - Web Push:**
```bash
npm install web-push
```

- [ ] Generare VAPID keys
- [ ] Salvare subscriptions in DB
- [ ] Endpoint per subscribe/unsubscribe
- [ ] Invia notifica push quando:
  - Admin risponde segnalazione
  - Nuovo commento su notizia seguita
  - Reminder rifiuti

**Frontend:**
```javascript
const subscribeToPush = async () => {
  const registration = await navigator.serviceWorker.ready;
  
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: VAPID_PUBLIC_KEY
  });
  
  // Invia subscription al backend
  await fetch('/api/notifications/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### 13.6 Test PWA

- [ ] Lighthouse PWA audit (score 100)
- [ ] Test installazione su:
  - Android Chrome
  - iOS Safari (Add to Home Screen)
  - Desktop Chrome
- [ ] Test offline mode
- [ ] Test push notifications
- [ ] Test update automatico service worker

---

## 📱 FASE 14: APP STORE (Opzionale - Settimane 25-26)

**Nota**: Questa fase è **opzionale**. PWA è sufficiente per MVP. Implementa solo se:
- Clienti richiedono visibilità su store
- Budget disponibile ($124/anno)
- Funzionalità native necessarie

### 14.1 Valutazione Necessità

**Vantaggi App Store:**
- ✅ Visibilità e discovery su store
- ✅ Esperienza più nativa
- ✅ Notifiche push complete (iOS)
- ✅ Accesso completo API device

**Svantaggi:**
- ❌ Costi: $99/anno Apple + $25 Google
- ❌ Review process (2-7 giorni)
- ❌ Manutenzione separata
- ❌ Update richiedono nuova review

**Decisione:**
- [ ] Valutare con cliente
- [ ] Se NO → saltare questa fase
- [ ] Se SÌ → procedere con React Native

### 14.2 React Native con Expo

**Setup:**
```bash
npx create-expo-app@latest app-comunale-mobile
cd app-comunale-mobile
npm install @react-navigation/native @react-navigation/native-stack
npm install @reduxjs/toolkit react-redux
npm install expo-location expo-image-picker expo-notifications
```

**Riuso Codice:**
- [ ] Copia Redux slices
- [ ] Copia services (fetch API)
- [ ] Adatta componenti per React Native
- [ ] Usa React Native Paper o NativeBase per UI

### 14.3 Adattamento UI Mobile

- [ ] Navigazione con React Navigation
- [ ] Tab bar bottom (Home, Ricerca, Salvati, Profilo)
- [ ] Adatta layout per mobile
- [ ] Gestione keyboard
- [ ] Touch gestures (swipe, pull-to-refresh)

### 14.4 Funzionalità Native

- [ ] Camera per foto segnalazioni (expo-image-picker)
- [ ] Geolocalizzazione always-on
- [ ] Push notifications native (expo-notifications)
- [ ] Share API per condivisione
- [ ] Deep linking (apri notizia da notifica)

### 14.5 Build Produzione

**Android (Google Play):**
```bash
eas build --platform android
```
- [ ] Generare APK/AAB
- [ ] Keystore per firma
- [ ] Test su dispositivo fisico

**iOS (App Store):**
```bash
eas build --platform ios
```
- [ ] Richiede Apple Developer account ($99)
- [ ] Build su Expo cloud (no Mac necessario)
- [ ] Test con TestFlight

### 14.6 Pubblicazione Store

**Google Play Store:**
- [ ] Account Google Play Console ($25 una tantum)
- [ ] Creare app listing:
  - Nome app
  - Descrizione breve/lunga
  - Screenshot (min 2, max 8)
  - Icona app (512x512 PNG)
  - Feature graphic (1024x500)
  - Privacy policy URL
  - Categoria: Tools / Lifestyle
- [ ] Upload APK/AAB
- [ ] Form contenuti (rating età)
- [ ] Submit per review (1-3 giorni)

**Apple App Store:**
- [ ] Account Apple Developer ($99/anno)
- [ ] App Store Connect
- [ ] Creare app listing:
  - Nome app
  - Descrizione
  - Screenshot per ogni device (iPhone, iPad)
  - Icona app (1024x1024 PNG)
  - Privacy policy URL
  - Categoria: Utilities
  - Keywords SEO
- [ ] Upload build via Transporter o Xcode
- [ ] Submit per review (2-7 giorni)
- [ ] Possibili richieste revisioni (spiegare utilità app comunale)

**Tempo Totale Pubblicazione:** 2-4 settimane

---

## 🎉 FASE 15: LANCIO E POST-LANCIO (Settimana 27+)

### 15.1 Pre-Lancio

**Beta Testing:**
- [ ] Reclutare 20-50 beta tester tra cittadini
- [ ] TestFlight (iOS) o beta track (Android)
- [ ] Raccogliere feedback
- [ ] Survey: cosa funziona, cosa migliorare
- [ ] Fix bug critici

**Formazione Staff Comunale:**
- [ ] Sessione training per amministratori
- [ ] Documentazione admin (PDF):
  - Come pubblicare notizie
  - Come gestire segnalazioni
  - Come moderare commenti
  - Come usare dashboard
- [ ] Video tutorial (opzionale)

**Materiali Marketing:**
- [ ] Landing page app (1 pagina web)
- [ ] Volantini/locandine (PDF stampabile)
- [ ] Post social media (FB, Instagram, Twitter)
- [ ] Comunicato stampa
- [ ] Video demo app (2 minuti)

### 15.2 Lancio Ufficiale

**Giorno del Lancio:**
- [ ] Annuncio ufficiale dal sindaco
- [ ] Post su tutti i social del comune
- [ ] Comunicato stampa a giornali locali
- [ ] Email a tutti i residenti (se disponibile lista)
- [ ] Cartellonistica in città (municipi, biblioteche, scuole)
- [ ] QR code per download veloce

**Canali Comunicazione:**
- [ ] Sito web comunale → banner in homepage
- [ ] Gruppi Facebook locali
- [ ] Gruppi WhatsApp di quartiere
- [ ] Radio locali (intervista)
- [ ] Giornali locali (articolo)

### 15.3 Onboarding Utenti

**Primo Accesso:**
- [ ] Welcome screen con slides tutorial:
  - Slide 1: "Benvenuto in App Comune"
  - Slide 2: "Segnala problemi al comune"
  - Slide 3: "Resta informato su notizie ed eventi"
  - Slide 4: "Scopri dove mangiare e cosa visitare"
  - Slide 5: "Registrati per iniziare"
- [ ] Skip tutorial (salva flag "tutorialVisto")

**Tooltips:**
- [ ] Tooltip su features principali al primo uso
- [ ] "Scopri questa funzione" → dismissable

### 15.4 Monitoring Post-Lancio

**Metriche da Monitorare:**
- [ ] Utenti registrati (giornalieri, totali)
- [ ] Download app (se native)
- [ ] Retention rate (utenti che tornano)
- [ ] Segnalazioni create
- [ ] Tempo medio risoluzione segnalazioni
- [ ] Engagement (commenti, like, recensioni)
- [ ] Pagine più visitate
- [ ] Errori tecnici (Sentry)

**Dashboard Analytics:**
- [ ] Google Analytics o Plausible
- [ ] Admin dashboard con stats interne

**Raccolta Feedback:**
- [ ] Form feedback in-app
- [ ] Email support@app-comune.it
- [ ] Survey NPS ogni 3 mesi

### 15.5 Manutenzione Continua

**Settimana:**
- [ ] Monitorare errori (Sentry)
- [ ] Rispondere a feedback utenti
- [ ] Moderazione commenti (se necessario)
- [ ] Supporto tecnico via email

**Mensile:**
- [ ] Review analytics (report per cliente)
- [ ] Aggiornamenti sicurezza (dipendenze npm)
- [ ] Backup database (verifica)
- [ ] Test funzionalità critiche

**Trimestrale:**
- [ ] Survey soddisfazione utenti
- [ ] Pianificare nuove features (basate su richieste)
- [ ] Ottimizzazioni performance
- [ ] Aggiornare contenuti (es. ristoranti, luoghi)

### 15.6 Evoluzione e Nuove Features

**Roadmap v2 (post-lancio):**
- [ ] Assistente AI rifiuti (ChatGPT API)
- [ ] SPID integration (autenticazione nazionale)
- [ ] PagoPA integration (pagamenti multe/tasse)
- [ ] Sistema reputazione utenti (badge, punti)
- [ ] Gamification (sfide, classifiche)
- [ ] Chatbot supporto
- [ ] App multilingua (inglese per turisti)
- [ ] Widget meteo avanzato
- [ ] Integrazione calendario Google/Apple
- [ ] Modalità dark mode
- [ ] Condivisione social nativa
- [ ] Export dati personali (GDPR)

**Espansione Altri Comuni:**
- [ ] Sistema multi-tenant
- [ ] Ogni comune ha suo subdomain (roma.app.it, milano.app.it)
- [ ] Configurazione personalizzata per comune
- [ ] White-label solution
- [ ] Recurring revenue model

---

## ✅ CHECKLIST FINALE PRE-LANCIO

### Backend
- [ ] Tutte le API testate e funzionanti
- [ ] Database con indici ottimizzati
- [ ] Autenticazione sicura (JWT, password hashing)
- [ ] Rate limiting attivo
- [ ] Error handling completo
- [ ] Logging configurato
- [ ] Variabili ambiente sicure
- [ ] Backup automatici abilitati

### Frontend
- [ ] Tutte le pagine implementate e testate
- [ ] Design responsive (mobile, tablet, desktop)
- [ ] Navigazione intuitiva
- [ ] Loading states ovunque
- [ ] Error handling user-friendly
- [ ] Validazioni form complete
- [ ] Accessibilità (a11y) verificata
- [ ] SEO ottimizzato

### Testing
- [ ] Test su tutti i browser
- [ ] Test su dispositivi reali
- [ ] Test flussi completi utente
- [ ] Test dashboard admin
- [ ] Performance Lighthouse > 90
- [ ] Zero errori console
- [ ] Test offline mode (PWA)

### Legal e Privacy
- [ ] Privacy Policy pubblicata
- [ ] Termini e Condizioni pubblicati
- [ ] Cookie banner implementato
- [ ] Consenso utente raccolto
- [ ] GDPR compliant

### Deployment
- [ ] Backend online e stabile
- [ ] Frontend online e stabile
- [ ] Database produzione configurato
- [ ] Dominio custom configurato (se applicabile)
- [ ] SSL attivo
- [ ] Monitoring attivo (uptime, errori)
- [ ] Analytics configurato

### Marketing
- [ ] Landing page pronta
- [ ] Materiali promozionali pronti
- [ ] Social media posts preparati
- [ ] Comunicato stampa scritto
- [ ] Piano lancio definito

---

## 📊 TIMELINE RIASSUNTIVA

| Fase | Settimane | Milestone |
|------|-----------|-----------|
| **0: Setup** | 1 | Ambiente pronto |
| **1-2: Backend Base** | 2-3 | Server + DB funzionanti |
| **3: Auth** | 5 | Login/registrazione |
| **4: API Core** | 6-9 | Tutte le API pronte |
| **5: Frontend Base** | 10-12 | React configurato |
| **6: Homepage** | 13-15 | Homepage + card servizi |
| **7: Social** | 16-17 | Notizie, eventi, ristoranti |
| **8: Admin** | 18 | Dashboard admin completa |
| **9: Advanced** | 19-20 | Ricerca, salvati, notifiche |
| **10: Testing** | 21 | App testata e debuggata |
| **11: Deploy** | 22 | App online in produzione |
| **12: SEO/Legal** | 23 | SEO + privacy compliant |
| **13: PWA** | 24 | App installabile |
| **14: App Store** | 25-26 | (Opzionale) Su store |
| **15: Lancio** | 27+ | App pubblica e live |

**TEMPO TOTALE: 24-27 settimane (6-7 mesi)**
- MVP (fino PWA): 24 settimane
- Con App Store: +2-3 settimane

---

## 💰 COSTI RICAPITOLATIVO

**Sviluppo (6 mesi):**
- Hosting: €0 (free tier)
- **Totale: €0** ✨

**Produzione (dopo lancio):**
- Hosting Standard: €64/mese
- **Solo se** App Store: +€113 anno 1, +€90 anni successivi
- **Totale anno 1: €768** (o €881 con store)

**Dominio (opzionale):**
- ~€10/anno

---

## 🎯 PRIORITÀ FEATURES

### MVP (Must Have) - Per Lancio
✅ Auth (login/registrazione)  
✅ Segnalazioni (crea, visualizza, commenta)  
✅ Notizie (lista, dettaglio, commenti)  
✅ Eventi (lista, dettaglio, partecipa)  
✅ Calendario + Meteo homepage  
✅ Card servizi (Rifiuti, Trasporti, Farmacie, Sanità)  
✅ Ristoranti con rating  
✅ Dashboard admin base  
✅ PWA installabile  

### Post-Lancio v1.1
⏳ Notifiche push web  
⏳ Geolocalizzazione avanzata  
⏳ Salvati/preferiti  
⏳ Ricerca globale  

### v2.0 (Future)
🔮 Assistente AI rifiuti  
🔮 SPID integration  
🔮 PagoPA pagamenti  
🔮 App native su store  
🔮 Multilingua  

---

## 📚 RISORSE E DOCUMENTAZIONE

### Docs Ufficiali
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)
- [Mongoose](https://mongoosejs.com/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Leaflet](https://leafletjs.com/)
- [Expo](https://docs.expo.dev/) (se app native)

### Tools
- [Postman](https://www.postman.com/) - Test API
- [MongoDB Compass](https://www.mongodb.com/products/compass) - DB GUI
- [Figma](https://www.figma.com/) - Design mockups
- [Cloudinary](https://cloudinary.com/) - Image hosting
- [OpenWeatherMap](https://openweathermap.org/api) - Meteo API

### Deployment
- [Render](https://render.com/) - Backend hosting
- [Vercel](https://vercel.com/) - Frontend hosting
- [MongoDB Atlas](https://www.mongodb.com/atlas) - Database cloud
- [Cloudflare](https://www.cloudflare.com/) - CDN/DNS

---

## 🆘 SUPPORTO

**Durante lo sviluppo:**
- Stack Overflow per problemi tecnici
- Reddit: r/reactjs, r/node, r/webdev
- Discord: Reactiflux, MERN Stack
- GitHub Issues per librerie specifiche

**Post-lancio:**
- Email supporto clienti
- Dashboard admin per segnalare problemi
- Sistema ticketing interno

---

## ✨ NOTE FINALI

Questa roadmap è **completa e dettagliata** ma **flessibile**:

- Adatta i tempi al tuo ritmo di sviluppo
- Inizia con MVP, aggiungi features dopo lancio
- Testa frequentemente con utenti reali
- Raccogli feedback e itera
- Non cercare perfezione al primo colpo

**L'importante è lanciare e migliorare continuamente!**

---

**Buon sviluppo! 🚀**

*Roadmap creata: Aprile 2026*  
*Versione: 2.0 - Dettagliata*
