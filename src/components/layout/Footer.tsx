const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="container flex h-auto min-h-14 flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-center text-sm text-gray-400 md:text-left">
          &copy; {new Date().getFullYear()} Gabriel Uwaila
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.youtube.com/@ehis6k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-uwaila-183780242"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <p className="text-sm text-gray-500">@ehis6k</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 