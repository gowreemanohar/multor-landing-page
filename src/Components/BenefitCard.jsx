import React from 'react'

const BenefitCard = (props) => {
  return (
    <div className=' bg-white z-1 drop-shadow-lg shadow-sm p-4 lg:mx-16 flex shadow-black lg:p-8 rounded-2xl mt-4 '>
      <img src={props.imagelink} alt="health icon"></img>
      <div className="textBLock lg:mx-12 mx-4 ">
        <h2 className='text-3xl font-semibold'> {props.title}</h2>
        <h3 className='text-lg text-justify mt-4'>{props.text}</h3>
      </div>
    </div>
  )
}

export default BenefitCard