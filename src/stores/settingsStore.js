import { writable } from 'svelte/store';

const THEME_KEY = 'theme';
const DEFAULT_THEME = 'light';

const getStoredTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    }
    return DEFAULT_THEME;
};

const setStoredTheme = (value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(THEME_KEY, value);
    }
};

const applyThemeToDocument = (themeValue) => {
    if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(`${themeValue}-theme`);
    }
};

const initialTheme = getStoredTheme();
export const theme = writable(initialTheme);

theme.subscribe(value => {
    setStoredTheme(value);
    applyThemeToDocument(value);
});

export function initializeTheme() {
    const currentTheme = getStoredTheme();
    applyThemeToDocument(currentTheme);
}
