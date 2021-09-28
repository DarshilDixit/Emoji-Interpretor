import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😅": "Discomfort",
  "😑": "Annoyance",
  "😶": "Silence",
  "😮": "Surprised",
  "🙄": "Disapproval",
  "😊": "Smiling",
  "😯": "Embarassment",
  "😫": "Sadness",
  "🤤": "Attraction",
  "🥱": "Boredom",
  "❤": "Love",
  "😡": "Angry"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function getColor() {
    if (meaning === undefined) {
      return "red"; // NOT WORKING...NEED TO ASK..
    }
    return "#1E3A8A";
  }

  return (
    <div className="App">
      <h1>
        Know The Meaning Behind That
        <span style={{ color: "#1E3A8A" }}> Emoji!</span>
      </h1>
      <input onChange={inputChangeHandler} placeholder="Put an emoji here..." />
      <h2>
        Meaning: <span style={{ color: getColor() }}> {meaning} </span>{" "}
      </h2>
      <h3>
        {" "}
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}{" "}
            </span>
          );
        })}{" "}
      </h3>
    </div>
  );
}
