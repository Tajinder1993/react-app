import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Header() {

  const history = useHistory();

  const getLoggedInUser = () => {
    let user: any;
    if(localStorage.getItem('loggedInUser')) {
      user = localStorage.getItem('loggedInUser');
      user = JSON.parse(user);
    }

    if(user) {
      setLoggedInUser(user);
    }
  }

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {

    getLoggedInUser();

  }, [])

  const logout  = () => {
    if(loggedInUser) {
      localStorage.removeItem('loggedInUser');
      history.push('/Login');
    }
  }


  return (
    <>
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
        <Link
          to={"/"}
          className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <h1 className="m-0 text-primary">JobEntry</h1>
        </Link>
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
            <Link to={"/"} className="nav-item nav-link active">
              Home
            </Link>

            <Link to={"/JobList"} className="nav-item nav-link">
              Find Jobs
            </Link>

            <Link to={"/CompanyList"} className="nav-item nav-link active">
              Employers
            </Link>

            <Link to={"/Contact"} className="nav-item nav-link">
              Contact
            </Link>

            {!loggedInUser &&
            
            <>
              <Link to={"/Login"} className="nav-item nav-link">
                Login
              </Link>

              <Link to={"/SignUp"} className="nav-item nav-link">
                Sign Up
              </Link>
            </>

            }

            {loggedInUser &&
              <button onClick={logout} className="nav-item nav-link"> Logout </button>
            }

          

            
          </div>
        </div>
      </nav>
      {/* Navbar End  */}
    </>
  );
}
export default Header;
