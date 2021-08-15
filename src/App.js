import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🍆": "brinjal",
  "🌽": "maize corn",
  "🥑": "avocado",
  "🥦": "broccoli",
  "🥒": "cucumber"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  function emojiClickHandler(emojis) {
    var mean = emojiDictionary[emojis];
    setMeaning(mean);
  }
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "We dont have that in  the database";
    }

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside Out </h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter the emoji here"
      ></input>
      <div> Meaning : {meaning} </div>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emojis) {
        return (
          <span
            onClick={() => emojiClickHandler(emojis)}
            style={{ fontSize: "2rem", padding: "2rem", cursor: "pointer" }}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}
