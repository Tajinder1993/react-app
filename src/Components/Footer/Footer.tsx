import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Company</h5>
              <Link className="btn btn-link text-white-50" to={""}>
                About Us
              </Link>
              <Link className="btn btn-link text-white-50" to={"/Contact"}>
                Contact Us
              </Link>
              <Link className="btn btn-link text-white-50" to={""}>
                Our Services
              </Link>
              <Link className="btn btn-link text-white-50" to={""}>
                Privacy Policy
              </Link>
              <Link className="btn btn-link text-white-50" to={""}>
                Terms & Condition
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link text-white-50" to={""}>
                About Us
              </Link>
              <Link className="btn btn-link text-white-50" to={"/Contact"}>
                Contact Us
              </Link>
              <Link className="btn btn-link text-white-50" to={""}>
                Our Services
              </Link>
              <Link className="btn btn-link text-white-50" to={""}>
                Privacy Policy
              </Link>
              <Link className="btn btn-link text-white-50" to={""}>
                Terms & Condition
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Location, City,
                Country
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" to={""}>
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn btn-outline-light btn-social" to={""}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-outline-light btn-social" to={""}>
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link className="btn btn-outline-light btn-social" to={""}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p> Write Down By Yourself</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  onClick={() => (window.location.href = "/SignUp")}
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link className="border-bottom" to={""}>
                  JObEntry
                </Link>
                , All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End  */}

      {/* Back to Top  */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
export default Footer;
