import React from 'react';

const Navbar = () => {

  const pathname = window.location.pathname;

  const activeLink = (name) => {
   return pathname.includes(name) ? 'active' : ''
  }

  return (
    <>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href><i className="bi bi-telephone me-2" />+919876543210</a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href><i className="bi bi-envelope me-2" />abcd@example.com</a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-body px-2" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-body px-2" href>
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-body px-2" href>
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-body ps-2" href>
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2" />Doctor Smile Care</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href='/home' className={`nav-item nav-link ${activeLink('home')}`}>Home</a>
                <a href='/about' className={`nav-item nav-link ${activeLink('about')}`}>About</a>
                <a href='/service' className={`nav-item nav-link ${activeLink('service')}`}>Service</a>
                <a href='/pricing' className={`nav-item nav-link ${activeLink('pricing')}`}>Pricing</a>
                <div className="nav-item dropdown">
                  <a href className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu m-0">
                    <a href className="dropdown-item">Blog Grid</a>
                    <a href className="dropdown-item">Blog Detail</a>
                    <a href className="dropdown-item">The Team</a>
                    <a href className="dropdown-item">Testimonial</a>
                    <a href className="dropdown-item">Appointment</a>
                    <a href className="dropdown-item">Search</a>
                  </div>
                </div>
                <a href='/contact' className={`nav-item nav-link ${activeLink('contact')}`}>Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar;