// 🎯 TYPES - Interfacce TypeScript per tutta l'app
// Queste "descrivono" la forma dei dati che arrivano dal backend

// 👤 UTENTE
export interface User {
  _id: string;
  nome: string;
  cognome: string;
  email: string;
  ruolo: 'cittadino' | 'admin';  // ← può essere SOLO uno di questi due
  avatar?: string;  // ← il ? significa "opzionale" (può non esserci)
  telefono?: string;
  verificato: boolean;
  dataRegistrazione: string;
  ultimoAccesso?: string;
  impostazioniNotifiche?: {
    rifiuti: boolean;
    orarioNotificaRifiuti: string;
    notizie: boolean;
    eventi: boolean;
    segnalazioni: boolean;
  };
}

// 🔐 AUTH STATE - Cosa salviamo in Redux per l'autenticazione
export interface AuthState {
  user: User | null;  // ← null se non loggato, User se loggato
  token: string | null;  // ← JWT token
  isLoading: boolean;  // ← true durante login/register
  error: string | null;  // ← messaggio errore se qualcosa va male
}

// 📰 NOTIZIA
export interface Notizia {
  _id: string;
  titolo: string;
  contenuto: string;
  categoria: 'Viabilità' | 'Vita cittadina' | 'Istituzionale' | 'Cultura';
  immagineCopertina?: string;
  autore?: User;
  dataPubblicazione: string;
  pubblicata: boolean;
  inEvidenza: boolean;
  tags: string[];
  likes: string[];  // ← array di user IDs
  viste: number;
  commentiAbilitati: boolean;
}

// 🎉 EVENTO
export interface Evento {
  _id: string;
  titolo: string;
  descrizione: string;
  immagine?: string;
  dataInizio: string;
  dataFine?: string;
  oraInizio?: string;
  oraFine?: string;
  luogo?: string;
  indirizzo?: string;
  coordinate?: {
    type: string;
    coordinates: [number, number];  // [lng, lat]
  };
  categoria?: string;
  organizzatore?: string;
  suggerito: boolean;
  partecipanti: string[];  // ← array di user IDs
  maxPartecipanti?: number;
  prezzo: number;
  linkEsterno?: string;
  pubblicato: boolean;
}

// 🍕 RISTORANTE
export interface Ristorante {
  _id: string;
  nome: string;
  descrizione?: string;
  categoria: 'Tradizionale' | 'Pizza' | 'Gourmet' | 'Fast Food' | 'Etnico' | 'Altro';
  immagine?: string;
  indirizzo: string;
  coordinate?: {
    type: string;
    coordinates: [number, number];
  };
  telefono?: string;
  email?: string;
  sitoWeb?: string;
  fasciaDiPrezzo: '€' | '€€' | '€€€' | '€€€€';
  ratingMedio: number;
  numeroRecensioni: number;
  pubblicato: boolean;
}

// ⭐ RECENSIONE
export interface Recensione {
  _id: string;
  ristorante: string;  // ← ID del ristorante
  autore: User;
  rating: number;  // 1-5
  commento?: string;
  foto?: string[];
  dataCreazione: string;
  likes: string[];
}

// 🏛️ LUOGO (monumento, museo, parco)
export interface Luogo {
  _id: string;
  nome: string;
  descrizione?: string;
  categoria: 'Monumento' | 'Museo' | 'Chiesa' | 'Parco' | 'Altro';
  immagine?: string;
  galleria?: string[];
  indirizzo?: string;
  coordinate?: {
    type: string;
    coordinates: [number, number];
  };
  orari?: string;
  prezzo?: string;
  telefono?: string;
  sitoWeb?: string;
  suggerito: boolean;
  pubblicato: boolean;
}

// 🛍️ OFFERTA
export interface Offerta {
  _id: string;
  titolo: string;
  descrizione: string;
  nomeNegozio: string;
  categoria?: string;
  immagine?: string;
  sconto?: string;
  dataInizio?: string;
  dataFine?: string;
  indirizzo?: string;
  telefono?: string;
  pubblicato: boolean;
}

// 💬 COMMENTO
export interface Commento {
  _id: string;
  contenuto: string;
  autore: User;
  tipoRiferimento: 'notizia' | 'evento';
  riferimento: string;  // ← ID della notizia o evento
  dataCreazione: string;
  likes: string[];
  risposte?: Commento[];
}

// 💾 SALVATO (preferiti)
export interface Salvato {
  _id: string;
  utente: string;
  tipo: 'notizia' | 'evento' | 'ristorante' | 'luogo' | 'offerta';
  riferimento: Notizia | Evento | Ristorante | Luogo | Offerta;  // ← oggetto completo
  dataSalvataggio: string;
}

// 🔔 NOTIFICA
export interface Notifica {
  _id: string;
  utente: string;
  tipo: 'segnalazione' | 'commento' | 'evento' | 'rifiuti' | 'sistema';
  titolo: string;
  messaggio: string;
  link?: string;
  letta: boolean;
  dataCreazione: string;
}

// 📝 SEGNALAZIONE
export interface Segnalazione {
  _id: string;
  autore: User;
  descrizione: string;
  categoria: 'Strade e Marciapiedi' | 'Illuminazione Pubblica' | 'Rifiuti e pulizia' | 'Verde pubblico' | 'Segnaletica' | 'Altro';
  foto?: string[];
  posizione?: {
    indirizzo?: string;
    coordinate?: {
      type: string;
      coordinates: [number, number];
    };
  };
  stato: 'nuova' | 'in_lavorazione' | 'risolta' | 'rifiutata';
  priorita: 'bassa' | 'media' | 'alta';
  dataCreazione: string;
  dataAggiornamento?: string;
  rispostaAdmin?: string;
  dataRisposta?: string;
  likes: string[];
  viste: number;
}

// 💊 FARMACIA
export interface Farmacia {
  _id: string;
  nome: string;
  indirizzo: string;
  coordinate?: {
    type: string;
    coordinates: [number, number];
  };
  telefono: string;
  diTurno: boolean;
  dataTurno?: string;
  orari?: string;
  apertura247: boolean;
  email?: string;
  pubblicato: boolean;
}
