import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signupNewUser } from "../../api-utils";

export interface IUser {
  firstName: string;
  lastName: string;
  email:string, 
  password: string, 
  confirmPassword: string
}

function SignUp() {

  const history = useHistory();
  
  const [user, setUser] = useState<IUser>({
    firstName: '',
    lastName:'' ,
    email: '', 
    password: '', 
    confirmPassword: ''
  })

  const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

  const [errors, setErrors] = useState<IUser>();

  const validateUser = (user: IUser) : boolean => {
    let errors: IUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    let hasError: boolean = false;

    if(user.firstName.trim().length == 0) {
      errors.firstName = 'First Name is required!';
      hasError = true;
    }

    if(user.lastName.trim().length == 0) {
      errors.lastName = 'Last Name is required!';
      hasError = true;
    }

    if(user.email.trim().length == 0) {
      errors.email = 'Email is required!';
      hasError = true;
    }

    if(user.password.trim().length == 0) {
      errors.password = 'Password is required!';
      hasError = true;
    }

    if(user.confirmPassword.trim().length == 0) {
      errors.confirmPassword = 'Confirm Password is required!';
      hasError = true;
    }
    else {
      if(user.confirmPassword != user.password){
        errors.confirmPassword = 'Passwords do not match!'
        hasError = true;
      }
    }

    if(hasError){
      setErrors(errors);
    }

    return hasError;
    

  }

  const signupUser = (e: any) => {
    e.preventDefault();
    console.log(user);
    
    const hasError =  validateUser(user);

    if(!hasError){
      signupNewUser(user).then((res: any) => {
        console.log(res);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        // history.push("/");
        window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
      })
    }
  }

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
            <form onSubmit={signupUser}>
              <div className="row g-3">
                <div className="col-md-8">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      placeholder="Your First Name"
                      value={user.firstName}
                      onChange={(e) => setUser({...user, firstName: e.target.value})}
                    />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  {errors?.firstName &&
                    <p className="text-danger">{errors?.firstName}</p>
                  }

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
                      value={user.lastName}
                      onChange={(e) => setUser({...user, lastName: e.target.value})}
                    />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                  {errors?.lastName &&
                    <p className="text-danger">{errors?.lastName}</p>
                  }
                  
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
                      value={user.email}
                      onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  {errors?.email &&
                    <p className="text-danger">{errors?.email}</p>
                  }
                  
                </div>
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
                      onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  {errors?.password &&
                    <p className="text-danger">{errors?.password}</p>
                  }
                  
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
                      value={user.confirmPassword}
                      onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                  {errors?.confirmPassword &&
                    <p className="text-danger">{errors?.confirmPassword}</p>
                  }
                  
                </div>
              </div>
              <br />

              <div className="row g-3">
                <div className="col-md-8">
                  <input
                    type="checkbox"
                    id="termsConditions"
                    value="termsConditions"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <label htmlFor="termsConditions">
                    {" "}
                     I agree with the terms and conditions
                  </label>
                  <br />
                  {!agreeTerms &&
                     <p className="text-danger">Please Agree to terms and conditions!</p>
                  }
                 
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
