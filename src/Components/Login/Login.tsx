import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { logInUser } from "../../api-utils";

export interface ILoginUser {
  email:string, 
  password: string, 
}

function Login() {

  const history = useHistory();
  
  const [user, setUser] = useState<ILoginUser>({
    email: '', 
    password: '', 
  })

  const [errors, setErrors] = useState<ILoginUser>();
  const [apiError, setApiError] = useState<"">();

  const validateUser = (user: ILoginUser) : boolean => {

    let errors: ILoginUser = {
      email: '',
      password: ''
    };

    let hasError: boolean = false;

    if(user.email.trim().length == 0) {
      errors.email = 'Email is required!';
      hasError = true;
    }

    if(user.password.trim().length == 0) {
      errors.password = 'Password is required!';
      hasError = true;
    }

    if(hasError){
      setErrors(errors);
    }

    return hasError;
  }

  const loginUser = (e: any) => {
    e.preventDefault();
    console.log(user);
    
    const hasError =  validateUser(user);

    if(!hasError) {
      logInUser(user).then((res: any) => {
        console.log(res);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        // history.push("/");
        window.location.href = "/";
        setApiError("");
      })
      .catch((e) => {
        console.log(e);
        setApiError(e.response.data.error);
      })
    }
  }

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
            <form onSubmit={loginUser}>
              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      value={user.email}
                      onChange={(e) => setUser({...user, email: e.target.value}) }
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  {errors?.email &&
                    <p className="text-danger">{errors?.email}</p>
                  }
                </div>
                <br />

                <div className="row g-3">
                  <div className="col-md-8">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Your password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value}) }
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    {errors?.password &&
                    <p className="text-danger">{errors?.password}</p>
                  }
                  </div>
                </div>
              </div>
              {apiError &&
                <p className="text-danger">{apiError}</p>
              }
              
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
