const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex h-auto min-h-14 flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Gabriel Uwaila
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.youtube.com/@ehis6k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline"
          >
            YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-uwaila-183780242"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline"
          >
            LinkedIn
          </a>
          <p className="text-sm text-muted-foreground">@ehis6k</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 