import NextTopLoader from 'nextjs-toploader';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextTopLoader
      color="#0054A2"
      initialPosition={0.0}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #0054A2, 0 0 5px #0054A2"
    />
    <App />
  </StrictMode>
);
