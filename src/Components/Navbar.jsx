const Navbar = () => {
    return (
      <nav className="bg-white text-white mt-2 p-4 flex justify-end">
        <ul className="flex space-x-16">
          <li><a href="#about" className="hover:text-white-400">About Me</a></li>
          <li><a href="#projects" className="hover:text-white-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-white-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-white-400  rounded-md">Contact</a></li>
        </ul>
      </nav>
    );
  };
  export default Navbar;
