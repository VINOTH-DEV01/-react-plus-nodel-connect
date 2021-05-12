import logo from './logo.svg';
import './App.css';

import React, { useState,  useEffect }  from 'react';

function App() {
  const [ data, setData] = useState([]);
  useEffect(() => {
    fetch('/user').then((res) => {
      console.log(res);
        if(res.ok) {
          return res.json();
        }
    }).then(jsonres => setData(jsonres));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data.map((item, index) => {
          return (
            <p> {item[index]}</p>
          )
        })}
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
