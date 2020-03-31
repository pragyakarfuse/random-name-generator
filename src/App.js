import React, { useState } from "react";

import "./App.css";
import { moods, foods } from '../src/constants';

const App = () => {
  const [generatedName, setGeneratedName] = useState(null);
  const rng = list => {
    return Math.floor(Math.random() * Math.floor(list.length));
  };

  const generateName = () => {
    const a = rng(moods);
    const b = rng(foods);
    const name = `${moods[a]} ${foods[b]}`;
    setGeneratedName(name);
  };

  return (
    <div className="landing-container">
      {generatedName === null ? (
        <span className="custom-button" onClick={() => generateName()}>
          {"Generate your name"}
        </span>
      ) : (
        <>
          <span className="landing-pre-text">Your random name is</span>
          <span className="landing-title">{generatedName}</span>
          <span className="custom-button" onClick={() => generateName()}>
            {"Generate another name"}
          </span>
        </>
      )}
    </div>
  );
};

export default App;
