import React, { useState } from "react";


const data = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


const Dictionary = () => {
    const [result, setResult] = useState(true);

    const handleSearch = () => {
        const input = document.querySelector('input').value;
        const res = data.find(entry => entry.word.toLowerCase() === input.toLowerCase());
        setResult(res);
    };
  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input type="text" placeholder="Search for a word..." />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h4>Definition:</h4>
        <p>{result ? result.meaning : "Word not found in dictionary."}</p>
      </div>
    </div>
  );
}
export default Dictionary; 