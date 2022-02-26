import logo from './logo.svg';
import './App.scss';
import styles from './color.module.scss';
import { StyledComponent } from './StyledComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.reactText}>
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
        <StyledComponent />
      </header>
    </div>
  );
}

export default App;
