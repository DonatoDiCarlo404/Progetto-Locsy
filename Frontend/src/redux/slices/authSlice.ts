// Auth Slice - Gestisce login, logout, register e stato utente con Redux

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, AuthState } from '../../types';

// URL del backend
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Stato iniziale - recupero token e user dal localStorage se presenti
const userFromStorage = localStorage.getItem('user');
const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthState = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: tokenFromStorage || null,
  isLoading: false,
  error: null,
};

// Async thunks per chiamate API

// Registrazione nuovo utente
export const register = createAsyncThunk(
  'auth/register',
  async (userData: { nome: string; cognome: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || 'Errore durante la registrazione');
      }

      // Salva token e user nel localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Errore di rete');
    }
  }
);

// Login utente esistente
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || 'Credenziali non valide');
      }

      // Salvo token e user nel localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Errore di rete');
    }
  }
);

// Recupero dati utente corrente dal token
export const getMe = createAsyncThunk(
  'auth/getMe',
  async (_, { rejectWithValue, getState }) => {
    try {
      // Prendo il token dallo state Redux
      const state = getState() as { auth: AuthState };
      const token = state.auth.token;

      if (!token) {
        return rejectWithValue('Nessun token trovato');
      }

      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || 'Token non valido');
      }

      // Aggiorno user nel localStorage
      localStorage.setItem('user', JSON.stringify(data.user));

      return data.user;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Errore di rete');
    }
  }
);

// Definizione del slice Redux per auth
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Logout - pulisce stato e localStorage
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    
    // Reset errore
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Gestione casi register
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Gestione casi login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Gestione casi getMe
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        // Token scaduto o non valido, faccio logout automatico
        state.user = null;
        state.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      });
  },
});

// Export actions e reducer
export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
