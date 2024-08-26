import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18.js';
import './index.css';

function injectGAScript() {
  // Crea e inserta el script de Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DV8V4S03Y2';
  document.head.appendChild(script);

  // Crea e inserta el script de configuración de Google Analytics
  const scriptConfig = document.createElement('script');
  scriptConfig.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DV8V4S03Y2');
  `;
  document.head.appendChild(scriptConfig);
}

function Index() {
  useEffect(() => {
    injectGAScript();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);



