import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@gravity-ui/uikit';
import { configure } from '@gravity-ui/uikit';
configure({
  lang: 'ru',

});
import './index.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme="light">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
