import React,{useState} from 'react'
import ArrowBack from './arrowBack'
import Search from './note/search'
import Notes from './notes'
import {useParams,useNavigate} from 'react-router-dom'

function Query({notes,handleDelete}) {  
    let {query} = useParams()
    const  [queriedNotes,setQueriedNotes] = useState(notes.filter((note)=>note.text.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||note.date.includes(query)))
    let n = useNavigate()
 const queried = (e)=>{

    if(e !== ''){
        n(`/search-query/${e}`)
        setQueriedNotes('')
     
        let tempArr = notes.filter(note => note.text.toLocaleLowerCase().includes(e.toLocaleLowerCase()) ||note.date.includes(e))
       
        tempArr.length > 0 && setQueriedNotes(tempArr)
        
        
    }
 }
  return (
    <div>
        <ArrowBack size={'2rem'}/>
        <Search handleSearch={(e)=> queried(e)}/>
        <span className='res'>Result:</span>
        <div className='notes-list'>
             <Notes notes={queriedNotes} handleDelete={handleDelete}/>
        </div>
       
    </div>
  )
}

export default Query
