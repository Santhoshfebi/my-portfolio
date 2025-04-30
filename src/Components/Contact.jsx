import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";

const Contact = () => {
    return (
      <section id="contact" className="p-10 bg-cyan-900 text-white text-center flex flex-col justify-center gap-5">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p>Email: santhoshrajr121@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/santhosh-raj-28b8281aa/</p>
        <div className="btn flex justify-center gap-8">
            <button className="h-10 w-10  hover:bg-white"><a href="https://www.linkedin.com/in/santhosh-raj-28b8281aa/" target="_blank"><img src={linkedin} alt="" /></a>
            </button> 
            <button className="h-10 w-10  hover:bg-white rounded-full"><a href="https://github.com/Santhoshfebi" target="_blank"><img src={github} alt="" /></a>
            </button>
       </div>
        
      </section>
    );
  };
  export default Contact;
