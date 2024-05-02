export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <p className="text-2xl font-bold text-gray-800">Logo</p>
      <div className="flex space-x-4">
        <a href="#home" className="text-gray-800">
          Home
        </a>
        <a href="#intro" className="text-gray-800">
          Intro
        </a>
        <a href="#about" className="text-gray-800">
          About
        </a>
        <a href="#skills" className="text-gray-800">
          Skills
        </a>
        <a href="#projects" className="text-gray-800">
          Projects
        </a>
        <a href="#contact" className="text-gray-800">
          Contact
        </a>
      </div>
    </nav>
  );
}
