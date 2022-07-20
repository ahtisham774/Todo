import React from 'react'

import { Link} from 'react-router-dom'
import {MdDarkMode,MdLightMode} from "react-icons/md"
const Header = ({handleToggleDarkMode,mode}) => {
    
    return (
        <div className="header">
             {/*the heading of our notes app*/}
        <div>
        <Link to='/' style={{textDecoration:'none'}} ><h1><span style={{color:"#308d46"}}>Todo</span> Notes</h1></Link>
        
         
        </div>
        {
            mode ?  <MdLightMode className='mode' size='1.5em' style={{color:'#fafafa'}} onClick={()=>{handleToggleDarkMode((previousDarkMode)=>!previousDarkMode) }}/> :<MdDarkMode className='mode' size='1.5em' onClick={()=>{handleToggleDarkMode((previousDarkMode)=>!previousDarkMode) }}/>
        }
        
        </div>
    )
}

export default Header
