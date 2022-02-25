import React from 'react'

const Footer = ({
  phone,
  email,
  ville,
  commune,
  quartier,
  rue,
  appartement,
  no,
}) => {
    return ( 
    <footer >
          <div className = 'footerContent' >
            <p > 
            <h1>contact us</h1>
                <ul>
                   <li>phone :{phone} </li>
                   <li>phone : {phone}</li>
                   <li>Email : {email}</li>
                   <li>Email : {email}</li>
                   <li>Email : {email}</li>
                </ul>
            </p> 
            <p> 
            <h1>location</h1>
            <ul>
                   <li>ville : {ville}</li>
                   <li>commune : {commune}</li>
                   <li>Quartier : {quartier}</li>
                   <li>Quartier : {quartier}</li>
                   <li>Reu  : {rue}<span>Appartement :{appartement} </span><span>no. : {no} </span></li>
                </ul>
                </p> 
          </div> 
          <div > copyRight </div>
         </footer>
    )
}

export default Footer