import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <nav>
        <Link
          to="/"
          className={`${styles.link} ${
            location.pathname === '/' ? styles.active : ''
          }`}
        >
          HOME
        </Link>
        <Link
          to="/like"
          className={`${styles.link} ${
            location.pathname === '/like' ? styles.active : ''
          }`}
        >
          <h2>LIKE</h2> {/* Sanani olib tashladik */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
