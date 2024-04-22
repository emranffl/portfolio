const navbar = () => {
  return (
    <>
      <nav className="px-2 pt-2 backdrop-blur-sm print:hidden">
        <div className="container grid grid-cols-2">
          <a className="navbar-brand" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/assets/logo-bg-transparent.png" alt="Emran Hossain" className="w-36" />
          </a>
          <div className="flex justify-end space-x-2 align-middle text-white">
            <a className="nav-item nav-link active font-weight-light my-auto" href="/">
              Home
            </a>
            <a className="nav-item nav-link active font-weight-light my-auto" href="#projects">
              Projects
            </a>
            <a className="nav-item nav-link active font-weight-light my-auto" href="#about">
              About
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default navbar
