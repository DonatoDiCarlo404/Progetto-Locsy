// Router Configuration - Configurazione delle route dell'applicazione

import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import AdminRoute from './components/common/AdminRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profilo from './pages/Profilo';
import NotFound from './pages/NotFound';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';

/**
 * Router principale dell'applicazione
 * Definisce tutte le route pubbliche, private e admin
 */
export const router = createBrowserRouter([
  // Route pubbliche
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  // Route protette (richiedono login)
  {
    path: '/profilo',
    element: (
      <PrivateRoute>
        <Profilo />
      </PrivateRoute>
    ),
  },

  // Route admin (richiedono login + ruolo admin)
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
  },

  // 404 Not Found
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
