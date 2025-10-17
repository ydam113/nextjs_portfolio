export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="font-bold text-xl">
          MyPortfolio
        </a>
        <div className="space-x-6">
          <a href="#about" className="text-gray-600 hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
