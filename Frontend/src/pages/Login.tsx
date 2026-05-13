// Login Page - Form di accesso

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../redux/slices/authSlice';
import styles from './Login.module.css';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await dispatch(login(formData)).unwrap();
      navigate('/');
    } catch (err) {
      // L'errore è già gestito dal Redux slice
      console.error('Login failed:', err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>🔑 Login</h1>
        <p className={styles.subtitle}>
          Accedi al tuo account comunale
        </p>

        {error && (
          <div className={styles.error}>
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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
              className={styles.input}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={styles.button}
          >
            {isLoading ? 'Accesso in corso...' : 'Accedi'}
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Non hai un account?{' '}
            <Link to="/register" className={styles.link}>
              Registrati
            </Link>
          </p>
        </div>

        <div className={styles.testCredentials}>
          <p className={styles.testCredentialsText}>
            <strong>Test Login:</strong><br />
            Email: mario.rossi@test.com<br />
            Password: password123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
