const Projects = () => {
  return (
    <section id="projects" className="p-10 h-screen bg-gray-100 flex flex-col justify-evenly">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Moviebooking Website</h3>
          <p className="text-gray-600">The BookMyShow Clone is a fully responsive, interactive web application built using ReactJS along with HTML, CSS, and JavaScript, designed to replicate the core functionality and user experience of the original BookMyShow platform. 
            This project uses API to fetch dynamic data for movies, including posters, descriptions, genres, ratings, and showtimes from the database.</p>
          <p className="text-gray-600"><strong>Code Base Link:</strong>  <a href="https://github.com/Santhoshfebi/Bookmyshow_clone_web">github/booking_app</a></p>
          <p className="text-gray-600"><strong>Deployment Link:</strong> <a href="https://bookingapp-orcin.vercel.app/">Booking APP</a></p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Quizz App</h3>
          <p className="text-gray-600">The app features a homepage with Start selection, a question interface that displays one question at a time with multiple-choice answers,
             and a results summarizing the user’s score. Built with a focus on usability and responsiveness, the app supports features such as instant feedback, and optionally a timer for each question.
            The front end is developed using HTML, CSS, and JavaScript</p>
          <p className="text-gray-600"><strong>Code Base Link:</strong>  <a href="https://github.com/Santhoshfebi/Quizz" target="_blank">github/Quizz_app</a></p>
          <p className="text-gray-600"><strong>Deployment Link:</strong>  <a href="https://quizz-react-app-theta.vercel.app">Quizz APP</a></p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Login Page</h3>
          <p className="text-gray-600">The login page is a user interface that allows registered users to securely access their personal accounts within the system. It typically contains input fields for a username or email address and password,
            along with action buttons such as "Log In", "Forgot Password?", and optionally "Sign Up" for new users.Security measures like input validation, password masking, and error feedback</p>
          <p className="text-gray-600"><strong>Code Base Link:</strong>  <a href="https://github.com/Santhoshfebi/login_page" target="_blank">github/login_page</a></p>
          <p className="text-gray-600"><strong>Deployment Link:</strong>  <a href="https://login-page-iota-vert.vercel.app/">Login Page</a></p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Airbnb Clone Website</h3>
          <p className="text-gray-600">This project is a front-end clone of the Airbnb website, built using HTML and CSS to replicate the core visual layout and styling of the original platform. The website features a homepage with a navigation bar, a search bar, featured listings with images and property details, and a footer with relevant links. Each listing card displays key information like the property name, image, price per night, location, and rating.
             The design is responsive, ensuring optimal viewing on desktops, tablets, and mobile devices.</p>
          <p className="text-gray-600"><strong>Code Base Link:</strong>  <a href="https://github.com/Santhoshfebi/airbnb-clone" target="_blank">github/airbnb</a></p>
          <p className="text-gray-600"><strong>Deployment Link:</strong>  <a href="https://airbnb-clone-rho-six.vercel.app/">Airbnb</a></p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
