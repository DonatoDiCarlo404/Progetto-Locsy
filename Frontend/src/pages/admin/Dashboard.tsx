// Dashboard Admin - Pagina principale dashboard amministratore

import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>⚙️ Dashboard Admin</h1>
        <p className={styles.subtitle}>Benvenuto, {user?.nome}!</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>📢</div>
          <h3>Segnalazioni</h3>
          <p className={styles.cardDescription}>
            Gestisci le segnalazioni dei cittadini
          </p>
          <button className={styles.button}>
            Gestisci (Coming Soon)
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>📰</div>
          <h3>Notizie</h3>
          <p className={styles.cardDescription}>
            Pubblica notizie e comunicazioni
          </p>
          <button className={styles.button}>
            Gestisci (Coming Soon)
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🎉</div>
          <h3>Eventi</h3>
          <p className={styles.cardDescription}>
            Crea e gestisci eventi
          </p>
          <button className={styles.button}>
            Gestisci (Coming Soon)
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🍕</div>
          <h3>Ristoranti</h3>
          <p className={styles.cardDescription}>
            Gestisci ristoranti e recensioni
          </p>
          <button className={styles.button}>
            Gestisci (Coming Soon)
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>👥</div>
          <h3>Utenti</h3>
          <p className={styles.cardDescription}>
            Gestisci utenti e permessi
          </p>
          <button className={styles.button}>
            Gestisci (Coming Soon)
          </button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>📊</div>
          <h3>Statistiche</h3>
          <p className={styles.cardDescription}>
            Visualizza statistiche app
          </p>
          <button className={styles.button}>
            Visualizza (Coming Soon)
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <button onClick={() => navigate('/')} className={styles.backButton}>
          🏠 Torna alla Home
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
