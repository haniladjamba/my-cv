const Header = () => {
  return (
    <div>
      {/* ======= Mobile nav toggle button ======= */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none" />
      {/* ======= Header ======= */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="src/assets/img/dingin.jpg"
              alt
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Hanz</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="google-plus">
                <i className="bi bi-skype" />
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bi bi-house" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bi bi-person-circle" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bi bi-file-earmark-text" /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bi bi-boxes" /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bi bi-hdd-stack" /> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bi bi-envelope" /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
      {/* End Header */}
    </div>
  );
};

export default Header;
