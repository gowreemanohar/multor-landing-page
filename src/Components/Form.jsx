import React from 'react'
import BasicSelect from './DropDown'

const Form = () => {
  return (
    <div className='form lg:mx-16 py-8 lg:px-16 px-4 h-full bg-white drop-shadow-xl shadow-black shadow-sm rounded-2xl'>
        <h1 className='text-4xl font-semibold'> Schedule an Appointment</h1>
        <h6 className='mt-4 text-center'>Here, let visitors know what will happen when they complete your form.</h6>
        <form onSubmit="" className='mt-4 flex flex-col justify-evenly'>
            <input label="firstName " placeholder='First Name*'
            className='bg-bgblue p-4 rounded-lg mt-4'
            ></input>
            <input label="firstName " placeholder='last Name*'
            className='bg-bgblue p-4 rounded-lg mt-4'
            ></input>
            <input label="firstName " placeholder='Email*'
            className='bg-bgblue p-4 rounded-lg mt-4'
            ></input>
            <input label="firstName " placeholder='Phone Number*'
            className='bg-bgblue p-4 rounded-lg mt-4'
            ></input>
            <div className="dropdown mt-4">
             <BasicSelect></BasicSelect>
             <button className='bg-primary text-white  outline p-4 w-full lg:text-2xl text-sm mt-8 hover:scale-105 rounded-sm'>
        Schedule Now
      </button>
            </div>
        </form>
    </div>
  )
}

export default Form