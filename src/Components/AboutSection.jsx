import React from 'react'

const AboutSection = () => {
  return (
    <div className='bg-teritiary mt-12 lg:p-16 lg:px-32 lg:flex'>
        <div className="img lg:w-1/2 h">
            <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_100000000000000000001o.jpg" alt="about us"
            className='w-full rounded-lg drop-shadow-lg shadow-md '  />
        </div>
        <div className="text lg:w-1/2 lg:pr-16 lg:ml-48 my-auto mt-4 lg:mt-0 px-4 lg:px-0">
            <h1 className='text-3xl text-primary text-left'>About Us</h1>
            <h1 className='text-5xl mt-2 font-semibold text-left text-primary'>Some more information about your business</h1>
            <h1 className='text-xl mt-8 text-primary text-left'>Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.</h1>

        </div>

    </div>
  )
}

export default AboutSection