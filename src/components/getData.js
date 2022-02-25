import Form from './core/Form';
import Text from './core/Text';
import Data1 from './assets/img/data1.jpg';


const Input = (props) => {
  return (
    <div  className="input">
    <h1>Input Data</h1>
    <div className="getData">
        
        <div className='formWord'>
            <p className="getText"><Text/></p>
            <p className='getImg'><img src={Data1} alt=""/></p>
        </div>
       
          <Form/>

    </div>
    </div>
  )
}

export default Input