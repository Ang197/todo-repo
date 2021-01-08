import logo from './logo.svg';
import React from 'react'

function day1content() {
  const [name, setName] = React.useState('');
  return (
    <div className="Day1">
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
          Learn 
        </a>
      <input
      placeholder = "Name please.."
      value = { name }
      onChange = {e => setName(e.target.value) }
      />

      {
        name && name === 'Angelo' ?
        <div> Angelo Lance Quetua </div> :
        <div> No one else </div>
      }
      </header>
    </div>
  );
}

export default day1content;
