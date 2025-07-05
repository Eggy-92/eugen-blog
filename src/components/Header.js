import React from 'react';
import '../css/header.css';
// If using react-i18next:
import { useTranslation } from 'react-i18next';

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header-bg">
      <h1>Eugen Project Posts</h1>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => changeLanguage('ro')}>Română</button>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ru')}>Русский</button>
      </div>
    </header>
  );
}

export default Header;
