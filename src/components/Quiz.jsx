import "./Quiz.css";
import data from "../data/data.js";
import { useState } from "react";
function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}. Which Device is required for the internet connection?
      </h2>
      <ul>
        <li>Modem</li>
        <li>Router</li>
        <li>LAN Cable</li>
        <li>PAN Drive</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
}

export default Quiz;
