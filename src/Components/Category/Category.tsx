import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Category
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Home</Link>
                </li>

                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Category
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Category Start  */}
        <div className="container-xxl py-5">
          <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Explore By Category
            </h1>
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                  <h6 className="mb-3">Marketing</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                  <h6 className="mb-3">Customer Service</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                  <h6 className="mb-3">Human Resource</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                  <h6 className="mb-3">Project Management</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                  <h6 className="mb-3">Business Development</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                  <h6 className="mb-3">Sales & Communication</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                  <h6 className="mb-3">Teaching & Education</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <Link className="cat-item rounded p-4" to={"/JobList"}>
                  <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                  <h6 className="mb-3">Design & Creative</h6>
                  <p className="mb-0">123 Vacancy</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category End  */}
    </>
  );
}
export default Category;
