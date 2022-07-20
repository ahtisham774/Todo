import React from 'react'
import Search from './search'

import Notes from '../notes'
const NotesList=({notes,handleDelete,handleSearch}) =>{
   
    return (
        <div>
             <Search handleSearch={handleSearch}/>
             <div className="notes-list">
                    <Notes notes={notes}  handleDelete={handleDelete}/> 
                     
            </div>
        </div>

    )
}

export default NotesList
