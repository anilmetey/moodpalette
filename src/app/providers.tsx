'use client';

import React from 'react';
import '@/i18n/i18n'; // i18n sistemini globalde etkinleştir

export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}