import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
import Btn from './btn'
const Form = () => {
        // states
const [fullname, setFullName] = useState('')
const [email, setEmail]=useState("ghislainmitahi@getDefaultNormalizer.com")
const [password, setPassword]=useState('shgdhsgdhs')

// functions

const changeNameHandler = (e)=>{
    setFullName(e.target.value)
}
const changeEmailHandler = (e) =>{
    setEmail(e.target.value)
}
const changePasswordHandlerHandler = (e) =>{
    setPassword(e.target.value)
}

    return ( 

    <div> 
    
    <form>
    <h1>se connecter</h1>
    <p>
        <input type="text" placeholder="Name" value = { fullname } onChange={(e) => changeNameHandler(e)}/>
    </p> 
    <p>
        <input type="email" placeholder="Email" value={email} onChange = {(e)=>changeEmailHandler(e)}/>
    </p>
    <p>
        <input type="password" placeholder="Password" value={password} onChange = {(e)=>changePasswordHandlerHandler(e)}/>
    </p>
    <p>
        <Btn/>
    </p>
    </form> 
    </div>
    )
}

export default Form