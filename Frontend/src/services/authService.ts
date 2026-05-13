// Auth Service - Servizi di autenticazione
// Usa l'API layer per le chiamate al backend

import { postAPI, getAPI } from './api';
import type { User } from '../types';

// Interfaccia per la risposta di login/register
interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

// Interfaccia per la risposta di getMe
interface MeResponse {
  success: boolean;
  user: User;
}

/**
 * Registrazione nuovo utente
 */
export const register = async (userData: {
  nome: string;
  cognome: string;
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  return postAPI<AuthResponse>('/auth/register', userData);
};

/**
 * Login utente
 */
export const login = async (credentials: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  return postAPI<AuthResponse>('/auth/login', credentials);
};

/**
 * Get profilo utente corrente
 */
export const getMe = async (): Promise<MeResponse> => {
  return getAPI<MeResponse>('/auth/me');
};

/**
 * Logout utente (rimuove token da localStorage)
 */
export const logout = (): void => {
  localStorage.removeItem('token');
};
