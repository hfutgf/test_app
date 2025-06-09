import NextTopLoader from 'nextjs-toploader';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import CommonProvider from './components/providers/CommonProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CommonProvider>
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
      </CommonProvider>
    </BrowserRouter>
  </StrictMode>
);
