import React from 'react'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { ButtonBase,Button } from '@mui/material';
const HeroImage = () => {
  return (
    <div className=' bg-bgblue relative drop-shadow-md'>

    <div className="img relative">
    <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/abbcf2d7-multor-heroshot_100000000000000000001o.jpg"
      className='rounded-2xl w-full brightness-105 bg-gradient-to-br' alt="Hero"
    >
    </img>
    </div>
    
    <div className="absolute text top-0 left-0 ">
      <div className="logo lg:ml-24 m-4 lg:my-12">
      
      <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg"></img>
        
      </div>
      <div className="herotext lg:w-2/3 lg:ml-24">
    <h1 className='   font-bold lg:text-8xl text-2xl lg:mr-48   text-left text-primary'>
    Describe the value of booking an appointment </h1>

      </div>
    <h5 className='lg:text-xl text-sm lg:w-1/3 mt-16 lg:mx-24 hidden overflow:hidden lg:block xl:hidden text-justify text-primary'
    >
    No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.
    </h5>
    {/* <div className="button absolute left-24 mt-2">
      <button className='outline p-4 lg:text-xl text-sm mt-4 hover:scale-105 rounded-sm'>
        Book your Appointment
      </button>
    </div> */}
    {/* <Button variant="outlined" size="large" color="success" >Book your Appointment</Button>   */}
    </div>
    

    </div>
  )
}

export default HeroImage
