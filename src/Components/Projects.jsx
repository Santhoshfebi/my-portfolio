const Projects = () => {
    return (
      <section id="projects" className="p-10 h-screen bg-gray-100 flex flex-col justify-evenly">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Bookmyshow Clone Website</h3>
            <p className="text-gray-600">A cloned website with basic user interactions using HTML,CSS,JavaScript,ReactJS and MySQL.</p>
            <p className="text-gray-600"><strong>Code Base Link:</strong>  <a href="https://github.com/Santhoshfebi/moviebooking">github/booking_app</a></p>
            <p className="text-gray-600"><strong>Deployment Link:</strong> <a href="https://moviebooking-git-master-santhoshs-projects-40d568cb.vercel.app/">Booking APP</a></p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Quizz App</h3>
            <p className="text-gray-600">A simple Quizz App where you can attend the quizz. we have features like scoreboard,  correct answers and worng answers.</p>
            <p className="text-gray-600"><strong>Code Base Link:</strong>  <a href="https://github.com/Santhoshfebi/Quizz" target="_blank">github/Quizz_app</a></p>
            <p className="text-gray-600"><strong>Deployment Link:</strong>  <a href="https://quizz-react-app-theta.vercel.app">Quizz APP</a></p>
          </div>
          {/* <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">simple Quizz App</h3>
            <p className="text-gray-600">Description of Project 2.</p>
          </div> */}
        </div>
      </section>
    );
  };
  export default Projects;
  