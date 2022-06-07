import { useLDClient } from 'launchdarkly-react-client-sdk';
import './App.css';
import logo from './logo.svg';

function App() {
  const LDCLient = useLDClient();

  const nonExistentFlag = LDCLient.variation('nonExistentFlag', 'myDefaultValue');
  const knownFlag = LDCLient.variation('demoTheme', 'defaultValue');

  console.log(nonExistentFlag);
  console.log(knownFlag);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
