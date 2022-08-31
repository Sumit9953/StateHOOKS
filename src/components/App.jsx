import React, { useState } from "react";

function App() {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  function gettime() {
    settime(new Date().toLocaleTimeString());
  }
  setInterval(gettime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={gettime}>Get Time</button>
    </div>
  );
}

export default App;
