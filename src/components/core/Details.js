import Btn from './btn';


var Details = ({nombre,eventHandleOut}) => {
  return (
    <div className="details" style={{height : nombre}}>
      <h1 className="titleDetail" > je suis le details de ce titre</h1>
      <div>
      <div className='contentText'>
        <div >
        <h1>Categorie 1</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta rem est nobis similique id esse modi distinctio iure placeat ducimus vero porro officiisBtprovident nam natus perferendis, dolore reprehenderit ratione.</div>
        <div>
        <h1>Categorie 2</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia praesentium enim, deleniti voluptate, distinctio hic est id ex temporibus architecto corrupti explicabo obcaecati soluta dicta nam tempore nisi voluptates ut!</div>
        <div>
        <h1>Categorie 3</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, exercitationem odit! Eius, voluptates odit. Ipsum nostrum hic est modi aliquam cumque aut quam rem praesentium autem, repellat reiciendis non porro!</div>
        <div>
        <h1>Categorie 4</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ullam sequi beatae suscipit sit facilis alias perspiciatis dignissimos blanditiis libero, consequatur impedit ipsam, debitis odit sed ea? Iste, itaque a!</div>
      </div>
      <div onMouseOver={eventHandleOut} className="detailBtn" style={{
        textAlign: "center"
        ,backgroundColor: "blue", 
        display:"flex"
        ,justifyContent:"center"
        ,alignItems: "flex-end",
        marginTop:"91px"
      }}><p><Btn value="close"/></p></div>
      </div>
    </div> 
  )
}

export default Details

// onMouseOut={eventHandleOut} onMouseOver={eventHandle}