import Btn from './core/btn'
const Bank = ({title,text, img}) => {
  return (
    <div className="bank">
      <h1>Bank de données</h1>
      <div className="menuList">
      <span>Quater 1</span>
      <span>Quater 2</span>
      <span>Quater 3</span>
      <span>Quater 4</span>
      <span>Quater 5</span>
      <span>Quater 6</span>
      <span>Quater 7</span>
      <span>Quater 8</span>
      </div>
      <div className="content">
           <div className="theText">
           <h1> {title} </h1> 
           <p className = 'texts'>{text}</p>
             </div>
          <div className="data"><img src={img} alt=""/></div>
      </div>
      <div className="slidText">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, dignissimos.</p>
        <p>BUTTON</p>
      </div>
      <div className="morBtn"><Btn/></div>
   </div>
     )
   }

export default Bank;