import React from 'react'
import Textarea from './textarea'
import {MdSaveAlt,MdRefresh} from "react-icons/md"
import ArrowBack from './arrowBack'

function NoteLayout({cl,val,ph,handleChange,setNoteText,handleSaveClick}) {
  return (
    <React.Fragment>
   <ArrowBack size={'2em'}/>
    <div className="new">
        <Textarea handleChange={handleChange} value={val} placeHolder={ph}/>
        <div className="footer">
          <small className="remain">
          {cl - val.length} Remaining
          </small>
          <div className="btn">
            <button className="save" onClick={() => setNoteText(() => "")}>
              <MdRefresh size='.9em'/> Reset
            </button>
            <button className="save" onClick={handleSaveClick}>
              <MdSaveAlt size='.9em'/> Save
            </button>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default NoteLayout