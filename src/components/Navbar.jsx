function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent my-navbar sticky-top">
        <div className="container-lg">
          <a className="navbar-brand custom-brand" href="#home">
            <span className="brand-name">Portfolio</span>
            <span className="separator"> | </span>
            <span className="tag-wrapper">
              <span className="tag">&lt;</span>
              <span className="name">Ankush</span>
              <span className="slash"> / </span>
              <span className="surname">Verma</span>
              <span className="tag">&gt;</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
