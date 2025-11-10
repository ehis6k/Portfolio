const Footer = () => {
  return (
    <footer className="bg-section-dark border-t border-gray-800/30 dark:border-gray-800/30 light:border-gray-200/30">
      <div className="container flex h-auto min-h-14 flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-center text-sm text-theme-secondary md:text-left">
          &copy; {new Date().getFullYear()} Gabriel Uwaila
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://www.youtube.com/@ehis6k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-theme-primary hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-200"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-uwaila-183780242"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-theme-primary hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <p className="text-sm text-theme-muted">@ehis6k</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 