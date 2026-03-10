export function Header() {
  return (
    <header className="carbon-fiber border-b border-carbon-light sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold font-exo2 tracking-wider">
          <span className="text-white">AUTO</span>
          <span className="text-red-700">ENGINE</span>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#"
                className="text-white hover:text-red-700 transition-colors duration-300 font-montserrat font-medium tracking-wide"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-700 transition-colors duration-300 font-montserrat font-medium tracking-wide"
              >
                Cars
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-700 transition-colors duration-300 font-montserrat font-medium tracking-wide"
              >
                Models
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-700 transition-colors duration-300 font-montserrat font-medium tracking-wide"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white border border-carbon-light rounded hover:bg-carbon-light transition-all duration-300">
            Login
          </button>
          <button className="race-red-gradient px-5 py-2 text-sm font-bold text-white rounded race-red-glow hover:shadow-red-glow-lg transition-all duration-300 font-montserrat tracking-wide uppercase">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
