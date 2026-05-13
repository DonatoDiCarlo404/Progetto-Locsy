// API Service Layer - Helper per chiamate HTTP centralizzate
// Gestisce automaticamente autenticazione, headers e error handling

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Interfaccia per le opzioni di fetch
interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

// Interfaccia per gli errori API
interface APIError {
  message: string;
  errors?: Array<{ msg: string; param?: string }>;
}

/**
 * Helper principale per tutte le chiamate API
 * Auto-include il token JWT se presente in localStorage
 */
export const fetchAPI = async <T = unknown>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> => {
  // Recupero il token da localStorage
  const token = localStorage.getItem('token');

  // Configuro gli headers di default
  const config: FetchOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    // Eseguo la chiamata fetch
    const response = await fetch(`${API_URL}${endpoint}`, config);

    // Parso la risposta JSON
    const data = await response.json();

    // Se la risposta non è ok, lancio un errore
    if (!response.ok) {
      const error = data as APIError;
      throw new Error(error.message || 'Errore di rete');
    }

    return data as T;
  } catch (error) {
    // Gestisco gli errori di rete o parsing
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Errore di connessione al server');
  }
};

/**
 * Helper per upload di file (immagini)
 * Usa FormData invece di JSON
 */
export const uploadFile = async <T = unknown>(
  endpoint: string,
  file: File,
  fieldName: string = 'image'
): Promise<T> => {
  // Recupero il token da localStorage
  const token = localStorage.getItem('token');

  // Creo FormData per l'upload
  const formData = new FormData();
  formData.append(fieldName, file);

  try {
    // Eseguo la chiamata fetch (senza Content-Type, impostato automaticamente dal browser)
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    });

    // Parso la risposta JSON
    const data = await response.json();

    // Se la risposta non è ok, lancio un errore
    if (!response.ok) {
      const error = data as APIError;
      throw new Error(error.message || 'Errore durante upload');
    }

    return data as T;
  } catch (error) {
    // Gestisco gli errori
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Errore durante upload del file');
  }
};

/**
 * Shortcut per chiamate GET
 */
export const getAPI = <T = unknown>(endpoint: string): Promise<T> => {
  return fetchAPI<T>(endpoint, { method: 'GET' });
};

/**
 * Shortcut per chiamate POST
 */
export const postAPI = <T = unknown>(
  endpoint: string,
  body: unknown
): Promise<T> => {
  return fetchAPI<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  });
};

/**
 * Shortcut per chiamate PUT
 */
export const putAPI = <T = unknown>(
  endpoint: string,
  body: unknown
): Promise<T> => {
  return fetchAPI<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
};

/**
 * Shortcut per chiamate DELETE
 */
export const deleteAPI = <T = unknown>(endpoint: string): Promise<T> => {
  return fetchAPI<T>(endpoint, { method: 'DELETE' });
};

/**
 * Shortcut per chiamate PATCH
 */
export const patchAPI = <T = unknown>(
  endpoint: string,
  body?: unknown
): Promise<T> => {
  const options: FetchOptions = {
    method: 'PATCH',
  };
  
  if (body) {
    options.body = JSON.stringify(body);
  }
  
  return fetchAPI<T>(endpoint, options);
};

export default fetchAPI;
