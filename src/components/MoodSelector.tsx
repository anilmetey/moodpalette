'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const moods = [
  { id: 'happy', emoji: '😄', color: 'bg-yellow-300' },
  { id: 'sad', emoji: '😢', color: 'bg-blue-400' },
  { id: 'angry', emoji: '😠', color: 'bg-red-500' },
  { id: 'calm', emoji: '😌', color: 'bg-green-400' },
];

export default function MoodSelector() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) return;

    const mood = moods.find((m) => m.id === selected);
    html.className = ''; // önce tüm sınıfları temizle
    html.classList.add(mood?.color || 'bg-gray-900');
  }, [selected]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-6">
      <h2 className="text-2xl font-semibold">{selected ? t(selected) : t('title')}</h2>

      <div className="flex gap-4">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setSelected(mood.id)}
            className={`text-4xl transition-transform hover:scale-125 ${
              selected === mood.id ? 'scale-150' : ''
            }`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}