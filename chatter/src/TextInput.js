import "./TextInput.css";
import { useState } from "react";

function TextInput(props) {
  const [text, setText] = useState("");

    /*creates a send function that takes in text */
  function send() {
    props.sendMessage(text);
    setText("");
  }
  /*if user presses enter key, message sends*/ 
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  /*returns the message when clicking on the send button in the footer*/ 
  return (
    <footer className="footer">
      <input
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}>
        ↑
      </button>
    </footer>
  );
}

export default TextInput;