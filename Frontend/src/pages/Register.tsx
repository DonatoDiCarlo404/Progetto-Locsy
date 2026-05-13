// Register Page - Form di registrazione

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { register } from '../redux/slices/authSlice';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: '',
    confermaPassword: '',
  });

  const [validationError, setValidationError] = useState('');

  // Se l'utente è già loggato, reindirizzo alla home
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setValidationError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione client-side
    if (formData.password.length < 8) {
      setValidationError('La password deve essere di almeno 8 caratteri');
      return;
    }

    if (formData.password !== formData.confermaPassword) {
      setValidationError('Le password non coincidono');
      return;
    }

    try {
      const { confermaPassword, ...registerData } = formData;
      await dispatch(register(registerData)).unwrap();
      navigate('/');
    } catch (err) {
      // L'errore è già gestito dal Redux slice
      console.error('Registration failed:', err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>📝 Registrazione</h1>
        <p className={styles.subtitle}>
          Crea il tuo account comunale
        </p>

        {(error || validationError) && (
          <div className={styles.error}>
            ❌ {validationError || error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Mario"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Cognome</label>
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Rossi"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="mario.rossi@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
              className={styles.input}
              placeholder="Min 8 caratteri"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Conferma Password</label>
            <input
              type="password"
              name="confermaPassword"
              value={formData.confermaPassword}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Ripeti password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.button}
          >
            {isLoading ? 'Registrazione in corso...' : 'Registrati'}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Hai già un account?{' '}
            <Link to="/login" className={styles.link}>
              Accedi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
