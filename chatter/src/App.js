import logo from './logo.svg';
import "./App.css";
import TextInput from "./TextInput";
import "./TextInput.css";
import { useState } from "react";
import Message from "./Message";
import React from "react";
import Camera from 'react-snap-pic'
import "./NamePicker.css";
import NamePicker from "./NamePicker";

/*function to make our react app*/ 
function App(props) {
  
  // creates constant for show cameras
  const [showCamera, setShowCamera] = useState(false);
  function takePicture() {
    takePicture = (img) => {
      console.log(img)
      setShowCamera(false)
    }
  }

  // "setMessages" is a function that is used to update "messages"
  const [messages, setMessages] = useState([]);

  // "sendMessage" runs whenver we click the send button
  function sendMessage(text) {
    if (!text) return;
    //create a new message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: "Aiza",
    };
    // set the "messages" to be a new array
    // that contains the new message + all the old messages
    setMessages([newMessage, ...messages]);
  }

  // every time state changes, React "re-renders"
  // so this console.log will run again
  console.log(messages);

  // set the constants from name picker in the app
  const [editName, setEditName] = useState();
  const [name, setName] = useState('') 
  function NamePicker() {
    name: "Aiza";
  }

  // I don't know what to do in line 54 to get the name picker to actually show up :(
  // we return the HTML
  return (
    <div
      className="App"
    >
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
        <div className="namePicker"/> 
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
          // loop over every message in the "messages" array
          // and return a Message component
          // we are "spreading" all the items in "msg" into the props
          // "key" needs to be a unique value for each item
          return <Message {...msg} key={i} />;
        })}
      </div>
      <TextInput sendMessage={text=> props.onSend(text)} 
        showCamera={()=>setShowCamera(true)}/>
      <div>{showCamera && <Camera takePicture={takePicture} />}</div>
    </div>
  );
}


export default App;