# 🏛️ INTEGRAZIONE API COMUNALI - Guida Completa

> Come integrare dati ufficiali dai comuni nella tua app

---

## 📋 INDICE

1. [API Nazionali Disponibili](#api-nazionali-italia)
2. [Open Data Comunali](#open-data-comunali)
3. [Implementazione Tecnica](#implementazione-tecnica)
4. [Casi d'Uso Pratici](#casi-duso-pratici)
5. [Configurazione Multi-Comune](#configurazione-multi-comune)

---

## 🇮🇹 API NAZIONALI ITALIA

### 1. SPID (Sistema Pubblico Identità Digitale)

**Cosa fa**: Autenticazione cittadini con identità digitale nazionale

**Vantaggi**:
- ✅ Identità certificata dallo stato
- ✅ Cittadini già registrati (milioni di utenti)
- ✅ No password da ricordare
- ✅ Sicurezza massima

**Implementazione**:
```javascript
// Backend: integrazione SPID con passport-saml
npm install passport passport-saml

// routes/auth-spid.js
router.get('/auth/spid', passport.authenticate('saml'));
router.post('/auth/spid/callback', 
  passport.authenticate('saml'),
  (req, res) => {
    // Utente autenticato via SPID
    const { fiscalNumber, name, familyName, email } = req.user;
    // Crea/aggiorna utente nel DB
  }
);
```

**Documentazione**: https://developers.italia.it/it/spid/  
**Costo**: Gratuito (richiede certificati digitali)  
**Complessità**: Media-Alta  
**Tempo setup**: 2-3 settimane (include certificazioni)

---

### 2. CIE (Carta Identità Elettronica)

**Cosa fa**: Login con carta d'identità elettronica

**Vantaggi**:
- ✅ Autenticazione con CIE + PIN
- ✅ Alternativa a SPID
- ✅ Integrazione con app mobile (NFC)

**Implementazione**:
- Simile a SPID
- Richiede lettore NFC su mobile
- SDK disponibili per Android/iOS

**Documentazione**: https://developers.italia.it/it/cie/  
**Costo**: Gratuito  
**Raccomandazione**: Implementa DOPO SPID se necessario

---

### 3. PagoPA

**Cosa fa**: Sistema nazionale pagamenti verso PA

**Casi d'uso**:
- 💰 Pagamento multe
- 💰 Pagamento tasse comunali (IMU, TARI)
- 💰 Pagamento servizi (mensa scolastica, asilo)
- 💰 Tributi vari

**Implementazione**:
```javascript
// Backend: generazione pagamento PagoPA
const createPayment = async (userId, importo, causale) => {
  const payment = {
    amount: importo * 100, // centesimi
    description: causale,
    idempotencyKey: generateUUID(),
    creditorInstitution: COMUNE_FISCAL_CODE,
  };
  
  // Chiama API PagoPA
  const response = await fetch('https://api.pagopa.it/v1/payments', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PAGOPA_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payment),
  });
  
  const { checkoutURL } = await response.json();
  return checkoutURL; // Redirect utente qui
};
```

**Flusso**:
1. Utente sceglie cosa pagare nell'app
2. App genera richiesta PagoPA
3. Utente reindirizzato a PagoPA
4. Completa pagamento
5. Webhook conferma pagamento
6. App aggiorna stato

**Documentazione**: https://docs.pagopa.it/  
**Costo**: 
- Setup: Gratuito
- Commissioni: ~2% per transazione (a carico cittadino/comune)
- **Richiede accordo con il comune**

**Complessità**: Alta  
**Tempo setup**: 4-6 settimane (include certificazioni, accordi)

---

### 4. ANPR (Anagrafe Nazionale Popolazione Residente)

**Cosa fa**: Accesso dati anagrafici cittadini

**Dati disponibili** (se autorizzati):
- Residenza
- Stato famiglia
- Certificati anagrafici

**⚠️ ATTENZIONE**:
- Richiede **autorizzazioni specifiche**
- Solo enti autorizzati
- Privacy sensibile (GDPR)
- Non per tutti i progetti

**Documentazione**: https://www.anpr.interno.it/  
**Costo**: Gratuito (se autorizzati)  
**Raccomandazione**: **NON necessario** per gestionale comunale base

---

## 📊 OPEN DATA COMUNALI

### Cosa sono?

Dati pubblici resi disponibili dai comuni in formati aperti (JSON, CSV, XML)

### Portali Open Data Italiani

**Nazionali**:
- **Dati.gov.it**: https://dati.gov.it/
- Catalogo nazionale open data PA

**Esempi comuni con Open Data**:
- Roma: https://dati.comune.roma.it/
- Milano: https://dati.comune.milano.it/
- Torino: http://aperto.comune.torino.it/
- Firenze: http://opendata.comune.fi.it/
- Bologna: http://dati.comune.bologna.it/

### Dati tipicamente disponibili

| Categoria | Esempi dati | Formato | Aggiornamento |
|-----------|-------------|---------|---------------|
| **Delibere** | Delibere giunta/consiglio | JSON/XML | Settimanale |
| **Bilanci** | Entrate, spese, investimenti | CSV | Annuale |
| **Servizi** | Orari uffici, farmacie turno | JSON | Giornaliero |
| **Territorio** | ZTL, parcheggi, cantieri | GeoJSON | Tempo reale |
| **Ambiente** | Qualità aria, rumore | JSON | Oraria |
| **Trasporti** | Orari bus, traffico | GTFS/JSON | Tempo reale |
| **Cultura** | Musei, eventi, biblioteche | JSON | Settimanale |
| **Anagrafe** | Popolazione, età media | CSV | Mensile |

---

## 🔧 IMPLEMENTAZIONE TECNICA

### Architettura consigliata

```
Frontend (React)
    ↓ fetch('/api/external/...')
Backend (Express) - PROXY
    ↓ Cache Redis (1-24h)
    ↓ fetch API esterne
API Esterne (Comuni, PagoPA, etc.)
```

**Perché proxy backend?**
- ✅ Nasconde API key
- ✅ Caching (risparmio chiamate)
- ✅ Rate limiting
- ✅ Error handling centralizzato
- ✅ Fallback se API down

### Setup Backend

#### 1. Struttura cartelle

```
backend/
├── services/
│   └── externalAPIs/
│       ├── openDataService.js
│       ├── pagoPAService.js
│       ├── spidService.js
│       └── weatherService.js
├── routes/
│   └── external.js
└── middleware/
    └── cacheMiddleware.js
```

#### 2. Service Open Data (Esempio)

```javascript
// services/externalAPIs/openDataService.js

const COMUNE_CONFIG = {
  'roma': {
    baseURL: 'https://dati.comune.roma.it/api/3/action/',
    datasets: {
      delibere: 'delibere-giunta',
      eventi: 'eventi-culturali',
    }
  },
  'milano': {
    baseURL: 'https://dati.comune.milano.it/api/3/action/',
    datasets: {
      delibere: 'delibere-consiglio',
      eventi: 'eventi-pubblici',
    }
  }
};

export const getDelibere = async (comune, filters = {}) => {
  const config = COMUNE_CONFIG[comune];
  if (!config) throw new Error('Comune non configurato');
  
  const url = `${config.baseURL}datastore_search?resource_id=${config.datasets.delibere}`;
  
  const response = await fetch(url);
  if (!response.ok) throw new Error('Errore API Open Data');
  
  const data = await response.json();
  return data.result.records;
};

export const getEventiCulturali = async (comune) => {
  const config = COMUNE_CONFIG[comune];
  const url = `${config.baseURL}datastore_search?resource_id=${config.datasets.eventi}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  // Normalizza formato (ogni comune può avere struttura diversa)
  return data.result.records.map(evento => ({
    titolo: evento.titolo || evento.nome,
    descrizione: evento.descrizione,
    data: evento.data_inizio,
    luogo: evento.luogo,
    categoria: evento.categoria,
  }));
};
```

#### 3. Routes con cache

```javascript
// routes/external.js
import express from 'express';
import { getDelibere, getEventiCulturali } from '../services/externalAPIs/openDataService.js';
import { cacheMiddleware } from '../middleware/cacheMiddleware.js';

const router = express.Router();

// Cache 24h per delibere (cambiano poco)
router.get('/delibere', 
  cacheMiddleware(24 * 60 * 60), // 24 ore
  async (req, res) => {
    try {
      const { comune } = req.query;
      const delibere = await getDelibere(comune);
      res.json({ success: true, data: delibere });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

// Cache 1h per eventi (aggiornati più spesso)
router.get('/eventi-culturali',
  cacheMiddleware(60 * 60), // 1 ora
  async (req, res) => {
    try {
      const { comune } = req.query;
      const eventi = await getEventiCulturali(comune);
      res.json({ success: true, data: eventi });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

export default router;
```

#### 4. Cache middleware (semplice in-memory)

```javascript
// middleware/cacheMiddleware.js
const cache = new Map();

export const cacheMiddleware = (ttlSeconds) => {
  return (req, res, next) => {
    const key = req.originalUrl;
    
    // Check cache
    if (cache.has(key)) {
      const { data, timestamp } = cache.get(key);
      const age = (Date.now() - timestamp) / 1000;
      
      if (age < ttlSeconds) {
        console.log(`Cache HIT: ${key}`);
        return res.json(data);
      }
    }
    
    // Override res.json to cache response
    const originalJson = res.json.bind(res);
    res.json = (data) => {
      cache.set(key, { data, timestamp: Date.now() });
      console.log(`Cache SET: ${key}`);
      return originalJson(data);
    };
    
    next();
  };
};

// Cleanup cache ogni ora
setInterval(() => {
  cache.clear();
  console.log('Cache cleared');
}, 60 * 60 * 1000);
```

### Setup Frontend

#### Service per API comunali

```javascript
// services/comuniAPIService.js

const API_URL = import.meta.env.VITE_API_URL;

export const getDelibere = async (comune, filters = {}) => {
  const queryString = new URLSearchParams({ comune, ...filters }).toString();
  const response = await fetch(`${API_URL}/api/external/delibere?${queryString}`);
  
  if (!response.ok) {
    throw new Error('Errore caricamento delibere');
  }
  
  const { data } = await response.json();
  return data;
};

export const getEventiCulturali = async (comune) => {
  const response = await fetch(`${API_URL}/api/external/eventi-culturali?comune=${comune}`);
  const { data } = await response.json();
  return data;
};

export const getFarmacieTurno = async () => {
  const response = await fetch(`${API_URL}/api/external/farmacie-turno`);
  const { data } = await response.json();
  return data;
};

export const getOrariUffici = async () => {
  const response = await fetch(`${API_URL}/api/external/orari-uffici`);
  const { data } = await response.json();
  return data;
};
```

#### Pagina esempio: Delibere

```javascript
// pages/Delibere.jsx
import { useState, useEffect } from 'react';
import { getDelibere } from '../services/comuniAPIService';
import { Container, Card, Spinner, Alert } from 'react-bootstrap';

const Delibere = () => {
  const [delibere, setDelibere] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchDelibere = async () => {
      try {
        const data = await getDelibere('roma'); // Comune configurabile
        setDelibere(data);
      } catch (err) {
        setError('Impossibile caricare le delibere');
      } finally {
        setLoading(false);
      }
    };
    
    fetchDelibere();
  }, []);
  
  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  
  return (
    <Container>
      <h1>Delibere Comunali</h1>
      {delibere.map((delibera) => (
        <Card key={delibera.id} className="mb-3">
          <Card.Body>
            <Card.Title>{delibera.oggetto}</Card.Title>
            <Card.Text>
              <strong>Numero:</strong> {delibera.numero} <br />
              <strong>Data:</strong> {new Date(delibera.data).toLocaleDateString('it-IT')} <br />
              <strong>Tipo:</strong> {delibera.tipo}
            </Card.Text>
            {delibera.link_pdf && (
              <a href={delibera.link_pdf} target="_blank" rel="noopener noreferrer">
                Scarica PDF
              </a>
            )}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Delibere;
```

---

## 💡 CASI D'USO PRATICI

### 1. 🗑️ Calendario Raccolta Rifiuti

**API comunale**: Calendario raccolta per indirizzo

**Implementazione**:
```javascript
// Backend
export const getCalendarioRifiuti = async (indirizzo) => {
  // API comunale per calendario
  const response = await fetch(`${COMUNE_API}/rifiuti/calendario?via=${indirizzo}`);
  const data = await response.json();
  
  return {
    plastica: data.giorni_plastica, // es. ["lunedì", "giovedì"]
    carta: data.giorni_carta,
    organico: data.giorni_organico,
    indifferenziato: data.giorni_indifferenziato,
  };
};

// Frontend: Notifica giorno prima
const notificaRaccolta = (tipologia, domani) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(`Raccolta ${tipologia} domani!`, {
      body: `Ricordati di mettere fuori il ${tipologia}`,
      icon: '/icon-rifiuti.png',
    });
  }
};
```

**Valore**: Cittadini non dimenticano più i giorni di raccolta!

---

### 2. 💰 Pagamenti Multe/Tasse

**API**: PagoPA

**Flusso**:
1. Utente vede lista multe/tributi da pagare
2. Click "Paga"
3. Redirect a PagoPA
4. Completa pagamento
5. Torna all'app, multa segnata come pagata

**Backend**:
```javascript
router.post('/pagamenti/crea', auth, async (req, res) => {
  const { tipo, importo, causale } = req.body;
  
  // Crea posizione debitoria su PagoPA
  const pagamento = await createPagoPAPayment({
    fiscalCode: req.user.codiceFiscale,
    amount: importo,
    description: causale,
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30gg
  });
  
  res.json({ 
    success: true, 
    checkoutURL: pagamento.checkoutURL,
    paymentId: pagamento.id,
  });
});

// Webhook callback da PagoPA
router.post('/pagamenti/callback', async (req, res) => {
  const { paymentId, status } = req.body;
  
  if (status === 'completed') {
    // Aggiorna DB: pagamento completato
    await Pagamento.findByIdAndUpdate(paymentId, { 
      stato: 'pagato',
      dataPagamento: new Date(),
    });
    
    // Invia notifica utente
    await sendNotification(userId, 'Pagamento completato!');
  }
  
  res.sendStatus(200);
});
```

---

### 3. 🚌 Orari Trasporti in Tempo Reale

**API**: GTFS (Google Transit Feed Specification) comunale

**Implementazione**:
```javascript
// Fermate vicine con geolocalizzazione
export const getFermateVicine = async (lat, lon, radius = 500) => {
  const response = await fetch(
    `${TRASPORTI_API}/stops?lat=${lat}&lon=${lon}&radius=${radius}`
  );
  const fermate = await response.json();
  return fermate;
};

// Prossime corse
export const getProximeCorse = async (stopId) => {
  const response = await fetch(`${TRASPORTI_API}/stop_times/${stopId}`);
  const corse = await response.json();
  
  return corse.map(corsa => ({
    linea: corsa.route_short_name,
    destinazione: corsa.trip_headsign,
    orario: corsa.departure_time,
    ritardo: corsa.delay_minutes || 0,
  }));
};
```

**UI**: Mappa con fermate vicine + lista prossime corse

---

### 4. 📜 Delibere con Notifiche Personalizzate

**Feature**: Utente si iscrive a categorie di interesse

**Implementazione**:
```javascript
// Model User con interessi
const UserSchema = new Schema({
  // ... altri campi
  interessiDelibere: [{
    type: String,
    enum: ['urbanistica', 'bilancio', 'sociale', 'ambiente', 'cultura']
  }],
});

// Cron job giornaliero: controlla nuove delibere
cron.schedule('0 9 * * *', async () => {
  const nuoveDelibere = await getDelibere('roma', { 
    da: ieri,
    a: oggi,
  });
  
  for (const delibera of nuoveDelibere) {
    // Trova utenti interessati
    const utentiInteressati = await User.find({
      interessiDelibere: delibera.categoria,
    });
    
    // Invia notifica
    for (const utente of utentiInteressati) {
      await createNotifica({
        userId: utente._id,
        tipo: 'nuova_delibera',
        messaggio: `Nuova delibera su ${delibera.categoria}: ${delibera.oggetto}`,
        link: `/delibere/${delibera.id}`,
      });
    }
  }
});
```

---

## 🏛️ CONFIGURAZIONE MULTI-COMUNE

Se vuoi che l'app funzioni per **più comuni** contemporaneamente:

### Strategia 1: Multi-tenant (SaaS)

**Come funziona**: Un'istanza app, tanti comuni

```javascript
// config/comuni.js
export const COMUNI_CONFIG = {
  'roma': {
    nome: 'Comune di Roma',
    logo: '/logos/roma.png',
    coloriPrimari: { primary: '#8B0000', secondary: '#FFD700' },
    apiOpenData: 'https://dati.comune.roma.it/api/3/action/',
    features: {
      delibere: true,
      pagamenti: true,
      trasporti: true,
      rifiuti: true,
    },
    contatti: {
      telefono: '06 0606',
      email: 'urp@comune.roma.it',
    }
  },
  'milano': {
    nome: 'Comune di Milano',
    logo: '/logos/milano.png',
    coloriPrimari: { primary: '#009246', secondary: '#FFFFFF' },
    apiOpenData: 'https://dati.comune.milano.it/api/3/action/',
    features: {
      delibere: true,
      pagamenti: false, // Non configurato
      trasporti: true,
      rifiuti: true,
    },
    contatti: {
      telefono: '02 0202',
      email: 'urp@comune.milano.it',
    }
  },
  // ... altri comuni
};

// Identifica comune da URL
export const getComuneFromRequest = (req) => {
  const subdomain = req.hostname.split('.')[0]; // es. roma.comuneapp.it
  return COMUNI_CONFIG[subdomain] || COMUNI_CONFIG['default'];
};
```

**URL structure**:
- roma.comuneapp.it
- milano.comuneapp.it
- torino.comuneapp.it

**Vantaggi**:
- ✅ Gestione centralizzata
- ✅ Scalabile
- ✅ Un deploy per tutti

**Svantaggi**:
- ⚠️ Configurazione iniziale complessa
- ⚠️ Ogni comune deve avere API disponibili

---

### Strategia 2: White-label (Custom per comune)

**Come funziona**: Deploy separato per ogni comune

**Vantaggi**:
- ✅ Personalizzazione totale
- ✅ Indipendenza
- ✅ Dominio custom (es. app.comune.roma.it)

**Svantaggi**:
- ⚠️ Manutenzione multipla
- ⚠️ Costi hosting moltiplicati

---

## ✅ CHECKLIST INTEGRAZIONE API ESTERNE

### Prima di integrare un'API:
- [ ] Verifica disponibilità e documentazione
- [ ] Controlla rate limiting (max richieste)
- [ ] Verifica costi (se presenti)
- [ ] Testa in ambiente di sviluppo
- [ ] Implementa caching (riduce chiamate)
- [ ] Gestisci errori (API può essere offline)
- [ ] Implementa fallback (dati mock se API down)
- [ ] Monitora uptime API esterna
- [ ] Documenta per team/cliente

### Lato legale:
- [ ] Verifica termini d'uso API
- [ ] Privacy policy aggiornata (GDPR)
- [ ] Consensi utente (se dati sensibili)
- [ ] Accordi con il comune (PagoPA, SPID)

---

## 🎯 RACCOMANDAZIONI FINALI

### Per iniziare (MVP):
1. ❌ **NON** implementare SPID/PagoPA subito (troppo complesso)
2. ✅ Parti con login classico (email/password)
3. ✅ Integra **solo Open Data** (facile, gratis)
4. ✅ Aggiungi 2-3 dataset utili:
   - Delibere comunali
   - Eventi culturali
   - Orari servizi

### Dopo lancio (v2):
5. ✅ Se richiesto, aggiungi SPID
6. ✅ Se comune interessato, integra PagoPA
7. ✅ Espandi dataset Open Data

### Valore per il cliente (Comune):
- 🎯 App diventa **hub unico** servizi comunali
- 🎯 Cittadini hanno tutto in un posto
- 🎯 Meno chiamate/visite fisiche agli uffici
- 🎯 Trasparenza (delibere, bilanci pubblici)

---

## 📚 RISORSE UTILI

### Documentazione ufficiale:
- **SPID**: https://developers.italia.it/it/spid/
- **CIE**: https://developers.italia.it/it/cie/
- **PagoPA**: https://docs.pagopa.it/
- **Designers Italia**: https://designers.italia.it/
- **Developers Italia**: https://developers.italia.it/

### Cataloghi Open Data:
- **Dati.gov.it**: https://dati.gov.it/
- **Guida Open Data**: https://docs.italia.it/italia/daf/lg-patrimonio-pubblico/

### Community:
- **Forum Developers Italia**: https://forum.italia.it/
- **Slack Developers Italia**: https://slack.developers.italia.it/

---

**🚀 Pronto per integrare dati ufficiali nella tua app comunale!**

*Ultimo aggiornamento: Aprile 2026*
