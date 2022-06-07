
import { createRoot } from 'react-dom/client';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import App from './App';
import './index.css';

(async () => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  
  const LDProvider = await asyncWithLDProvider({
    //create .env.local file containing REACT_APP_LD_CLIENT_SIDE_ID=<your-client-side-id>
    
    //clientSideID: process.env.REACT_APP_LD_CLIENT_SIDE_ID, //working, comment out for local development
    clientSideID: process.env.REACT_APP_BROKEN_LD_CLIENT_SIDE_ID, //non-working, comment out for connected development
    reactOptions: {
      useCamelCaseFlagKeys: false
    },
    user: {
      key: 'cleon@launchdarkly.com'
    }
  });

  root.render(
    <LDProvider>
      <App />
    </LDProvider>);
})();