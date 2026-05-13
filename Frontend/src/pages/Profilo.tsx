// Profilo Page - Pagina profilo utente

import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logout } from '../redux/slices/authSlice';
import styles from './Profilo.module.css';

const Profilo = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) {
    return null;
  }

  const badgeClass = user.ruolo === 'admin' ? styles.badgeAdmin : styles.badgeCittadino;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            {user.nome.charAt(0)}{user.cognome.charAt(0)}
          </div>
          <h1>{user.nome} {user.cognome}</h1>
          <p className={styles.email}>{user.email}</p>
          <span className={`${styles.badge} ${badgeClass}`}>
            {user.ruolo === 'admin' ? '⚙️ Amministratore' : '👤 Cittadino'}
          </span>
        </div>

        <div className={styles.section}>
          <h2>📋 Informazioni Account</h2>
          
          <div className={styles.infoRow}>
            <span className={styles.label}>Nome:</span>
            <span className={styles.value}>{user.nome}</span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.label}>Cognome:</span>
            <span className={styles.value}>{user.cognome}</span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>{user.email}</span>
          </div>

          <div className={styles.infoRow}>
            <span className={styles.label}>Ruolo:</span>
            <span className={styles.value}>{user.ruolo}</span>
          </div>

          {user.telefono && (
            <div className={styles.infoRow}>
              <span className={styles.label}>Telefono:</span>
              <span className={styles.value}>{user.telefono}</span>
            </div>
          )}

          <div className={styles.infoRow}>
            <span className={styles.label}>Account creato:</span>
            <span className={styles.value}>
              {new Date(user.createdAt).toLocaleDateString('it-IT')}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={() => navigate('/')} className={styles.buttonSecondary}>
            🏠 Torna alla Home
          </button>
          <button onClick={handleLogout} className={styles.buttonDanger}>
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profilo;
