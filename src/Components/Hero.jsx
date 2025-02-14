import React from "react";
import TypingText from "./TypingText";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";
import Navbar from "../Components/Navbar";

const Hero = () => {
    return (
    
      <div className="flex flex-col h-screen ">
        <Navbar />
        <div className="lef h-full w-screen flex gap-10 flex-col items-center justify-center  text-black text-center">
            <TypingText text="Hi, I'm SANTHOSH RAJ R!" speed={100} />
             {/* <h1 className="text-4xl font-bold">Hi, I'm SANTHOSH RAJ R</h1> */}
           <p className="text-lg mt-2">A Freshmen skilled in ReactJS & Java </p>
        
           <div className="btn flex gap-8">
              <button className="h-10 w-10  hover:bg-white"><img src={linkedin} alt="" /></button>
              <button className="h-10 w-10  hover:bg-white rounded-full"><img src={github} alt="" /></button>
           </div>
        </div>
        
        <div className="flex justify-center md:h-40 bg-black">
          <p className=" md:text-center text-white ">Hi, I'm Santhosh, a passionate Full-Stack Developer. I'm specialize in building dynamic and responsive web applications using modern technologies like
             JavaScript, ReactJS and MySQL.</p>
        </div>
      </div>
    );
  };
  export default Hero;
  