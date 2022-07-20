import React, { useState, } from "react";
import {useNavigate} from 'react-router-dom';
import NoteLayout from "../noteLayout";
function AddNote({ handleAddNote}) {
  let navigate = useNavigate();
  const [noteText, setNoteText] = useState("");
  const charLimit = 300;
  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
           setNoteText(event.target.value); 
    }
  };

  const handleSaveClick = (e) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      navigate("/")
    }
  };
  return (
    <div className="main">
      <NoteLayout cl={charLimit} val={noteText}  ph={"Type to add a new note..."} handleChange={handleChange} handleSaveClick={handleSaveClick} setNoteText={setNoteText}/>
    </div>
  );
}

export default AddNote;
