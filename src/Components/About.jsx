import React from 'react'

const About = () => {
  return (
    <section id='about' className='h-screen flex flex-col justify-evenly'>
      <h1 className='flex justify-center text-5xl'>About Me</h1>
      <p className='text-center'>As a recent beginner in the world of web development, I am eager to take on new challenges and continuously improve my skills.<br></br> Whether it's creating a sleek front-end or building a robust back-end, 
             I’m excited to work on both sides of development to bring projects to life.<br></br> I’m always learning and looking forward to growing in this field.
           Inovative and skilled engineering graduate.
        Proficient in creating user interfaces,writing and testing codes,solving <br></br> problems and implementing new features based on user feedback.
        </p>
      <div className="des1 flex gap-30 justify-center">
        <section>
        <h1 className='text-center text-2xl'>DESIGN</h1>
        <p>Collabrate with you by designing a responsive and interactive website .</p>
        </section>
        <section>
        <h1 className='text-center text-2xl'>DEVELOPMENT</h1>
        <p>Developing a responsive and interactive website that engage users to use webiste seamlessly.</p>
        </section>
        </div>
    </section>
  )
}

export default About
