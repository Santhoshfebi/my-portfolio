const Projects = () => {
    return (
      <section id="projects" className="p-10 h-screen bg-gray-100">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Bookmyshow Clone Website</h3>
            <p className="text-gray-600">A cloned website with basic user interactions using HTML,CSS,JavaScript,ReactJS and MySQL.</p>
            <p className="text-gray-600">LINK : <a href="www.booking-app-pink.vercel.app">booking-app-pink.vercel.app</a></p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">simple Quizz App</h3>
            <p className="text-gray-600">Description of Project 2.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">simple Quizz App</h3>
            <p className="text-gray-600">Description of Project 2.</p>
          </div>
        </div>
      </section>
    );
  };
  export default Projects;
  