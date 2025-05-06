'use client';

import { useTranslation } from "react-i18next";
import MoodSelector from "@/components/MoodSelector";

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-white text-center relative">

      {/* ✅ Sol üst köşe: AMY Projects */}
      <div className="fixed top-4 left-4 text-white text-sm sm:text-base font-semibold tracking-wide bg-black/30 px-3 py-1 rounded shadow-md backdrop-blur">
        AMY Projects 💻
      </div>

      {/* ✅ Sağ üst köşe: TR / EN dil seçici */}
      <div className="fixed top-4 right-4 flex gap-2 text-lg">
        <button onClick={() => changeLanguage('tr')} className="hover:opacity-100 opacity-70">🇹🇷</button>
        <button onClick={() => changeLanguage('en')} className="hover:opacity-100 opacity-70">🇬🇧</button>
      </div>

      <MoodSelector />

      <p className="mt-12 text-sm text-gray-300 max-w-md">
        {t("description")}
      </p>

      {/* ✅ Sağ alt: logo */}
      <img
        src="/amy-logo.jpg"
        alt="Anıl Mete Yıldız Logo"
        className="fixed bottom-4 right-4 w-16 sm:w-20 opacity-75 hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
      />

      {/* ✅ Alt orta: telif */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-80">
        © 2025 Tüm Hakları Anıl Mete Yıldız’a aittir.
      </div>
    </main>
  );
}