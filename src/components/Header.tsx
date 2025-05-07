'use client';

import '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'tr');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem('language', lng);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setLanguage(savedLang);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-100 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Sol hizalama için justify-between ile birlikte text-left ve margin sıfırlama */}
        <h1 className="text-xl font-bold bg-gray-1700 px-3 py-1 rounded mr-auto text-left">
          {t('AMY Projects 💻') || 'AMY Projects 💻'}
        </h1>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm">{t('language')}:</span>
          <button
            onClick={() => changeLanguage('tr')}
            className={`text-lg ${
              language === 'tr' ? 'font-bold underline' : 'opacity-70 hover:opacity-100'
            }`}
          >
            🇹🇷
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`text-lg ${
              language === 'en' ? 'font-bold underline' : 'opacity-70 hover:opacity-100'
            }`}
          >
            🇬🇧
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;