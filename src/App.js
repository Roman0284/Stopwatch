import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeOn) {
      interval = setInterval(() => {
        setTime(time => time + 1000)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timeOn]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Секундомер</h1>
        <div>
          <span>{("0" + Math.floor((time / 3600000))).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 60000))).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
        <div>
          {!timeOn ? <button onClick={() => setTimeOn(true)} className="App-btn">Start</button>
          :<button onClick={() => setTime(0)} className="App-btn">Stop</button>}
          <button onDoubleClick={() => setTimeOn(false)} className="App-btn">Wait</button>
          <button onClick={() => setTime(0)} className="App-btn">Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
