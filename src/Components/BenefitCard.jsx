import React from 'react'

const BenefitCard = (props) => {
  return (
    <div className=' bg-white drop-shadow-lg shadow-sm p-4 lg:mx-16 flex shadow-black lg:p-8 rounded-2xl mt-4 '>
      <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg" alt="health icon"></img>
      <div className="textBLock lg:mx-12 mx-4 ">
        <h2 className='text-3xl font-semibold'> Benefit 1</h2>
        <h3 className='text-lg text-justify mt-4'>Highlight the benefits of signing up for an appointment, online class, or video consultation.online class, or video consultation</h3>
      </div>
    </div>
  )
}

export default BenefitCard