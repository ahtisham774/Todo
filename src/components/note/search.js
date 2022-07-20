import React from 'react'
import {MdSearch} from "react-icons/md"
function Search({handleSearch}) {
    return (
        <div className="search">
        {/*this is our search icon within our search bar and I have fixed it's size to 1.3em*/}
            <MdSearch className="search-icon" size="1.4em"/>
            
            {/*this is the input tag for our search and here , I have used some onClick events for searching*/}
            <input type="text" placeholder="Search for your notes..." onKeyDown={(event)=>event.key === 'Enter' && handleSearch(event.target.value) }/>
        </div>
    )
}

export default Search
