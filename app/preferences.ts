import {useEffect, useState} from 'react';

export type Locale = 'en' | 'zh-Hant';
export type Theme = 'system' | 'dark' | 'light';
const storageKey = 'human-atlas.preferences.v1';

export function parsePreferences(value: string | null): {locale: Locale; theme: Theme} {
  try {
    const saved = JSON.parse(value ?? 'null');
    return {locale: saved?.locale === 'zh-Hant' ? 'zh-Hant' : 'en', theme: saved?.theme === 'dark' || saved?.theme === 'light' ? saved.theme : 'system'};
  } catch {
    return {locale: 'en', theme: 'system'};
  }
}

function readPreferences() {
  try { return parsePreferences(localStorage.getItem(storageKey)); }
  catch { return parsePreferences(null); }
}

function applyPreferences(locale: Locale, dark: boolean) {
  document.documentElement.lang = locale;
  document.title = locale === 'zh-Hant' ? '人體圖譜 | Human Atlas' : 'Human Atlas';
  document.documentElement.classList.toggle('dark', dark);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#141b22' : '#f3f4f4');
}

export function initializePreferences() {
  const {locale, theme} = readPreferences();
  applyPreferences(locale, theme === 'dark' || (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches));
}

export function usePreferences() {
  const [preferences, setPreferences] = useState(readPreferences);
  const [systemDark, setSystemDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches);
  const dark = preferences.theme === 'dark' || (preferences.theme === 'system' && systemDark);
  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const update = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    media.addEventListener('change', update);
    setSystemDark(media.matches);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    applyPreferences(preferences.locale, dark);
    try { localStorage.setItem(storageKey, JSON.stringify(preferences)); } catch { /* Storage can be unavailable in private browsing. */ }
  }, [preferences, dark]);
  return {...preferences, dark, setLocale: (locale: Locale) => setPreferences(p => ({...p, locale})), setTheme: (theme: Theme) => setPreferences(p => ({...p, theme}))};
}
