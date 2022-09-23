import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😐": "Neutral Face",
  "🥺": "Pleading Face",
  "😀": "Grinning Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😅": "Grinning Face with Sweat",
  "😆": "Grinning Squinting Face",
  "😉": "Winking Face"
};
var emojisweknow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning =
        "We don't have this emoji in our database. We are working on that.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="container container-center">
        <h1>inside outt</h1>
        <input onChange={emojiInputHandler}></input>
        <h2>{meaning}</h2>
        <h3>Emojis we know</h3>
        {emojisweknow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "1.2rem",
                padding: "0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
