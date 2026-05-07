# 💰 SOMMARIO COSTI - Gestionale Comunale

## � MODELLO BUSINESS

**Tu (Sviluppatore)**:
- ✅ Sviluppi con free tier: **$0**
- ✅ Nessun costo durante sviluppo (6+ mesi)
- ✅ Crei valore senza investimento

**Cliente (Comune)**:
- 💵 Paga i costi operativi in produzione
- 📄 Riceve fatture mensili/annuali
- 🏛️ Investimento minimo per servizio cittadini

**Workflow fatturazione**:
1. Sviluppi tutto gratis (free tier)
2. A lancio, crei account intestati al comune
3. Fatturi al comune: $60-70/mese + eventuale $124/anno store
4. Comune paga, cittadini usano gratis

---

## �📊 Confronto Rapido Scenari

| Scenario | Mese | Anno 1 | Note | Chi paga |
|----------|------|--------|------|----------|
| **SVILUPPO** (Tu) | $0 | $0 | Free tier tutto, solo PWA | Nessuno 🎉 |
| **PRODUZIONE** (Cliente) | $60 | $720 | Hosting pro, solo web + PWA | Comune fatturato |
| **PRO + Store** (Cliente) | $70 | $844 | + App native iOS/Android | Comune fatturato |
| **ENTERPRISE** (Cliente) | $200-400 | $2.400-4.800 | Scaling alto traffico | Comune fatturato |

---

## 🎯 RACCOMANDAZIONE

### Mese 1-6: SVILUPPO - Tu paghi $0 🚀
✅ Sviluppo e testing  
✅ MongoDB Atlas Free (512MB)  
✅ Render.com Free (backend)  
✅ Vercel Free (frontend)  
✅ Cloudinary Free (immagini)  
✅ PWA mobile (no store)  

**Limitazione**: Backend "dorme" dopo 15min inattività
**Adatto per**: Sviluppo, demo al comune, beta test

---

### Mese 7-12: PRODUZIONE - Cliente paga $60/mese 💵

Crei account intestati al comune e fatturi:

✅ MongoDB M10 ($15)  
✅ Render Starter ($7)  
✅ Vercel Pro ($20)  
✅ SendGrid Essentials ($20)  
✅ PWA mobile (ancora no store)  

**Fattura al Comune**: $60/mese = **$720/anno**

**Per aggiungere store native**: +$124/anno (Apple $99 + Google $25)

---

### Come fatturare al Comune

1. **Proposta iniziale**: Presenti costi operativi al comune
2. **Setup account**: Crei account intestati al comune
   - MongoDB Atlas: intestato al comune
   - Render/Vercel: con email comune
   - Carta di credito comunale per addebiti
3. **Alternative**:
   - Tu paghi e rifatturi mensile (+ tuo margine)
   - Contratto manutenzione annuale forfettario
4. **Documentazione**: Fatture mensili dettagliate per trasparenza

---

## 📱 MOBILE: PWA vs Native

| | PWA | Native |
|---|-----|--------|
| **Costo pubblicazione** | $0 | $124/anno |
| **Tempo sviluppo** | 1-2 sett | 4-6 sett |
| **Visibilità store** | ❌ | ✅ |
| **Aggiornamenti** | Istantanei | Review 2-7 giorni |
| **Installabile** | ✅ | ✅ |
| **Notifiche push** | ✅ (limitate iOS) | ✅✅ |

**💡 Consiglio**: Inizia con PWA, passa a native solo se utenti lo richiedono

---

## 💳 COSTI STORE MOBILE

### Google Play Store
- **$25** pagamento UNICO (a vita)
- Review: 1-3 giorni
- Meno restrittivo

### Apple App Store  
- **$99/anno** (rinnovo obbligatorio)
- Review: 2-7 giorni
- Più restrittivo su guidelines
- Richiede Mac per sviluppo locale (o usa Expo Cloud)

**TOTALE**: $124 primo anno, $99/anno successivi

---

## 🔍 DETTAGLIO SERVIZI

### Database - MongoDB Atlas
| Piano | Costo/mese | Storage | Utenti supportati |
|-------|------------|---------|-------------------|
| Free | $0 | 512MB | <500 |
| M10 Shared | $10-15 | 10GB | 500-5k |
| M30 Dedicated | $50-100 | 80GB | 10k+ |

### Backend Hosting - Render.com
| Piano | Costo/mese | RAM | Uptime |
|-------|------------|-----|--------|
| Free | $0 | 512MB | Sleep dopo 15min |
| Starter | $7 | 512MB | Always-on 24/7 |
| Standard | $25 | 2GB | Autoscaling |

### Frontend Hosting - Vercel
| Piano | Costo/mese | Bandwidth | Deploy |
|-------|------------|-----------|--------|
| Hobby | $0 | 100GB | Illimitati |
| Pro | $20 | 1TB | Illimitati + Analytics |

### Immagini - Cloudinary
| Piano | Costo/mese | Storage | Bandwidth |
|-------|------------|---------|-----------|
| Free | $0 | 25GB | 25GB |
| Plus | $89 | 75GB | 150GB |

### Email - SendGrid
| Piano | Costo/mese | Email/mese |
|-------|------------|------------|
| Free | $0 | 100/giorno (~3k/mese) |
| Essentials | $20 | 50k |
| Pro | $90 | 1M |

---

## 💡 COME RISPARMIARE

### 1. PWA invece di App Native
**Risparmio**: $124/anno

### 2. MongoDB Atlas Free + Ottimizzazioni
- Usa indici correttamente
- Comprimi immagini prima upload
- Archivia vecchi dati
**Durata**: 6-12 mesi con free tier

### 3. Keep-Alive Gratuito per Render.com
- Usa cron-job.org (free) per ping ogni 10min
- Evita sleep backend
**Risparmio**: $7/mese (almeno per i primi mesi)

### 4. Self-Hosting (Avanzato)
- VPS DigitalOcean: $6/mese per tutto
- Più lavoro setup/manutenzione
**Risparmio**: ~$50/mese

### 5. Negozia con il Comune
- Proponi partnership: tu sviluppi, loro pagano hosting
- Giusto perché è un servizio pubblico
**Risparmio**: 100% costi operativi

---

## 📅 PIANO PAGAMENTI CONSIGLIATO

### Anno 1 (Sviluppo + Lancio)

| Mese | Azione | Costo Mensile | Costo Cumulativo |
|------|--------|---------------|------------------|
| 1-6 | Sviluppo con free tier | $0 | $0 |
| 7 | Upgrade a Pro (lancio beta) | $60 | $60 |
| 8-12 | Continua Pro | $60 | $360 |
| **TOTALE ANNO 1** | - | - | **$360** |

### Anno 2 (Crescita)

| Azione | Quando | Costo |
|--------|--------|-------|
| Hosting Pro | $60/mese | $720/anno |
| Rinnovo Apple Developer | Mese 13 | $99 |
| Google Play (già pagato) | - | $0 |
| **TOTALE ANNO 2** | - | **$819** |

---

## 🎁 BONUS: Stack 100% Gratuito (per sempre)

Se vuoi mantenere $0/mese indefinitamente:

1. **Database**: MongoDB Atlas Free (512MB)
2. **Backend**: 
   - Railway (500h free/mese) + Fly.io (3 app free)
   - Alternanza per non superare limiti
3. **Frontend**: Vercel/Netlify Free
4. **Immagini**: ImgBB o Firebase Storage Free (1GB)
5. **Email**: Brevo Free (300 email/giorno)
6. **Mobile**: PWA (installabile, $0)

**Limitazioni**:
- Backend può essere lento al primo accesso
- Storage limitato (buono per 500-1000 utenti)
- No supporto prioritario
- Più lavoro per monitoraggio

**Adatto per**: MVP, test, community piccole (<1000 utenti)

---

## ❓ FAQ Costi

### Posso lanciare con $0?
**Sì!** Per i primi 6-12 mesi puoi usare solo free tier e PWA.

### Quando devo iniziare a pagare?
Quando superi i limiti free tier (solitamente 500+ utenti attivi) o vuoi performance migliori.

### L'app nativa è obbligatoria?
**No!** PWA è perfettamente installabile e funzionale. Native è solo per visibilità store.

### Posso evitare i $99/anno di Apple?
Solo non pubblicando su App Store. Considera che molti utenti hanno Android (Play Store $25 una tantum).

### Il Comune può pagare?
**Assolutamente!** È un servizio pubblico, proponi partnership pubblico-privato.

### Ci sono costi nascosti?
No, questi sono TUTTI i costi. Solo considera:
- Eventuale dominio custom (~$10/anno)
- SSL certificato (gratis con Vercel/Netlify)
- Tempo tuo per sviluppo (se vuoi monetizzare il tuo lavoro)

---

**📄 Vedi [ROADMAP.md](ROADMAP.md) per la guida completa allo sviluppo**
