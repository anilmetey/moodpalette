'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'tr');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      <div className="flex items-center gap-2">
        <span className="text-sm">{t('language')}:</span>
        <button
          onClick={() => changeLanguage('tr')}
          className={`text-lg ${language === 'tr' ? 'font-bold underline' : ''}`}
        >
          🇹🇷
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`text-lg ${language === 'en' ? 'font-bold underline' : ''}`}
        >
          🇬🇧
        </button>
      </div>
    </header>
  );
};

export default Header;