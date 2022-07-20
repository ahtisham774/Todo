import React, { useState,useEffect } from 'react'
import NotesList from './components/note/view'
import Header from './components/header';
import AddNote from './components/note/create';
import Edit from './components/note/edit';
import {useNavigate,Routes,Route} from 'react-router-dom'
import PageNotFound from './components/pageNotFound';
import Query from './components/query';

function App() {

   let navigate = useNavigate()
  const [notes,setNotes] = useState([
    {
    id: 1,
    text:"This is my first note",
    date:"03/11/2021",
    isEdit: false

  },
  {
    id: 2,
    text:"This is my second note",
    date:"03/11/2021",
    isEdit: false
  },
  {
    id: 3,
    text:"This is my third note",
    date:"03/11/2021",
    isEdit: false
  },
 
]);


const [darkMode,setDarkMode] = useState(false);
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
  if(savedNotes){
    setNotes(savedNotes)
  }
},[])

useEffect(()=>{
  localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])

const addNote = (text) =>{
  
  const date = new Date();
  const newNote = {
    id:notes.length+1,
    text : text,
    date : date.toLocaleDateString(),
    isEdit: false
  }
  const newNotes = [...notes,newNote]
  setNotes(newNotes)
}
const editNote = (text,id) =>{
   console.log(text,id)
    const date = new Date();
    const editNotes = notes.map(note => {
        
        if(note.id == id){
            
            
            return {...note,text:text,date: date.toLocaleDateString(),isEdit: true}
        } 
        return note
    })
    setNotes(editNotes)
    
  }
  
const deletingNote = (id) =>{
 const newNotes = notes.filter((note)=> note.id!==id);
 setNotes(newNotes)
}
const onSearch = (text) => {
  
    if(text !== ''){
        navigate(`/search-query/${text}`)
    }
    
}
  return ( 
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}  mode={darkMode} />      
      <Routes> 
        
        <Route exact path='/' element={<NotesList handleSearch={(e)=> onSearch(e)} notes={notes}   handleDelete={deletingNote}/>}/>
 
        <Route exact path='/note/create' element={<AddNote  handleAddNote={addNote}/>}></Route>
        <Route exact path='/note/edit/:id' element={<Edit   notes={notes} handleEditNote={editNote}/>}/>
        <Route exact path='/search-query/:query' element={<Query  notes={notes}  handleDelete={deletingNote} /> }/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>    
      
    </div>
    </div>


  )
}

export default App
