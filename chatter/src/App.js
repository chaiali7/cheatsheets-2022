import logo from './logo.svg';
import "./App.css";
import TextInput from "./TextInput";
import "./TextInput.css";
import { useState } from "react";
import Message from "./Message";

/*function to make our react app*/ 
function App() {
  
  const [messages, setMessages] = useState([]);
  /*uses use state function to add messages to an array*/ 
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Aiza",
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);
  /*sends messages to make them appear*/ 
  return (
    <div className="App">
      <header className="header">
        <div className="logo"/>
        <span className="title">Chatter!</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
          return <Message {...msg} />;
        })}
      </div>
      <TextInput sendMessage={sendMessage} /> 
    </div>
  );
}

export default App;