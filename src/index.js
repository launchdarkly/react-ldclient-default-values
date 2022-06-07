
import { createRoot } from 'react-dom/client';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import App from './App';
import './index.css';

(async () => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  
  const LDProvider = await asyncWithLDProvider({
    //comment out line 14 to force usage of default values
    //comment out line 15 for connected development
    //clientSideID: process.env.REACT_APP_LD_CLIENT_SIDE_ID, //connected development
    clientSideID: process.env.REACT_APP_BROKEN_LD_CLIENT_SIDE_ID, //local development
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