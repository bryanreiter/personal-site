export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 fixed top-0 left-0 right-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#intro" className="text-white text-xl font-bold">
          Logo
        </a>
        <button className="md:hidden text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#about" className="text-white hover:text-violet-900 font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-violet-900 font-bold">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-violet-900 font-bold">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-violet-900 font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
