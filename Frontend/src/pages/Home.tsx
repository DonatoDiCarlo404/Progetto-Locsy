// Home Page - Landing page dell'app

import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import styles from './Home.module.css';

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <h1>🏛️ App Comunale - Locsy</h1>
      
      {user ? (
        <div className={styles.welcomeSection}>
          <h2>Benvenuto, {user.nome}! 👋</h2>
          <p>Email: {user.email}</p>
          <p>Ruolo: {user.ruolo}</p>
          
          <div className={styles.actionsContainer}>
            <Link to="/profilo" className={styles.link}>
              👤 Il Mio Profilo
            </Link>
            
            {user.ruolo === 'admin' && (
              <Link to="/admin" className={styles.link}>
                ⚙️ Dashboard Admin
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.welcomeSection}>
          <h2>Benvenuto nell'App del Comune 👋</h2>
          <p>Accedi per usare tutti i servizi comunali</p>
          
          <div className={styles.actionsContainer}>
            <Link to="/login" className={styles.link}>
              🔑 Login
            </Link>
            <Link to="/register" className={styles.link}>
              📝 Registrati
            </Link>
          </div>
        </div>
      )}

      <div className={styles.servicesSection}>
        <h3>🚀 Servizi Disponibili (Coming Soon)</h3>
        <ul className={styles.servicesList}>
          <li>📢 Segnalazioni</li>
          <li>📰 Notizie dal Comune</li>
          <li>🎉 Eventi</li>
          <li>🍕 Ristoranti</li>
          <li>🏛️ Luoghi da Visitare</li>
          <li>🛍️ Offerte</li>
          <li>💊 Farmacie</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
