'use client';

import '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const moods = [
  { emoji: '😄', label: 'happy' },
{ emoji: '😢', label: 'sad' },
{ emoji: '😠', label: 'angry' },
{ emoji: '😌', label: 'calm' },
{ emoji: '😍', label: 'loved' },
{ emoji: '😴', label: 'sleepy' },
{ emoji: '🤩', label: 'excited' },
{ emoji: '😎', label: 'confident' },
{ emoji: '😇', label: 'grateful' },
{ emoji: '😭', label: 'heartbroken' },
{ emoji: '😱', label: 'anxious' },
{ emoji: '😤', label: 'determined' },
{ emoji: '🥹', label: 'touched' },
{ emoji: '😅', label: 'nervous' },
{ emoji: '🥰', label: 'affectionate' },
{ emoji: '😕', label: 'confused' },
{ emoji: '😬', label: 'embarrassed' },
{ emoji: '🥳', label: 'celebrating' },
{ emoji: '😔', label: 'disappointed' },
{ emoji: '🤗', label: 'comforting' },
{ emoji: '🫠', label: 'defeated' },
{ emoji: '😐', label: 'indifferent' },
{ emoji: '😖', label: 'frustrated' },
{ emoji: '🫤', label: 'uncertain' },
{ emoji: '😷', label: 'unwell' },
{ emoji: '😮‍💨', label: 'relieved' },
{ emoji: '😵‍💫', label: 'overwhelmed' },
{ emoji: '🫣', label: 'shy' },
{ emoji: '🤯', label: 'mindblown' },
{ emoji: '😒', label: 'bored' },
];

export default function MoodSelector() {
  const { t, i18n } = useTranslation();
  const [selectedMood, setSelectedMood] = useState('');
  const [lang, setLang] = useState(i18n.language);

  // Dil değişince yeniden render zorlamak için:
  useEffect(() => {
    const handleLangChange = (lng: string) => setLang(lng);
    i18n.on('languageChanged', handleLangChange);
    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, [i18n]);

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-semibold">{t('Mod 🎯')}</h2>
      <div className="flex flex-wrap justify-center gap-4 text-4xl">
        {moods.map((mood) => (
          <button
            key={mood.label}
            aria-label={mood.label}
            onClick={() => setSelectedMood(mood.label)}
            className="hover:scale-155 transition-transform"
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="mt-19 text-lg font-medium">
          {t(selectedMood)}
        </div>
      )}
    </div>
  );
}