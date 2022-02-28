import React, { useState } from 'react';
import Details from './Details';

const Nav = ({
    logo,
    province,
    economy,
    social,
    vibes,
    search,
    count
}) => {


// state
  const [heights,setHeights] = useState(0);

// functions

  const eventHandle= ()=>{
      setHeights('44%')
  }
  const eventHandleOut=()=>{
      setHeights('0%')
  }
  return (
    
    <nav>
        <div className="logo">
            <p>{logo}</p>
        </div>
        <div className="menu">
            <p onMouseOver={eventHandle} >{province}</p>
            <p onMouseOver={eventHandle}>{economy}</p>
            <p onMouseOver={eventHandle} >{social}</p>
            <p onMouseOver={eventHandle} >{vibes}</p>
            <p onMouseOver={eventHandle} >{search}</p>
            <p onMouseOver={eventHandle} >{count}</p>
        </div>
        <Details nombre={heights} eventHandleOut={eventHandleOut}/>
    </nav>
    
  )
}

export default Nav