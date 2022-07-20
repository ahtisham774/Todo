import React from 'react'
import {MdDeleteForever,MdEditNote} from 'react-icons/md'

import {Link} from 'react-router-dom'
function Note({id,text,date,handleDelete}) {
    return (
        <div className="note">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <span>{text}</span>
                <Link className='links' to={`/note/edit/${id}`}><MdEditNote size='1.3em' /></Link>
                </div>

                <div className="note-footer">
                    <small>{date}</small>
                    <MdDeleteForever onClick={()=>handleDelete(id)} className="delete-icon" size="1.3em" />
                </div>
        </div>

    )
}

export default Note
