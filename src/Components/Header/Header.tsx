import React from "react";
function Header() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* Spinner Start  */}
        {/* <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* Spinner End  */}

        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
          <a
            href="index.html"
            className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
          >
            <h1 className="m-0 text-primary">JobEntry</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>

              <a href="job-list.html" className="nav-item nav-link">
                Find Jobs
              </a>

              <a href="company-list.html" className="nav-item nav-link active">
                Employers
              </a>

              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>

              <a href="login.html" className="nav-item nav-link">
                Login
              </a>

              <a href="signup.html" className="nav-item nav-link">
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End  */}
    </>
  );
}
export default Header;
