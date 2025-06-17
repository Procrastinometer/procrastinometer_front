import { mount } from 'svelte';
import App from './App.svelte';
import './styles.css';
import { initializeTheme } from './stores/settingsStore.js';

initializeTheme();

const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;