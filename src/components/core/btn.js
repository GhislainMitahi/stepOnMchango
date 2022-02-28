
const Btn = ({backgroundColor,color,value}) => {
    return ( 
      <>
        <input style={btnStyle} type='submit' value={value}/>
      </>
    )
}

const btnStyle = {
    backgroundColor :"blue",
    color : 'white',
    width:'110px',
    margin: '0px auto',
    padding:'3px',
    letterSpacing:'1px',
    fontSize:'20px',
    border :'none',
    borderRadius :'10px',
    textAlign:'center',
    cursor:'pointer',
}
Btn.defaultProps = {
  value: 'button',
}

export default Btn