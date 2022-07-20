import React from 'react'
import Note from './note'
import {MdAddTask} from "react-icons/md"
import { Link } from 'react-router-dom'
function Notes({notes,handleDelete}) {
  return (
    <React.Fragment>
        
        { notes.length > 0 ?   notes.map((note)=>
                    <Note id={note.id} text={note.text} date={note.date}  key={note.id}
                        handleDelete={handleDelete} 
                    />
                 ) 
                 : <div className='todo'></div>
                }
       <Link className='add' to='/note/create' ><MdAddTask size='0.9em'/> Add Note</Link>
    </React.Fragment>
  )
}

export default Notes