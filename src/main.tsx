import './assets/global.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Layout from './layout/Layout';
import pkg from '../package.json';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout appName={pkg.displayName} appVersion={pkg.version}>
      <App />
    </Layout>
  </StrictMode>,
)
