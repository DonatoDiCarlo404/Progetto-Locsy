// App - Componente principale dell'applicazione
// Configura il router per la navigazione tra le pagine

import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
