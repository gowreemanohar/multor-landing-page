import React from 'react'

const FeaturesCard = (props) => {
  return (
    <div>
        <div className="   drop-shadow-lg  bg-white rounded-3xl pb-4 lg:mx-4 lg:my-0 my-4">
            <img src={props.imagelink} alt='features' 
            className='w-full lg:h-64 rounded-3xl -4 '>
            </img>
            <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-footerblue dark:text-white '>{props.title} </h3>
            <p className='text-md  mt-4 lg:px-12'> 
           {props.text}</p>                    
        </div>
    </div>
  )
}

export default FeaturesCard