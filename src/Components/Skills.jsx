import React from 'react'
import htm from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import boot from '../assets/bootstrap.png'
import rea from '../assets/library.png'
import sql from '../assets/mysql.png'
import jav from '../assets/java.png'
import git from '../assets/social.png'


const Skills = () => {
  return ( 
    <section id='skills' className='h-screen p-10 flex flex-col justify-evenly gap-8'>
      <div className='flex justify-center'>
        <div className='border-4 w-24 text-center '>
            <h1>SKILLS</h1>
        </div>
      </div>

      
         <h1 className='text-2xl text-center'>
          Using Now :
         </h1>

         <div className=" flex justify-center">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-12  w-1/2 "> 
            <div className="flex flex-col gap-8"><img src={htm} alt="" className='h-15 w-15' /> <h1 className='ml-1'>HTML 5</h1></div>
            <div className="flex flex-col gap-8"><img src={css} alt="" className='h-15 w-15' /><h1 className='ml-4'>CSS</h1></div>
            <div className="flex flex-col gap-8"><img src={js} alt="" className='h-15 w-15' /><h1 className=''>JavaScript</h1></div>
            <div className="flex flex-col gap-8"><img src={rea} alt="" className='h-15 w-15' /><h1 className='ml-2'>ReactJS</h1></div>
            <div className="flex flex-col gap-8"><img src={sql} alt="" className='h-15 w-15' /><h1 className='ml-1'>MySQL</h1></div>
            <div className="flex flex-col gap-8"><img src={boot} alt="" className='h-15 w-15' /><h1 className=''>BootStrap</h1></div>
            <div className="flex flex-col gap-8"><img src={jav} alt="" className='h-15 w-15' /><h1 className='ml-4'>Java</h1></div>
            <div className="flex flex-col gap-8"><img src={git} alt="" className='h-15 w-15' /><h1 className='ml-4' >Git</h1></div>
         </div>

         </div>

      <h1 className='text-2xl text-center'>
          Learning :
         </h1>

         <div className=" flex justify-center">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-12  w-1/2 "> 
            <div className="flex flex-col gap-8"><img src={sql} alt="" className='h-15 w-15' /><h1 className='ml-1'>MySQL</h1></div>
            <div className="flex flex-col gap-8"><img src={boot} alt="" className='h-15 w-15' /><h1 className=''>AngularJS</h1></div>
            <div className="flex flex-col gap-8"><img src={jav} alt="" className='h-15 w-15' /><h1 className='ml-2'>NodeJS</h1></div>
            <div className="flex flex-col gap-8"><img src={git} alt="" className='h-15 w-15' /><h1 className='' >ExpressJS</h1></div>
         </div>

         </div>


    </section>
  )
}

export default Skills
