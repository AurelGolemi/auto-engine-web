export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">Auto Engine</h1>
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-100">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-100">Cars</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-100">Pricing</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-gray-100">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <button className="rounded bg-gray-200 px-3 py-1 text-sm text-gray-900">Login</button>
        <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white">Sign Up</button>
      </div>
    </header>
  )
}