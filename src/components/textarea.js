import React from 'react'

function Textarea({handleChange,value,placeHolder}) {
  return (
    <textarea
    cols="10"
    rows="8"
    placeholder={ placeHolder}
    onChange={handleChange}
    value={value}
  ></textarea>
  )
}

export default Textarea