// NotFound - Pagina 404

import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Pagina Non Trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
      <Link to="/" className={styles.link}>
        Torna alla Home
      </Link>
    </div>
  );
};

export default NotFound;