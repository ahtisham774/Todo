import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import {Link} from 'react-router-dom';

function ArrowBack({size}) {
  return (
    <Link className="back" to='/'  ><MdArrowBack  size={size}/></Link>
  )
}

export default ArrowBack