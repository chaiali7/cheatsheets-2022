import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Here is an app called Chatter.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made in React.
        </a>
      </header>

      <header className="title">
        What's the chatter these days?
      </header>

      <header className="button1">
        <button class="button1" role="button">Get Started!</button>
      </header>

      <header className="footer">
        An app to chatter with friends. No tweeting.
      </header>
    </div>
  );
}

export default App;
