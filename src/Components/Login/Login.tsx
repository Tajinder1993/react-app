import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            LOGIN
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
                <Link to={"/JobList"}>Job List</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Login
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Form Start */}

      <div className="container">
        <div className="col-md-6 mx-auto col-10 col-lg-6">
          <div className="wow fadeInUp" data-wow-delay="0.5s">
            <h3 className="col-md-6 mx-auto col-11 col-lg-7"> LOGIN </h3>
            <br />
            <form>
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
              </div>
              <br />
              <div className="row g-3">
                <div className="col-md-6 mx-auto col-11 col-lg-7">
                  <button className="btn btn-primary w-50 py-3" type="submit">
                    Login
                  </button>
                </div>
              </div>{" "}
              <br />
              <div className="row g-3">
                <div className="col-md-6 mx-auto col-6 col-lg-7">
                  new user ? <a href="signup.html">Signup</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End of Form  */}
    </>
  );
}

export default Login;
