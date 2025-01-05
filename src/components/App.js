
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [number, setNumber] = useState("");

  function handleChange(e) {
    let num = e.target.value;

    if(num.length === 1) {
      num = "(" + num;
    }

    if(num.length === 4) {
      num = num + ") ";
    }

    if(num.length === 9) {
      num = num + "-";
    }

    setNumber(num);
  }

  return (
    <div>
        <form>
          <input type="text" placeholder="(555) 555-5555" value={number} onChange={handleChange} />
          <button type="submit" disabled={number.length!==14}>Submit</button>
        </form>
    </div>
  )
}

export default App
