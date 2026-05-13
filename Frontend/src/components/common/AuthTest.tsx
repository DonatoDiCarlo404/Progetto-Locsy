// Componente di test per verificare che Redux Auth funziona correttamente
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { login, register, logout } from '../../redux/slices/authSlice';
import styles from './AuthTest.module.css';

function AuthTest() {
  const dispatch = useAppDispatch();
  
  // Leggo lo state Redux
  const { user, isLoading, error } = useAppSelector((state) => state.auth);

  // Handler per testare il login
  const handleTestLogin = () => {
    dispatch(login({
      email: 'mario.rossi@test.com',
      password: 'password123'
    }));
  };

  // Handler per testare la registrazione
  const handleTestRegister = () => {
    dispatch(register({
      nome: 'Test',
      cognome: 'User',
      email: 'test@example.com',
      password: 'password123'
    }));
  };

  // Handler per il logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.authTestContainer}>
      <h1>🧪 Redux Auth Test</h1>
      
      {/* Mostro loading */}
      {isLoading && <p>⏳ Loading...</p>}
      
      {/* Mostro eventuali errori */}
      {error && <p className={styles.authTestError}>❌ {error}</p>}
      
      {/* Se l'utente è loggato mostro i suoi dati */}
      {user ? (
        <div>
          <h2>✅ Utente Loggato:</h2>
          <p><strong>Nome:</strong> {user.nome} {user.cognome}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Ruolo:</strong> {user.ruolo}</p>
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      ) : (
        <div>
          <h2>🔐 Non loggato</h2>
          <button onClick={handleTestLogin} className={styles.authTestButton}>
            🔑 Test Login (mario.rossi)
          </button>
          <button onClick={handleTestRegister}>
            📝 Test Register
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthTest;
