# 📊 LOCSY BACKEND - API ENDPOINTS

## 🔐 Authentication
- POST `/api/auth/register` - Registrazione utente
- POST `/api/auth/login` - Login
- GET `/api/auth/me` - Profilo corrente
- PUT `/api/auth/updateprofile` - Aggiorna profilo
- PUT `/api/auth/updatepassword` - Cambia password

## 📢 Segnalazioni
- GET `/api/segnalazioni` - Lista segnalazioni
- GET `/api/segnalazioni/:id` - Dettaglio
- POST `/api/segnalazioni` - Crea (auth required)
- PUT `/api/segnalazioni/:id` - Aggiorna (owner/admin)
- DELETE `/api/segnalazioni/:id` - Elimina (owner/admin)
- PUT `/api/segnalazioni/:id/risposta` - Risposta admin (admin)
- GET `/api/segnalazioni/radius/:lng/:lat/:distance` - Vicine

## 📰 Notizie
- GET `/api/notizie` - Lista
- GET `/api/notizie/:id` - Dettaglio
- POST `/api/notizie` - Crea (admin)
- PUT `/api/notizie/:id` - Aggiorna (admin)
- DELETE `/api/notizie/:id` - Elimina (admin)
- POST `/api/notizie/:id/like` - Toggle like (auth)

## 💬 Commenti
- GET `/api/commenti?tipo=notizia&riferimento=ID` - Lista
- POST `/api/commenti` - Crea (auth)
- DELETE `/api/commenti/:id` - Elimina (owner/admin)
- POST `/api/commenti/:id/like` - Toggle like (auth)
- POST `/api/commenti/:id/reply` - Risposta (auth)

## 📅 Eventi
- GET `/api/eventi` - Lista
- GET `/api/eventi/:id` - Dettaglio
- GET `/api/eventi/calendario?anno=2026&mese=5` - Calendario
- POST `/api/eventi` - Crea (admin)
- PUT `/api/eventi/:id` - Aggiorna (admin)
- DELETE `/api/eventi/:id` - Elimina (admin)
- POST `/api/eventi/:id/partecipa` - Toggle partecipazione (auth)

## 🍕 Ristoranti
- GET `/api/ristoranti` - Lista
- GET `/api/ristoranti/:id` - Dettaglio
- GET `/api/ristoranti/:id/recensioni` - Recensioni
- POST `/api/ristoranti` - Crea (admin)
- PUT `/api/ristoranti/:id` - Aggiorna (admin)
- DELETE `/api/ristoranti/:id` - Elimina (admin)

## ⭐ Recensioni
- POST `/api/recensioni` - Crea (auth)
- PUT `/api/recensioni/:id` - Aggiorna (owner)
- DELETE `/api/recensioni/:id` - Elimina (owner/admin)
- POST `/api/recensioni/:id/like` - Toggle like (auth)

## 🎁 Offerte
- GET `/api/offerte` - Lista
- GET `/api/offerte/:id` - Dettaglio
- POST `/api/offerte` - Crea (admin)
- PUT `/api/offerte/:id` - Aggiorna (admin)
- DELETE `/api/offerte/:id` - Elimina (admin)

## 🏛️ Luoghi
- GET `/api/luoghi` - Lista
- GET `/api/luoghi/:id` - Dettaglio
- POST `/api/luoghi` - Crea (admin)
- PUT `/api/luoghi/:id` - Aggiorna (admin)
- DELETE `/api/luoghi/:id` - Elimina (admin)

## ❤️ Salvati
- GET `/api/salvati` - Lista salvati utente (auth)
- POST `/api/salvati` - Aggiungi (auth)
- DELETE `/api/salvati/:id` - Rimuovi (auth)
- POST `/api/salvati/toggle` - Toggle (auth)

## 🔔 Notifiche
- GET `/api/notifiche` - Lista (auth)
- GET `/api/notifiche/count` - Conta non lette (auth)
- PUT `/api/notifiche/:id/letta` - Segna letta (auth)
- PUT `/api/notifiche/leggi-tutte` - Segna tutte (auth)
- DELETE `/api/notifiche/:id` - Elimina (auth)

## 💊 Farmacie
- GET `/api/farmacie` - Lista
- GET `/api/farmacie/turno` - Di turno oggi
- GET `/api/farmacie/vicine/:lng/:lat/:distance` - Vicine
- POST `/api/farmacie` - Crea (admin)
- PUT `/api/farmacie/:id` - Aggiorna (admin)
- DELETE `/api/farmacie/:id` - Elimina (admin)

## 👨‍💼 Admin Dashboard
- GET `/api/admin/stats` - Statistiche (admin)
- GET `/api/admin/segnalazioni` - Tutte segnalazioni (admin)
- GET `/api/admin/utenti` - Lista utenti (admin)
- PUT `/api/admin/utenti/:id/ban` - Ban/Unban (admin)
- DELETE `/api/admin/commenti/:id` - Elimina commento (admin)

---

## 🧪 Testing

**Server attivo**: http://localhost:5000  
**Health check**: http://localhost:5000/api/health

**Esempio registrazione**:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"nome":"Mario","cognome":"Rossi","email":"mario@test.com","password":"password123"}'
```
