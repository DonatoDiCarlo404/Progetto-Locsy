# 🗺️ ROADMAP - Gestionale Comunale Social

> **Progetto**: App gestionale comunale con funzionalità social  
> **Stack**: MERN (MongoDB, Express.js, React, Node.js)  
> **Target**: Web, Mobile (iOS/Android), Desktop  
> **Obiettivo**: Startup/Business reale

---

## 💰 SOMMARIO COSTI (TL;DR)

### 💼 MODELLO BUSINESS
**Sviluppatore**: Costruisci gratis con free tier (costo $0)
**Cliente (Comune)**: Paga i costi operativi in produzione

### Scenario MINIMO (Sviluppo)
- **Sviluppo (6 mesi)**: $0 - tutto gratuito (free tiers)
- **Web App + PWA mobile**: $0/mese (Vercel free + MongoDB free)
- **TOTALE primo anno**: **$0** 🎉

### Scenario STANDARD (Produzione - Cliente paga)
- **Web + PWA**: ~$60/mese → **Fattura al Comune: $720/anno**
- **Web + App Native Store**: ~$60/mese + $124/anno store → **Fattura: $844/anno**

### Scenario ENTERPRISE (Alta crescita - Cliente paga)
- **$200-400/mese** → **Fattura: $2.400-4.800/anno**

📊 **Vedi sezione [BUDGET E COSTI](#-budget-e-costi) per dettagli completi**

---

## 🚀 QUICK START

1. **Inizia GRATIS** con tutti i free tier (6 mesi)
2. **PWA invece di app native** (risparmi $124/anno)
3. **Scala solo quando necessario** (dopo feedback utenti)
4. **Negozia con il Comune** per coprire costi hosting

---

## 📑 INDICE

1. [💰 Budget e Costi](#-budget-e-costi) - Costi dettagliati servizi e store
2. [📋 Fase 0: Pianificazione](#-fase-0-pianificazione-e-setup-settimana-1)
3. [📦 Fase 1-2: Backend](#-fase-1-backend---fondamenta-settimane-2-3)
4. [🎨 Fase 4: Frontend Web](#-fase-4-frontend-web---react-settimane-8-11)
5. [📱 Fase 9: App Mobile](#-fase-9-app-mobile-settimane-16-20)
6. [🚀 Fase 8: Deploy](#-fase-8-deploy-web-app-settimana-15)
7. [📊 Milestone Principali](#-milestone-principali)
8. [🛠️ Stack Tecnologico](#️-stack-tecnologico-dettagliato)
9. [✅ Checklist Pre-Lancio](#-checklist-finale-pre-lancio)

---

## � BUDGET E COSTI

### Costi Pubblicazione App Mobile
| Servizio | Costo | Frequenza | Note |
|----------|-------|-----------|------|
| **Apple Developer Program** | $99 | Annuale | Obbligatorio per pubblicare su App Store |
| **Google Play Console** | $25 | Una tantum | Pagamento unico per pubblicare su Play Store |
| **TOTALE Anno 1** | **$124** | - | $99 annuali successivi |

### Costi Servizi Cloud (Opzioni)

#### ⭐ OPZIONE 1: GRATUITA (MVP/Startup)
Perfetta per iniziare e testare con utenti reali - **COSTO: $124/anno** (solo store mobile)

| Servizio | Piano | Costo | Limiti | Adatto per |
|----------|-------|-------|--------|------------|
| **MongoDB Atlas** | Free Tier | $0 | 512MB storage, 100 connessioni | <500 utenti attivi |
| **Render.com** (Backend) | Free | $0 | Sleep dopo inattività, 750h/mese | Sviluppo/testing |
| **Vercel** (Frontend) | Free | $0 | 100GB bandwidth, illimitato deploy | <10k visite/mese |
| **Cloudinary** (Immagini) | Free | $0 | 25GB storage, 25GB bandwidth | <1k immagini/mese |
| **SendGrid** (Email) | Free | $0 | 100 email/giorno | Newsletter base |
| **TOTALE MENSILE** | - | **$0** | - | Startup fase iniziale |

**⚠️ Limitazioni Free Tier:**
- Backend si "addormenta" dopo 15 min inattività (richiede ~30 sec per riattivarsi)
- Storage limitato per immagini
- Email limitate
- No supporto prioritario

#### 💼 OPZIONE 2: PROFESSIONALE (Lancio Pubblico)
Per app in produzione con utenti reali - **COSTO: ~$40-60/mese** + $124/anno store

| Servizio | Piano | Costo/mese | Caratteristiche | Adatto per |
|----------|-------|------------|-----------------|------------|
| **MongoDB Atlas** | M10 Shared | $10-15 | 10GB storage, backup automatici | 500-5k utenti |
| **Render.com** (Backend) | Starter | $7 | Always-on, 512MB RAM | Produzione base |
| **Vercel** (Frontend) | Pro | $20 | 1TB bandwidth, analytics | <100k visite/mese |
| **Cloudinary** (Immagini) | Plus | $0-5 | 75GB storage, 150GB bandwidth | <5k immagini |
| **SendGrid** (Email) | Essentials | $20 | 50k email/mese | Email professionali |
| **TOTALE MENSILE** | - | **~$62-67** | - | Produzione stabile |
| **TOTALE ANNUALE** | - | **~$744-804 + $124 = $868-928** | - | - |

#### 🚀 OPZIONE 3: ENTERPRISE (Scaling)
Per app con traffico elevato - **COSTO: ~$200-400/mese**

| Servizio | Piano | Costo/mese | Caratteristiche | Adatto per |
|----------|-------|------------|-----------------|------------|
| **MongoDB Atlas** | M30 Dedicated | $50-100 | 80GB storage, replica set | 10k+ utenti |
| **Render.com/Railway** | Pro+ | $25-50 | 2GB RAM, autoscaling | Alta disponibilità |
| **Vercel** | Team | $20+ | Illimitato tutto | >100k visite |
| **Cloudinary** | Advanced | $50-100 | 400GB storage, trasformazioni | Molte immagini |
| **SendGrid** | Pro | $90 | 1M email/mese | Email massive |
| **Firebase** (Push Notifiche) | Blaze | $10-20 | Pay-as-you-go | Notifiche illimitate |
| **Sentry** (Error tracking) | Team | $26 | Monitoring errori | Debugging produzione |
| **TOTALE MENSILE** | - | **~$271-406** | - | Scaling rapido |

### Alternative Gratuite per Ridurre Costi

| Funzionalità | Soluzione Gratuita | Pro | Contro |
|--------------|-------------------|-----|--------|
| **Backend Hosting** | Railway (500h free), Fly.io | Free tier generoso | Limiti risorse |
| **Immagini** | ImgBB, Firebase Storage | Gratis fino a 1GB | Meno features |
| **Email** | Mailgun (5k free), Brevo | API semplice | Limite email |
| **Database** | MongoDB Atlas Free | 512MB sufficiente per MVP | Non scalabile |
| **Notifiche Push** | OneSignal Free | 10k notifiche/mese gratis | Setup complesso |
| **Mobile** | PWA invece di app native | $0 (no store fees) | UX meno nativa |

### 🎯 RACCOMANDAZIONE PER IL TUO PROGETTO

**Fase 1-3 mesi (Sviluppo + Beta):**
- ✅ Usa **TUTTO GRATUITO** (Opzione 1)
- ✅ Testa con 50-100 utenti beta
- ✅ Costo: **$0/mese** (risparmia $124 store non pubblicando subito)

**Fase 4-12 mesi (Lancio + Crescita):**
- ✅ Passa a **Piano Professionale** (Opzione 2)
- ✅ Pubblica su store solo quando app è stabile
- ✅ Costo: **~$60/mese + $124/anno** = ~$75/mese mediato

**Dopo 12 mesi (Se successo):**
- ✅ Scala a **Enterprise** se necessario
- ✅ Considera partnership/sponsor con il comune (possono coprire costi)
- ✅ Eventuale monetizzazione (premium features per altri comuni)

### 💡 CONSIGLI PER RISPARMIARE

1. **PWA invece di App Native** inizialmente
   - Costo: $0 vs $124/anno
   - Installabile da browser
   - No review Apple/Google
   - Upgrade a native solo se davvero necessario

2. **MongoDB Atlas Free** è sufficiente per 500+ utenti
   - Ottimizza query
   - Usa indici correttamente
   - Compressione immagini

3. **Render.com Free** accettabile se:
   - Avverti utenti del "primo caricamento lento"
   - Background job per tenere sveglio server (cron-job.org)
   - Consideri $7/mese dopo lancio

4. **Self-hosting** (se hai competenze)
   - VPS DigitalOcean: $6/mese
   - Tutti i servizi su un server
   - Più lavoro ma massimo risparmio

5. **Negozia con il Comune**
   - Proponi che coprano costi hosting
   - Partnership pubblico-privato
   - Sponsorizzazioni locali

### 📊 Riepilogo Costi Totali (18 mesi)

| Periodo | Opzione | Costo Mensile | Costo Totale | Note |
|---------|---------|---------------|--------------|------|
| **Mesi 1-3** (Dev) | Gratuito | $0 | $0 | Solo sviluppo, no store |
| **Mesi 4-6** (Beta) | Gratuito | $0 | $0 | Beta privata, no store |
| **Mesi 7-12** (Lancio) | Pro + Store | ~$75 | ~$450 | Pubblica su store |
| **Mesi 13-18** (Crescita) | Pro | ~$75 | ~$450 | Rinnovo Apple $99 |
| **TOTALE 18 MESI** | - | - | **~$900** | Con pubblicazione store |

**Alternative PWA (senza store):**
- Mesi 1-6: $0
- Mesi 7-18: ~$60/mese = $720
- **TOTALE: $720** (risparmi $180)

---

## �📋 FASE 0: PIANIFICAZIONE E SETUP (Settimana 1)

### 0.1 Analisi Requisiti e Documentazione
- [ ] Definire user stories dettagliate per ogni funzionalità
- [ ] Creare wireframes/mockups per le principali schermate
- [ ] Definire modello dati (schema database)
- [ ] Documentare API endpoints necessari
- [ ] Definire ruoli utente (cittadino, amministratore comunale, moderatore)
- [ ] Creare documento di architettura del sistema

### 0.2 Setup Ambiente di Sviluppo
- [ ] Installare Node.js (versione LTS) e npm/yarn
- [ ] Installare MongoDB (locale o setup MongoDB Atlas)
- [ ] Installare Git e configurare repository
- [ ] Configurare editor (VS Code con estensioni: ESLint, Prettier, ES7+ React/Redux)
- [ ] Installare Postman o Insomnia per testare API

### 0.3 Inizializzazione Progetto
```bash
mkdir gestionale-comunale
cd gestionale-comunale
git init
```

---

## 📦 FASE 1: BACKEND - FONDAMENTA (Settimane 2-3)

### 1.1 Setup Server Express
- [ ] Creare cartella `/backend`
- [ ] Inizializzare progetto Node.js: `npm init -y`
- [ ] Installare dipendenze principali:
  ```bash
  npm install express mongoose dotenv cors
  npm install --save-dev nodemon
  ```
- [ ] Creare struttura cartelle:
  ```
  backend/
  ├── config/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  ├── utils/
  ├── server.js
  └── .env
  ```
- [ ] Configurare server Express base (server.js)
- [ ] Configurare CORS e middleware base
- [ ] Configurare variabili d'ambiente (.env)

### 1.2 Connessione Database MongoDB
- [ ] Creare account MongoDB Atlas (o installare MongoDB locale)
- [ ] Configurare stringa di connessione in .env
- [ ] Creare file `config/db.js` per connessione database
- [ ] Testare connessione al database

### 1.3 Modelli Database (Models)
- [ ] **User Model** (`models/User.js`)
  - Nome, cognome, email, password (hashed)
  - Ruolo (cittadino, admin, moderatore)
  - Data registrazione, ultimo accesso
  - Avatar/foto profilo (URL)
  - Stato account (attivo, sospeso, verificato)

- [ ] **Segnalazione Model** (`models/Segnalazione.js`)
  - Titolo, descrizione
  - Categoria (manutenzione, sicurezza, ambiente, etc.)
  - Stato (nuova, in lavorazione, risolta, rifiutata)
  - Priorità (bassa, media, alta, urgente)
  - Posizione geografica (coordinate)
  - Foto/allegati (array di URL)
  - Autore (ref User), data creazione
  - Commenti (array)
  - Likes/reactions

- [ ] **InfoComune Model** (`models/InfoComune.js`)
  - Titolo, contenuto
  - Categoria (avviso, news, servizio)
  - Data pubblicazione, autore (ref User)
  - Allegati, immagini
  - Target audience (tutti, specifici quartieri)

- [ ] **Evento Model** (`models/Evento.js`)
  - Titolo, descrizione
  - Data e ora inizio/fine
  - Luogo (indirizzo + coordinate)
  - Organizzatore (ref User o ente)
  - Immagine copertina
  - Partecipanti (array ref User)
  - Commenti (embedded o ref)
  - Categoria evento

- [ ] **Notifica Model** (`models/Notifica.js`)
  - Utente destinatario (ref User)
  - Tipo notifica (segnalazione, evento, commento, etc.)
  - Messaggio
  - Link/riferimento
  - Letta (boolean)
  - Data creazione

- [ ] **Commento Model** (`models/Commento.js`)
  - Testo commento
  - Autore (ref User)
  - Riferimento (segnalazione o evento)
  - Data creazione
  - Likes, risposte (thread)

---

## 🔐 FASE 2: AUTENTICAZIONE E SICUREZZA (Settimana 4)

### 2.1 Sistema di Autenticazione JWT
- [ ] Installare dipendenze:
  ```bash
  npm install bcryptjs jsonwebtoken express-validator
  ```
- [ ] Creare `middleware/auth.js` per verificare token JWT
- [ ] Implementare hash password con bcryptjs

### 2.2 API Autenticazione
- [ ] **POST /api/auth/register** - Registrazione nuovo utente
  - Validazione input (email valida, password sicura)
  - Hash password
  - Creazione utente nel database
  - Generazione token JWT
  - Email di verifica (opzionale per MVP)

- [ ] **POST /api/auth/login** - Login utente
  - Validazione credenziali
  - Confronto password hashata
  - Generazione token JWT
  - Restituzione dati utente + token

- [ ] **GET /api/auth/me** - Ottieni utente corrente
  - Middleware auth per proteggere route
  - Restituzione dati utente dal token

- [ ] **PUT /api/auth/update-profile** - Aggiorna profilo
- [ ] **POST /api/auth/forgot-password** - Reset password (opzionale)

### 2.3 Middleware e Autorizzazione
- [ ] Middleware per ruoli (admin, moderatore, cittadino)
- [ ] Middleware per validazione input (express-validator)
- [ ] Middleware error handler centralizzato

---

## 🚀 FASE 3: API BACKEND - FUNZIONALITÀ CORE (Settimane 5-7)

### 3.1 API Segnalazioni
**Routes**: `routes/segnalazioni.js`  
**Controller**: `controllers/segnalazioniController.js`

- [ ] **GET /api/segnalazioni** - Lista tutte le segnalazioni
  - Filtri: categoria, stato, priorità, data
  - Paginazione (limit, skip)
  - Ordinamento (più recenti, più urgenti)
  
- [ ] **GET /api/segnalazioni/:id** - Dettaglio segnalazione singola
- [ ] **POST /api/segnalazioni** - Crea nuova segnalazione (autenticato)
- [ ] **PUT /api/segnalazioni/:id** - Aggiorna segnalazione (autore o admin)
- [ ] **DELETE /api/segnalazioni/:id** - Elimina segnalazione (autore o admin)
- [ ] **POST /api/segnalazioni/:id/commenti** - Aggiungi commento
- [ ] **PUT /api/segnalazioni/:id/stato** - Cambia stato (solo admin/moderatore)
- [ ] **POST /api/segnalazioni/:id/like** - Like/unlike segnalazione

### 3.2 API Info Comune
**Routes**: `routes/infoComune.js`  
**Controller**: `controllers/infoComuneController.js`

- [ ] **GET /api/info** - Lista tutte le informazioni
  - Filtri per categoria
  - Paginazione
- [ ] **GET /api/info/:id** - Dettaglio info singola
- [ ] **POST /api/info** - Crea nuova info (solo admin)
- [ ] **PUT /api/info/:id** - Aggiorna info (solo admin)
- [ ] **DELETE /api/info/:id** - Elimina info (solo admin)

### 3.3 API Eventi
**Routes**: `routes/eventi.js`  
**Controller**: `controllers/eventiController.js`

- [ ] **GET /api/eventi** - Lista eventi
  - Filtri: data, categoria, luogo
  - Eventi passati vs futuri
- [ ] **GET /api/eventi/:id** - Dettaglio evento
- [ ] **POST /api/eventi** - Crea evento (admin o cittadini autorizzati)
- [ ] **PUT /api/eventi/:id** - Aggiorna evento
- [ ] **DELETE /api/eventi/:id** - Elimina evento
- [ ] **POST /api/eventi/:id/partecipa** - Partecipa/annulla partecipazione
- [ ] **POST /api/eventi/:id/commenti** - Aggiungi commento
- [ ] **GET /api/eventi/:id/commenti** - Lista commenti evento

### 3.4 API Notifiche
**Routes**: `routes/notifiche.js`  
**Controller**: `controllers/notificheController.js`

- [ ] **GET /api/notifiche** - Lista notifiche utente corrente
- [ ] **GET /api/notifiche/count** - Conta notifiche non lette
- [ ] **PUT /api/notifiche/:id/read** - Segna come letta
- [ ] **PUT /api/notifiche/read-all** - Segna tutte come lette
- [ ] **DELETE /api/notifiche/:id** - Elimina notifica

### 3.5 API Utenti e Profili
**Routes**: `routes/users.js`  
**Controller**: `controllers/usersController.js`

- [ ] **GET /api/users/:id** - Profilo pubblico utente
- [ ] **GET /api/users/:id/segnalazioni** - Segnalazioni dell'utente
- [ ] **GET /api/users/:id/commenti** - Commenti dell'utente
- [ ] **PUT /api/users/:id/ban** - Banna utente (solo admin)

### 3.6 Upload File e Immagini
- [ ] Installare `multer` per upload file
- [ ] Configurare storage (locale o cloud: AWS S3, Cloudinary)
- [ ] Creare endpoint per upload immagini:
  - **POST /api/upload/image** - Upload singola immagine
  - **POST /api/upload/multiple** - Upload multiple
- [ ] Validazione tipo file e dimensioni
- [ ] Ottimizzazione immagini (sharp library)

---

## 🎨 FASE 4: FRONTEND WEB - REACT (Settimane 8-11)

### 4.1 Setup Progetto React

**⚡ Perché Vite invece di Create React App?**
- **10-100x più veloce** in sviluppo (Hot Module Replacement istantaneo)
- Build produzione ottimizzato automaticamente
- Create React App è deprecato (non più mantenuto da Meta)
- Bundle più piccoli (migliori performance)
- Supporto nativo TypeScript, PWA plugin

- [ ] Creare app React con Vite:
  ```bash
  npm create vite@latest frontend -- --template react
  cd frontend
  npm install
  ```
- [ ] Installare dipendenze:
  ```bash
  npm install react-router-dom react-bootstrap bootstrap
  npm install @reduxjs/toolkit react-redux
  npm install react-toastify
  npm install react-icons
  npm install leaflet react-leaflet # per mappe
  npm install date-fns # per gestione date
  ```
  
  **Note**: Usiamo **fetch API nativa** (già inclusa in browser moderni) invece di Axios

- [ ] Struttura cartelle:
  ```
  frontend/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── common/      # Componenti riutilizzabili
  │   │   ├── layout/      # Header, Footer, Sidebar
  │   │   ├── segnalazioni/
  │   │   ├── eventi/
  │   │   ├── auth/
  │   │   └── notifiche/
  │   ├── pages/           # Page components
  │   ├── redux/           # Redux store, slices
  │   ├── services/        # API calls
  │   ├── utils/           # Helper functions
  │   ├── hooks/           # Custom hooks
  │   ├── assets/          # Immagini, icone
  │   ├── styles/          # CSS custom
  │   ├── App.jsx
  │   └── main.jsx
  ```

### 4.2 Configurazione Base
- [ ] Configurare React Router (routes)
- [ ] Setup Redux Toolkit per state management
- [ ] Configurare Axios (base URL, interceptors)
- [ ] Setup React Bootstrap theme personalizzato
- [ ] Configurare variabili ambiente (.env)

### 4.3 Redux Store Setup
- [ ] Creare store Redux (`redux/store.js`)
- [ ] **authSlice**: gestione autenticazione, user state
- [ ] **segnalazioniSlice**: stato segnalazioni
- [ ] **eventiSlice**: stato eventi
- [ ] **notificheSlice**: stato notifiche
- [ ] **comuniSlice**: dati da API pubbliche comunali (NUOVO)
- [ ] Implementare persist per mantenere login

### 4.4 Servizi API (Frontend)
**Usiamo fetch API nativa** (già inclusa nei browser, no librerie esterne)

- [ ] `services/api.js` - Helper fetch con configurazione base:
  ```javascript
  // Esempio configurazione
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
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  };
  ```

- [ ] `services/authService.js` - Chiamate auth
- [ ] `services/segnalazioniService.js`
- [ ] `services/eventiService.js`
- [ ] `services/notificheService.js`
- [ ] `services/comuniAPIService.js` - **NUOVO**: Integrazione API pubbliche
- [ ] Gestione errori e toast notifications

### 4.5 Layout e Componenti Comuni
- [ ] **Header/Navbar** con:
  - Logo comune
  - Menu navigazione
  - Badge notifiche
  - Menu profilo utente
  - Responsive (hamburger menu mobile)

- [ ] **Footer** con:
  - Link utili
  - Contatti comune
  - Social media
  - Copyright

- [ ] **Sidebar** (per dashboard admin)
- [ ] **LoadingSpinner** component
- [ ] **PrivateRoute** component per route protette
- [ ] **Modal** component riutilizzabile
- [ ] **Card** component per segnalazioni/eventi
- [ ] **Pagination** component
- [ ] **FilterBar** component

### 4.6 Pagine Autenticazione
- [ ] **Login Page** (`pages/Login.jsx`)
  - Form email + password
  - Validazione client-side
  - Link a registrazione e password dimenticata
  - Redirect dopo login

- [ ] **Register Page** (`pages/Register.jsx`)
  - Form completo registrazione
  - Validazione (email, password strength)
  - Accettazione termini e condizioni
  - Redirect dopo registrazione

- [ ] **Profile Page** (`pages/Profile.jsx`)
  - Visualizza e modifica dati personali
  - Upload foto profilo
  - Cambio password
  - Statistiche utente (segnalazioni, partecipazioni)

### 4.7 Sezione Segnalazioni
- [ ] **HomePage/Dashboard** (`pages/Home.jsx`)
  - Lista segnalazioni recenti
  - Filtri e ricerca
  - Visualizzazione card o lista
  - Mappa con pin segnalazioni

- [ ] **Segnalazioni Page** (`pages/Segnalazioni.jsx`)
  - Lista completa con filtri avanzati
  - Ordinamento
  - Paginazione

- [ ] **DettaglioSegnalazione Page** (`pages/DettaglioSegnalazione.jsx`)
  - Info complete segnalazione
  - Gallery immagini
  - Mappa posizione
  - Sezione commenti
  - Pulsanti azioni (like, condividi)

- [ ] **CreaSegnalazione Page** (`pages/CreaSegnalazione.jsx`)
  - Form creazione segnalazione
  - Upload immagini (drag & drop)
  - Selezione posizione su mappa
  - Categoria e priorità
  - Preview prima invio

- [ ] **MieSegnalazioni Page** (`pages/MieSegnalazioni.jsx`)
  - Segnalazioni dell'utente loggato
  - Modifica/elimina proprie segnalazioni

### 4.8 Sezione Info Comune
- [ ] **InfoComune Page** (`pages/InfoComune.jsx`)
  - Lista news e avvisi
  - Filtri per categoria
  - Card informative

- [ ] **DettaglioInfo Page** (`pages/DettaglioInfo.jsx`)
  - Contenuto completo informazione
  - Allegati scaricabili
  - Condivisione social

### 4.9 Sezione Eventi
- [ ] **Eventi Page** (`pages/Eventi.jsx`)
  - Calendario eventi
  - Lista eventi (prossimi/passati)
  - Filtri (data, categoria, luogo)

- [ ] **DettaglioEvento Page** (`pages/DettaglioEvento.jsx`)
  - Dettagli evento completi
  - Mappa luogo evento
  - Lista partecipanti
  - Pulsante "Parteciperò"
  - Sezione commenti

- [ ] **CreaEvento Page** (se abilitato per cittadini)
  - Form creazione evento
  - Selezione data/ora
  - Upload immagine copertina

### 4.10 Notifiche
- [ ] **NotifichePage** (`pages/Notifiche.jsx`)
  - Lista tutte le notifiche
  - Segna lette/non lette
  - Filtri

- [ ] **NotificationDropdown** component
  - Dropdown in header
  - Badge con contatore
  - Preview ultime notifiche
  - Link "Vedi tutte"

- [ ] **Push Notifications** (opzionale per MVP)
  - Service Worker
  - Firebase Cloud Messaging

### 4.11 Dashboard Admin
- [ ] **AdminDashboard** (`pages/admin/Dashboard.jsx`)
  - Statistiche generali
  - Grafici (segnalazioni per stato, eventi, utenti)
  - Segnalazioni urgenti

- [ ] **GestioneSegnalazioni** (`pages/admin/GestioneSegnalazioni.jsx`)
  - Tutte le segnalazioni
  - Cambio stato
  - Assegnazione priorità
  - Filtri avanzati

- [ ] **GestioneUtenti** (`pages/admin/GestioneUtenti.jsx`)
  - Lista utenti
  - Assegnazione ruoli
  - Ban/unban utenti

- [ ] **CreaInfo** (`pages/admin/CreaInfo.jsx`)
  - Form creazione info/news
  - Editor rich text
  - Pianificazione pubblicazione

---

## 🗺️ FASE 5: MAPPE E GEOLOCALIZZAZIONE (Settimana 12)

### 5.1 Integrazione Mappe
- [ ] Setup Leaflet/React-Leaflet
- [ ] Creare `MapComponent` riutilizzabile
- [ ] Visualizzare segnalazioni su mappa con marker
- [ ] Clustering marker (molte segnalazioni vicine)
- [ ] Click su marker per dettaglio
- [ ] Selezione posizione su mappa (crea segnalazione)

### 5.2 Geolocalizzazione
- [ ] Rilevamento posizione utente
- [ ] Geocoding (indirizzo → coordinate)
- [ ] Reverse geocoding (coordinate → indirizzo)
- [ ] Filtri per area geografica

---

## 📱 FASE 6: NOTIFICHE REAL-TIME (Settimana 13)

### 6.1 WebSocket Setup (opzionale per MVP)
- [ ] Installare Socket.io (backend + frontend)
- [ ] Setup server Socket.io in Express
- [ ] Connessione client Socket.io
- [ ] Eventi real-time:
  - Nuove segnalazioni
  - Cambio stato segnalazione
  - Nuovi commenti
  - Nuove notifiche

### 6.2 Alternative: Polling
- [ ] Polling periodico per notifiche (più semplice per MVP)
- [ ] Implementare con setInterval su frontend

---

## ✅ FASE 7: TESTING (Settimana 14)

### 7.1 Testing Backend
- [ ] Setup Jest + Supertest
- [ ] Test unitari per models
- [ ] Test API endpoints principali
- [ ] Test autenticazione e autorizzazione
- [ ] Test validazioni

### 7.2 Testing Frontend
- [ ] Setup Vitest + React Testing Library
- [ ] Test componenti comuni
- [ ] Test form e validazioni
- [ ] Test Redux slices
- [ ] Test integrazione API

### 7.3 Testing E2E (opzionale)
- [ ] Setup Cypress o Playwright
- [ ] Test flussi principali (login, crea segnalazione, commenta)

---

## 🚀 FASE 8: DEPLOY WEB APP (Settimana 15)

### 8.1 Preparazione Deploy
- [ ] Setup variabili ambiente per produzione
- [ ] Build ottimizzato frontend: `npm run build`
- [ ] Configurare CORS per dominio produzione
- [ ] Setup MongoDB Atlas per produzione
- [ ] Configurare rate limiting (express-rate-limit)
- [ ] Setup logging (winston o morgan)

### 8.2 Backend Deploy
**Opzioni**: Heroku, Railway, Render, DigitalOcean, AWS

- [ ] Deploy su piattaforma scelta (es. Render.com - gratuito)
- [ ] Configurare variabili ambiente
- [ ] Test endpoints in produzione
- [ ] Setup dominio custom (opzionale)

### 8.3 Frontend Deploy
**Opzioni**: Vercel, Netlify, Cloudflare Pages

- [ ] Deploy su Vercel/Netlify (gratuito, ottimo per React)
- [ ] Configurare environment variables
- [ ] Setup redirect per SPA routing
- [ ] Collegare dominio custom (opzionale)

### 8.4 Database e Storage
- [ ] MongoDB Atlas configurato e sicuro
- [ ] Setup backup automatici database
- [ ] Upload immagini su Cloudinary o AWS S3 (non local)

### 8.5 Monitoring e Sicurezza
- [ ] Setup HTTPS (automatico su Vercel/Netlify)
- [ ] Configurare helmet.js per security headers
- [ ] Setup error tracking (Sentry - opzionale)
- [ ] Google Analytics o Plausible (opzionale)

---

## 📱 FASE 9: APP MOBILE (Settimane 16-20)

### 9.1 Scelta Tecnologia Mobile

#### ⚖️ Confronto Opzioni

| Aspetto | PWA | React Native (Expo) | Native (Swift/Kotlin) |
|---------|-----|---------------------|----------------------|
| **Costo Store** | $0 | $124/anno | $124/anno |
| **Tempo sviluppo** | 1-2 settimane | 4-6 settimane | 8-12 settimane |
| **Distribuzione** | Link web | App Store + Play Store | App Store + Play Store |
| **Update** | Immediati | Richiedono review | Richiedono review |
| **Offline** | ✅ Limitato | ✅✅ Completo | ✅✅ Completo |
| **Performance** | 🔶 Buona | 🔶 Buona | ✅ Eccellente |
| **Notifiche Push** | ✅ (limitazioni iOS) | ✅✅ Complete | ✅✅ Complete |
| **Camera/GPS** | 🔶 Limitato | ✅✅ Completo | ✅✅ Completo |
| **UX Nativa** | 🔶 Web-like | ✅ Quasi nativa | ✅✅ Nativa 100% |

#### 💰 RACCOMANDAZIONE PER STARTUP

**Per il TUO progetto, consiglio questa strategia:**

**FASE 1 (Mesi 1-6): PWA** 
- ✅ Costo: **$0** (nessun store fee)
- ✅ Lancio rapidissimo
- ✅ Installabile su Android e iOS
- ✅ Aggiornamenti istantanei
- ⚠️ Visibilità store: ZERO (ma puoi promuovere con QR code, link)

**FASE 2 (Mesi 7+): React Native SE necessario**
- ✅ Solo se feedback utenti richiede UX più nativa
- ✅ Visibilità su store per discovery
- 💰 Costo: $124/anno + tempo sviluppo

---

### 9.2A OPZIONE PWA (CONSIGLIATA PER INIZIARE)

**Vantaggi per Gestionale Comunale:**
- Zero costi pubblicazione
- Aggiornamenti senza review (fix bug immediati)
- Un solo codebase (già il web che stai sviluppando)
- Funziona su TUTTI i dispositivi
- Installabile con un pulsante

**Setup PWA:**
- [ ] Installare Vite PWA plugin:
  ```bash
  npm install vite-plugin-pwa -D
  ```
- [ ] Configurare `vite.config.js`:
  ```javascript
  import { VitePWA } from 'vite-plugin-pwa'
  
  export default {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Comune App',
          short_name: 'Comune',
          description: 'Gestionale comunale per cittadini',
          theme_color: '#0d6efd',
          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ]
  }
  ```

- [ ] Creare Service Worker per offline
- [ ] Creare icone app (192x192, 512x512)
- [ ] Configurare manifest.json
- [ ] Testare installazione su mobile
- [ ] Banner "Installa app" personalizzato

**Funzionalità PWA:**
- [ ] Cache strategico per offline (segnalazioni, eventi)
- [ ] Background sync (invia segnalazioni quando online)
- [ ] Push notifications (con limitazioni iOS)
- [ ] Add to homescreen prompt
- [ ] Splash screen personalizzato

**🎯 Con PWA risparmi $124/anno e puoi lanciare in 1-2 settimane!**

---

### 9.2B OPZIONE REACT NATIVE (SE NECESSARIO)

**Quando scegliere React Native:**
- Feedback utenti richiede esperienza più "app-like"
- Vuoi visibilità su store per acquisizione utenti
- Necessiti funzionalità avanzate camera/sensori
- Budget disponibile per $124/anno + manutenzione

**Opzione A: React Native** (consigliato - riusa conoscenze React)
- [ ] Setup React Native con Expo
- [ ] Installazione: `npx create-expo-app mobile-app`
- [ ] Riuso logica business dal web (Redux, services)

### 9.3 React Native Setup (se scelto)
- [ ] Installare Expo CLI:
  ```bash
  npm install -g eas-cli
  npx create-expo-app@latest comune-mobile
  cd comune-mobile
  ```
- [ ] Creare account Expo: https://expo.dev/signup
- [ ] Login EAS: `eas login`
- [ ] Configurare build: `eas build:configure`

- [ ] Installare dipendenze:
  ```bash
  npm install @react-navigation/native @react-navigation/native-stack
  npm install axios @reduxjs/toolkit react-redux
  npm install react-native-maps
  npm install expo-location expo-image-picker
  npm install expo-notifications
  ```

**💡 Expo semplifica tutto:**
- Build iOS/Android senza Mac (cloud build)
- Aggiornamenti over-the-air (senza store review)
- Testing su device fisico con Expo Go app
- Push notifications integrate

### 9.3 Conversione UI per Mobile
- [ ] Ricreare schermate principali per mobile
- [ ] Navigazione con React Navigation
- [ ] Adattare componenti per touch
- [ ] Gestione keyboard mobile
- [ ] Ottimizzare performance

### 9.4 Funzionalità Mobile-Specific
- [ ] Push notifications native
- [ ] Camera integration per segnalazioni
- [ ] Geolocalizzazione sempre attiva
- [ ] Offline mode (cache locale)
- [ ] Ottimizzazione immagini prima upload

### 9.5 Build e Deploy Mobile

#### Deploy PWA (Gratis)
- [ ] Build ottimizzato: `npm run build`
- [ ] Deploy su Vercel/Netlify (già fatto per web)
- [ ] Testare installazione PWA su dispositivi reali
- [ ] Creare landing page con istruzioni installazione
- [ ] QR code per download rapido
- [ ] **COSTO: $0** ✅

#### Deploy App Native (React Native/Expo)

**📱 Google Play Store (Android)**
- [ ] Registrare account Google Play Console
  - **COSTO: $25** (pagamento unico a vita)
  - Link: https://play.google.com/console
- [ ] Preparare app per produzione:
  ```bash
  eas build --platform android
  ```
- [ ] Creare listing store:
  - Screenshot (min 2, max 8)
  - Icona app (512x512 PNG)
  - Feature graphic (1024x500)
  - Descrizione breve e completa
  - Privacy policy URL (obbligatorio)
  - Categoria app
- [ ] Compilare modulo contenuti (rating età)
- [ ] Caricare APK/AAB
- [ ] Tempo review: **1-3 giorni**
- [ ] Pubblicazione: immediata dopo approvazione

**🍎 Apple App Store (iOS)**
- [ ] Registrare Apple Developer Program
  - **COSTO: $99/anno** (rinnovo annuale obbligatorio)
  - Link: https://developer.apple.com/programs/
  - Richiede carta di credito
  - Tempo approvazione account: 24-48h
- [ ] Preparare app con Expo:
  ```bash
  eas build --platform ios
  ```
- [ ] Creare listing su App Store Connect:
  - Screenshot per ogni device (iPhone, iPad)
  - Icona app (1024x1024 PNG)
  - Descrizione e keywords
  - Privacy policy URL (obbligatorio)
  - Categoria primaria/secondaria
  - Rating contenuti
- [ ] Tempo review: **2-7 giorni** (spesso più rigidi di Google)
- [ ] Possibili richieste revisioni (spiegare utilità app)
- [ ] Pubblicazione: dopo approvazione manuale

**💰 TOTALE COSTI PUBBLICAZIONE STORE:**
- Anno 1: **$25 + $99 = $124**
- Anni successivi: **$99** (solo Apple, Google è una tantum)

**⚠️ ATTENZIONE:**
- Apple può rigettare l'app se non rispetta guidelines
- Tempo review più lungo su iOS
- Aggiornamenti richiedono nuova review (3-7 giorni)
- Con PWA eviti tutto questo e costi sono $0

**🎯 RACCOMANDAZIONE:**
1. **Inizia con PWA** (6-12 mesi)
2. Raccogli feedback utenti
3. Se richiedono "app vera", vai su store
4. Oppure negozia con il Comune per coprire i $124

---

## 💻 FASE 10: APP DESKTOP (Opzionale - Settimana 21)

### 10.1 Electron Setup
- [ ] Installare Electron
- [ ] Configurare build con Electron
- [ ] Adattare UI per desktop
- [ ] Menu nativo app
- [ ] Auto-updater

### 10.2 Alternative Desktop
- [ ] Progressive Web App (installabile anche su desktop)
- [ ] Semplicemente rendere web app responsive per desktop

---

## 🌐 FASE 10.5: INTEGRAZIONE API PUBBLICHE COMUNALI (Settimana 21)

### 10.5.1 Analisi API Disponibili

**API Nazionali Italia** (se applicabile):
- [ ] **ANPR** (Anagrafe Nazionale Popolazione Residente)
  - Dati demografici (se autorizzati)
  - Documentazione: https://www.anpr.interno.it/
  
- [ ] **PagoPA** - Sistema pagamenti PA
  - Integrazione pagamenti (es. multe, tasse)
  - Documentazione: https://docs.pagopa.it/
  
- [ ] **SPID** (Sistema Pubblico Identità Digitale)
  - Autenticazione cittadini (alternativa a login custom)
  - Documentazione: https://developers.italia.it/it/spid/
  
- [ ] **CIE** (Carta Identità Elettronica)
  - Autenticazione con CIE
  - Documentazione: https://developers.italia.it/it/cie/

### 10.5.2 API Open Data Comunali

**Tipologie dati disponibili** (dipende dal comune specifico):
- [ ] **Delibere e Atti**
  - Delibere comunali pubbliche
  - Atti amministrativi
  
- [ ] **Bilanci**
  - Dati finanziari pubblici
  - Spese e entrate
  
- [ ] **Servizi Comunali**
  - Orari uffici
  - Farmacie di turno
  - Raccolta rifiuti (calendario)
  
- [ ] **Trasporti**
  - Orari autobus/mezzi pubblici
  - ZTL e parcheggi
  
- [ ] **Meteo**
  - Allerte meteo locali
  - Previsioni

### 10.5.3 Implementazione Backend

- [ ] Creare `services/externalAPIs/` nel backend:
  ```
  backend/services/externalAPIs/
  ├── anprService.js       # Se applicabile
  ├── pagoPAService.js     # Pagamenti
  ├── openDataService.js   # Open data comunale
  ├── weatherService.js    # API meteo (es. OpenWeather)
  └── transportService.js  # Trasporti pubblici
  ```

- [ ] **Proxy API** nel backend (best practice):
  - Non chiamare API esterne direttamente da frontend
  - Backend fa da intermediario (sicurezza + cache)
  
- [ ] Creare routes proxy:
  ```javascript
  // routes/external.js
  router.get('/api/external/open-data', getOpenData);
  router.get('/api/external/delibere', getDelibere);
  router.get('/api/external/servizi', getServizi);
  router.post('/api/external/pagamento', createPagamento);
  ```

- [ ] Implementare **caching** (Redis o in-memory):
  - Dati che cambiano poco (orari uffici, delibere)
  - Cache 1-24h per ridurre chiamate esterne
  - Risparmio costi e velocità

### 10.5.4 Implementazione Frontend

- [ ] Creare `services/comuniAPIService.js`:
  ```javascript
  // Esempio con fetch nativa
  export const getOpenData = async (tipo) => {
    const response = await fetch(`/api/external/open-data?tipo=${tipo}`);
    if (!response.ok) throw new Error('Errore caricamento dati');
    return response.json();
  };
  
  export const getDelibere = async (filters) => {
    const queryString = new URLSearchParams(filters).toString();
    const response = await fetch(`/api/external/delibere?${queryString}`);
    return response.json();
  };
  ```

- [ ] Creare nuove pagine:
  - **Delibere** (`pages/Delibere.jsx`) - Delibere comunali
  - **Servizi** (`pages/Servizi.jsx`) - Elenco servizi comunali
  - **Pagamenti** (`pages/Pagamenti.jsx`) - PagoPA integration
  - **Orari/Info** (`pages/InfoUtili.jsx`) - Orari uffici, farmacie

### 10.5.5 Configurazione Specifica Comune

- [ ] File configurazione per ogni comune:
  ```javascript
  // config/comuni/[comune-name].js
  export default {
    nome: 'Comune di Roma',
    codiceISTAT: '058091',
    apiOpenData: 'https://dati.comune.roma.it/api/',
    apiKey: process.env.OPENDATA_API_KEY,
    serviziAbilitati: {
      delibere: true,
      trasporti: true,
      rifiuti: true,
      pagamenti: false, // Non integrato
    },
    contatti: {
      telefono: '06 0606',
      email: 'urp@comune.roma.it',
      pec: 'protocollo@pec.comune.roma.it'
    }
  };
  ```

- [ ] Sistema multi-tenant (opzionale per più comuni):
  - Identificare comune da URL/dominio
  - Caricare configurazione specifica
  - Personalizzare logo, colori, servizi

### 10.5.6 Esempi Pratici Integrazione

**1. Calendario Raccolta Rifiuti**
- [ ] API comunale → date raccolta per indirizzo
- [ ] Notifiche push giorno prima raccolta
- [ ] Promemoria personalizzati

**2. Pagamenti PagoPA**
- [ ] Integrazione per pagare multe/tasse dall'app
- [ ] Storico pagamenti
- [ ] Notifiche scadenze

**3. Delibere Comunali**
- [ ] Visualizzazione delibere pubbliche
- [ ] Ricerca per argomento
- [ ] Notifiche nuove delibere categoria interesse

**4. Trasporti Pubblici**
- [ ] Orari autobus in tempo reale
- [ ] Fermate vicine (geolocalizzazione)
- [ ] Avvisi interruzioni servizio

### 10.5.7 Considerazioni Legali e Privacy

- [ ] **GDPR compliance** per dati personali
- [ ] **Autorizzazioni** necessarie per API ANPR (se usata)
- [ ] **Termini d'uso** API esterne
- [ ] **Rate limiting** per non superare quote
- [ ] **Fallback** se API esterna non disponibile

### 10.5.8 Testing API Esterne

- [ ] Test con dati mock se API non disponibili in sviluppo
- [ ] Gestione errori API esterne (timeout, down)
- [ ] Monitoring disponibilità API esterne
- [ ] Logging chiamate per debug

**🎯 Valore aggiunto**: Integrare dati ufficiali comunali rende l'app la **fonte unica** per i cittadini!

---

## 🔧 FASE 11: FUNZIONALITÀ AVANZATE (Settimane 22-24)

### 11.1 Ricerca Avanzata
- [ ] Implementare ricerca full-text (MongoDB text search)
- [ ] Filtri multipli combinati
- [ ] Ricerca per geolocalizzazione (segnalazioni vicine)
- [ ] Suggerimenti di ricerca (autocomplete)

### 11.2 Sistema Reputazione
- [ ] Punti reputazione per utenti
- [ ] Badge/achievement (segnalatore attivo, commentatore, etc.)
- [ ] Leaderboard utenti più attivi

### 11.3 Moderazione
- [ ] Sistema segnalazione contenuti inappropriati
- [ ] Queue moderazione per admin
- [ ] Filtro parole offensive (profanity filter)

### 11.4 Analytics e Reports
- [ ] Dashboard analytics per admin:
  - Segnalazioni per categoria/mese
  - Tempi medi risoluzione
  - Partecipazione cittadini
  - Heatmap segnalazioni su mappa
- [ ] Export dati (CSV, PDF)

### 11.5 Multilingua (i18n)
- [ ] Setup i18next
- [ ] Traduzioni IT/EN (e altre lingue)
- [ ] Selezione lingua in app

### 11.6 Email Notifications
- [ ] Setup servizio email (SendGrid, AWS SES, nodemailer)
- [ ] Email conferma registrazione
- [ ] Email notifiche importanti
- [ ] Newsletter eventi/news

### 11.7 Integrazione Social
- [ ] Login con Google/Facebook
- [ ] Condivisione segnalazioni sui social
- [ ] Open Graph meta tags per preview link

---

## 🎯 FASE 12: OTTIMIZZAZIONE E POLISH (Settimana 25)

### 12.1 Performance Optimization
- [ ] Code splitting React (lazy loading routes)
- [ ] Ottimizzazione bundle size (analisi webpack)
- [ ] Lazy loading immagini
- [ ] Caching strategico (service worker)
- [ ] CDN per asset statici
- [ ] Database indexing (MongoDB)
- [ ] Query optimization

### 12.2 SEO (Search Engine Optimization)
- [ ] Meta tags dinamici
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Server-side rendering (Next.js - opzionale)
- [ ] Schema.org structured data

### 12.3 Accessibilità (a11y)
- [ ] Contrasto colori WCAG compliant
- [ ] ARIA labels
- [ ] Navigazione da tastiera
- [ ] Screen reader compatibility
- [ ] Alt text immagini

### 12.4 UX Improvements
- [ ] Loading states ovunque
- [ ] Error states user-friendly
- [ ] Animazioni smooth (non eccessive)
- [ ] Skeleton screens
- [ ] Toast notifications informative
- [ ] Onboarding tutorial primo accesso

---

## 📚 FASE 13: DOCUMENTAZIONE (Settimana 26)

### 13.1 Documentazione Tecnica
- [ ] README.md completo con:
  - Descrizione progetto
  - Tecnologie usate
  - Prerequisiti
  - Istruzioni installazione
  - Comandi utili
  - Struttura progetto
- [ ] Documentazione API (Swagger/OpenAPI)
- [ ] Commenti codice dove necessario
- [ ] Architecture diagram

### 13.2 Guide Utente
- [ ] Guida utente cittadino (come creare segnalazione, partecipare eventi)
- [ ] Guida amministratore (gestione contenuti, moderazione)
- [ ] FAQ
- [ ] Video tutorial (opzionale)

### 13.3 Legal
- [ ] Termini e Condizioni
- [ ] Privacy Policy (GDPR compliant se EU)
- [ ] Cookie Policy
- [ ] Informativa trattamento dati

---

## 🚀 FASE 14: LANCIO E MARKETING (Settimana 27+)

### 14.1 Soft Launch
- [ ] Beta test con gruppo ristretto utenti
- [ ] Raccolta feedback
- [ ] Fix bug critici
- [ ] Ottimizzazioni basate su feedback

### 14.2 Lancio Ufficiale
- [ ] Presentazione al comune/amministrazione
- [ ] Comunicato stampa
- [ ] Post social media
- [ ] Campagna email ai cittadini
- [ ] Volantini/poster in città (offline)

### 14.3 Marketing Continuo
- [ ] Content marketing (blog, casi d'uso)
- [ ] Social media presence
- [ ] Engagement community
- [ ] Partnership con associazioni locali

---

## 🔄 FASE 15: MANUTENZIONE E EVOLUZIONE (Continua)

### 15.1 Monitoring
- [ ] Monitorare errori e crash
- [ ] Analizzare metriche utenti
- [ ] Performance monitoring
- [ ] Uptime monitoring

### 15.2 Support
- [ ] Sistema supporto utenti (email, chat)
- [ ] Gestione ticket/bug reports
- [ ] Risposta feedback utenti

### 15.3 Aggiornamenti
- [ ] Bug fixes regolari
- [ ] Aggiornamenti sicurezza
- [ ] Nuove funzionalità basate su richieste
- [ ] Miglioramenti UX continui

### 15.4 Scaling
- [ ] Ottimizzazione database per crescita utenti
- [ ] Upgrade server se necessario
- [ ] Load balancing (se traffico alto)
- [ ] Backup e disaster recovery plan

---

## 📊 MILESTONE PRINCIPALI

| Settimana | Milestone | Deliverable |
|-----------|-----------|-------------|
| 1 | Pianificazione | Documentazione requisiti, mockups |
| 3 | Backend Base | API autenticazione funzionante |
| 7 | Backend Completo | Tutte le API funzionanti e testate |
| 11 | Web App Completa | Frontend funzionante con tutte le features |
| 15 | Deploy Produzione | App live e accessibile online |
| 20 | App Mobile | App mobile pubblicata su store |
| 26 | Documentazione | Documentazione completa |
| 27+ | Lancio | App lanciata ufficialmente |

---

## 🛠️ STACK TECNOLOGICO DETTAGLIATO

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Autenticazione**: JWT + bcryptjs (+ SPID opzionale)
- **Validazione**: express-validator
- **Upload**: Multer + Cloudinary/AWS S3
- **Email**: Nodemailer/SendGrid
- **Real-time**: Socket.io (opzionale)
- **API Esterne**: Proxy per API comunali, PagoPA, Open Data
- **Cache**: Redis o in-memory (per API esterne)

### Frontend Web
- **Framework**: React 18 + Vite
- **UI Library**: React Bootstrap + Bootstrap 5
- **Routing**: React Router v6
- **State Management**: Redux Toolkit
- **HTTP Client**: **Fetch API nativa** (no librerie esterne)
- **Mappe**: Leaflet + React-Leaflet
- **Notifiche**: React-Toastify
- **Icone**: React Icons
- **Date**: date-fns

### Mobile
- **Framework**: React Native + Expo (o PWA)
- **Navigazione**: React Navigation
- **Mappe**: react-native-maps
- **Notifiche**: expo-notifications

### DevOps & Tools
- **Version Control**: Git + GitHub
- **Backend Deploy**: Render/Railway/Heroku
- **Frontend Deploy**: Vercel/Netlify
- **Database**: MongoDB Atlas
- **Storage**: Cloudinary (immagini)
- **Testing**: Jest + Vitest + React Testing Library
- **API Testing**: Postman/Insomnia
- **Monitoring**: Sentry (opzionale)

---

## 💡 BEST PRACTICES

### Sicurezza
- ✅ Sanitizzazione input utente (prevenire SQL injection, XSS)
- ✅ Rate limiting per prevenire abuse
- ✅ HTTPS obbligatorio in produzione
- ✅ Helmet.js per security headers
- ✅ Password forti (minimo 8 caratteri, lettere+numeri+simboli)
- ✅ Token JWT con scadenza
- ✅ Validazione lato server sempre (non solo client)

### Performance
- ✅ Paginazione per liste lunghe
- ✅ Lazy loading immagini e componenti
- ✅ Caching dove appropriato
- ✅ Ottimizzazione query database (indici)
- ✅ Compressione response (gzip)
- ✅ CDN per asset statici

### Code Quality
- ✅ ESLint + Prettier per code consistency
- ✅ Naming conventions chiare
- ✅ Componenti piccoli e riutilizzabili
- ✅ Separazione concerns (business logic vs UI)
- ✅ Commenti dove necessario
- ✅ Git commit messages descrittivi

### UX
- ✅ Loading states chiari
- ✅ Error messages user-friendly
- ✅ Feedback immediato azioni utente
- ✅ Design responsive (mobile-first)
- ✅ Accessibilità (a11y)
- ✅ Performance (velocità caricamento)

---

## 📈 METRICHE DI SUCCESSO

**KPI da monitorare:**
1. **Utenti**
   - Utenti registrati
   - Utenti attivi (giornalieri/mensili)
   - Tasso retention

2. **Engagement**
   - Segnalazioni create per utente
   - Commenti medi per segnalazione/evento
   - Partecipazioni eventi

3. **Performance Comune**
   - Tempo medio risoluzione segnalazioni
   - % segnalazioni risolte
   - Soddisfazione cittadini (survey)

4. **Tecnici**
   - Uptime app
   - Tempo caricamento pagine
   - Tasso errori

---

## 🎓 RISORSE UTILI

### Documentazione
- [React Docs](https://react.dev/)
- [Node.js Docs](https://nodejs.org/docs/)
- [MongoDB Manual](https://www.mongodb.com/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)

### Tutorial
- [MERN Stack Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)
- [JWT Authentication Guide](https://jwt.io/introduction)
- [React Bootstrap Components](https://react-bootstrap.github.io/)

### Tools
- [Postman](https://www.postman.com/) - API testing
- [MongoDB Compass](https://www.mongodb.com/products/compass) - DB GUI
- [Figma](https://www.figma.com/) - Design mockups
- [Excalidraw](https://excalidraw.com/) - Diagrammi

---

## 🆘 SUPPORTO E COMMUNITY

- Stack Overflow per problemi tecnici
- Reddit: r/reactjs, r/node, r/webdev
- Discord: Reactiflux, MERN Stack
- GitHub Issues per bug library

---

## ✅ CHECKLIST FINALE PRE-LANCIO

- [ ] Tutti i test passano
- [ ] Zero errori console (production build)
- [ ] Performance ottimali (Lighthouse score > 90)
- [ ] Responsive su tutti i dispositivi
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] SSL certificato attivo
- [ ] Backup database configurato
- [ ] Monitoring e alerting attivo
- [ ] Documentazione completa
- [ ] Privacy policy e termini pubblicati
- [ ] Beta testing completato con successo
- [ ] Piano marketing pronto
- [ ] Supporto utenti attivo

---

## 🎉 CONCLUSIONE

Questa roadmap è completa ma flessibile. Adatta le tempistiche in base al tuo ritmo e priorità. Ricorda:

**MVP First**: Parti con le funzionalità essenziali (autenticazione, segnalazioni base, eventi, info comune) e poi aggiungi feature avanzate.

**Iterazione**: Non cercare la perfezione al primo colpo. Lancia, raccogli feedback, migliora.

**Documentazione**: Documenta mentre sviluppi, non alla fine.

**Community**: Coinvolgi i cittadini nel processo di sviluppo per creare un prodotto che davvero serve.

---

**Buon sviluppo! 🚀**

*Ultima revisione: Aprile 2026*
