'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationTR from '../locales/tr/translation.json';

const resources = {
  en: { translation: translationEN },
  tr: { translation: translationTR },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'tr',
      fallbackLng: 'tr',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;