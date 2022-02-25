import React from 'react'

const Services = ({
    logo1,
    logo2,
    logo3,
    logo4,
    text1,
    text2,
    text3,
    text4
}) => {
  return (
    
    <>
    <h1>Services</h1>
    <div className="service">
        <p className="paragra1">
            <img src={logo1} alt="" />
            <span>{text1}</span>
        </p>
        <p className="paragra2">
            <img src={logo2} alt="" />
            <span>{text2}</span>
        </p>
        <p className="paragra3">
            <img src={logo3} alt="" />
            <span>{text3}</span>
        </p>
        <p className="paragra4">
            <img src={logo4} alt="" />
            <span>{text4}</span>
        </p>
    </div>
    </>
  )
}

export default Services