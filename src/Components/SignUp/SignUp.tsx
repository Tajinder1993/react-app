import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            SIGN UP
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={"/Category"}>Job Category</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={"JobList"}>Job List</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Sign Up
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Form Start mb-4   col-md-4 col-lg-2 */}

      <div className="container">
        <div className="col-md-6 mx-auto col-10 col-lg-6">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <h3 className="col-md-6 mx-auto col-11 col-lg-7"> Sign up </h3>
            <br />
            <form>
              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      placeholder="Your First Name"
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                </div>
              </div>
              <br />

              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      placeholder="Your last Name"
                    />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>
              </div>
              <br />

              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
              </div>
              <br />

              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="password"
                      placeholder="Your password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
              <br />

              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm Your Password"
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                </div>
              </div>
              <br />

              <div className="row g-3">
                <div className="col-md-8">
                  <input
                    type="checkbox"
                    id="termsConditions"
                    value="termsConditions"
                  />
                  <label htmlFor="termsConditions">
                    {" "}
                    I agree with the terms and conditions
                  </label>
                  <br />
                </div>
              </div>
              <br />

              <div className="row g-3">
                <div className="col-md-6 mx-auto col-11 col-lg-7">
                  <button className="btn btn-primary w-50 py-3" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
