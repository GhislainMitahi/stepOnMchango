import Btn from './btn'
const Form = () => {
    return ( 
    <div> 
    
    <form>
    <h1>se connecter</h1>
    <p>
        <input type="text" placeholder="Name"/>
    </p> 
    <p>
        <input type="email" placeholder="Email" />
    </p>
    <p>
        <input type="password" placeholder="Password"/>
    </p>
    <p>
        <Btn/>
    </p>
    </form> 
    </div>
    )
}

export default Form