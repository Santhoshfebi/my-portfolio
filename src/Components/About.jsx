import React from 'react'

const About = () => {
  return (
    <section id='about' className='h-screen flex flex-col justify-evenly'>
      <h1 className='flex justify-center text-5xl'>About Me</h1>
      <p className='text-center'>Inovative and skilled engineering graduate.
        Proficient in creating user interfaces,writing and testing codes,solving <br></br> problems and implementing new features based on user feedback.
        </p>
      <div className="des1 flex gap-30 justify-center">
        <section>
        <h1 className='text-center text-2xl'>DESIGN</h1>
        <p>I can do the website as your need</p>
        </section>
        <section>
        <h1 className='text-center text-2xl'>DEVELOPMENT</h1>
        <p>I can Design the website as your need and suggestion</p>
        </section>
        </div>
      <div className="flex justify-center">
      <section>
      <h1 className='text-center text-2xl'>MAINTAINANCE</h1>
      <p>I can design and maintain your site as per your need </p>
      </section>
      </div>
    </section>
  )
}

export default About
