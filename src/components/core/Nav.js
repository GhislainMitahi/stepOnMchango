import React from 'react'

const Nav = ({logo,
    province,
    economy,
    social,
    vibes,
search,count}) => {
  return (
    <nav>
        <div className="logo">
            <p>{logo}</p>
        </div>
        <div className="menu">
            <p>{province}</p>
            <p>{economy}</p>
            <p>{social}</p>
            <p>{vibes}</p>
            <p>{search}</p>
            <p>{count}</p>
        </div>       
    </nav>
  )
}

export default Nav