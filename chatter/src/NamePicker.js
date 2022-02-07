import "./NamePicker.css";
import { useState } from "react";
import React from "react";
import {FiEdit, FiCheckCircle} from 'react-icons/fi';

// creates a function name picker that allows users to edit and assign a name
function NamePicker() {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState(''); 

  function TypeName(){
    if(!name.length==0) {
      setEditName(false);
      setName(name);
    }
  }
  function ChangeName(){
    setEditName(true);
    setName("");
  }
/*if we want to edit the name and submit it, we will se the edit button*/
  if(editName) {
    return (
      <header className="header">
        <input
          className="text-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className = "editor" onClick={TypeName}>
          <FiCheckCircle/>
        </button>
      </header>
    );
    /*if we want to edit the name we see the editor button*/
  } else {
    return (
      <header className = "header">
        {"Current User: "}
        {name}
        <button className = "editor" onClick={ChangeName}>
          <FiEdit/>
        </button>
      </header>    
    );
  }
  
}


export default NamePicker;