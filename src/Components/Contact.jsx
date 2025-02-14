import linkedin from "../assets/linkedin.png";
import github from "../assets/github.svg";

const Contact = () => {
    return (
      <section id="contact" className="p-10 bg-cyan-900 text-white text-center flex flex-col justify-center gap-5">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p>Email: santhoshrajr121@gmail</p>
        <p>LinkedIn: https://www.linkedin.com/in/santhosh-raj-28b8281aa/</p>
        <div className="btn flex justify-center gap-8">
            <button className="h-10 w-10  hover:bg-white"><img src={linkedin} alt="" /></button>
            <button className="h-10 w-10  hover:bg-white rounded-full"><img src={github} alt="" /></button>
          </div>
      </section>
    );
  };
  export default Contact;
