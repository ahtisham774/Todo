import React,{useState}  from 'react'
import NoteLayout from "../noteLayout";
import {useParams,useNavigate} from 'react-router-dom'
import PageNotFound from '../pageNotFound';

function Edit({notes,handleEditNote}) {
 let {id} = useParams()
 let navigate = useNavigate()  

 const [editNote,setEditNotes] = useState(notes.filter((note) => note.id == id)[0] && notes.filter((note) => note.id == id)[0].text)
 const charLimit = 300;
 
 const onEditChange = (e) =>{
    if (charLimit - e.target.value.length >= 0) {
        setEditNotes(e.target.value); 
 }
 }
 const onEditClick = (e) =>{
    if (editNote.trim().length > 0) {
        handleEditNote(editNote,id)
        setEditNotes("");
        navigate("/")
      }
 }
    return (
      <div className="main">
        {
            editNote ? <NoteLayout cl={charLimit}  val={editNote} ph={undefined} handleChange={onEditChange} handleSaveClick={onEditClick} setNoteText={setEditNotes}/> : <PageNotFound/>
        }
    </div>
  )
}

export default Edit