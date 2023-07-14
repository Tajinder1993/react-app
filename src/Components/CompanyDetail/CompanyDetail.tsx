function CompanyDetail() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Company Detail
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="company-list.html">Company List</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Company Detail
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Job Detail Start  */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row gy-5 gx-4">
              <div className="col-lg-12">
                <div className="d-flex align-items-center mb-5">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src="/img/hilton.gif"
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div className="text-start ps-4">
                    <h3 className="mb-3">Hilton Hotels</h3>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2"></i>
                      New York, USA
                    </span>
                  </div>
                </div>

                <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <h6 className="mt-n1 mb-0">Overview</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <h6 className="mt-n1 mb-0">Jobs</h6>
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="mb-5">
                      <h4 className="mb-3">About Hilton Hotels</h4>
                      <p>
                        Hilton is a leading global hospitality company with a
                        portfolio of 17 world-className brands comprising more
                        than 5,700 properties with nearly 923,000 rooms, in 113
                        countries and territories. Dedicated to fulfilling its
                        mission to be the world’s most hospitable company,
                        Hilton earned a spot on the 2018 world’s best workplaces
                        list, and has welcomed more than 3 billion guests in its
                        nearly 100 year history. Through the award-winning guest
                        loyalty program, Hilton Honors, more than 89 million
                        members who book directly with Hilton have access to
                        instant benefits, including digital check-in with room
                        selection, Digital Key, and Connected Room.
                      </p>
                      <h4 className="mb-3">More Information</h4>

                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          <b>Type</b>: Private
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          <b>Founded</b>: 1919 (104 yrs old)
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          <b>Company Size</b>: 100001+
                        </li>
                      </ul>
                      <h4 className="mb-3">Benefits reported by employees</h4>

                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Cafeteria
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Free Food
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Job Training
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Soft Skill Training
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Health Insurance
                        </li>

                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Free Transport
                        </li>

                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Gymnasium
                        </li>

                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Gymnasium
                        </li>

                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          International Relocation
                        </li>

                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Education Assistance
                        </li>

                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Work From Home
                        </li>

                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Child care
                        </li>
                      </ul>

                      <h4 className="mb-3">
                        Departments hiring at Hilton Hotels
                      </h4>

                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Food, Beverage & Hospitality
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Sales & Business Development
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Customer Success, Service & Operations
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Human Resources
                        </li>
                        <li>
                          <i className="fa fa-angle-right text-primary me-2"></i>
                          Administration & Facilities
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="job-item p-4 mb-4">
                      <div className="row g-4">
                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid border rounded"
                            src="/img/com-logo-1.jpg"
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                          <div className="text-start ps-4">
                            <h5 className="mb-3">Software Engineer</h5>
                            <span className="text-truncate me-3">
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              New York, USA
                            </span>
                            <span className="text-truncate me-3">
                              <i className="far fa-clock text-primary me-2"></i>
                              Full Time
                            </span>
                            <span className="text-truncate me-0">
                              <i className="far fa-money-bill-alt text-primary me-2"></i>
                              $123 - $456
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div className="d-flex mb-3">
                            <a
                              className="btn btn-light btn-square me-3"
                              href=""
                            >
                              <i className="far fa-heart text-primary"></i>
                            </a>
                            <a className="btn btn-primary" href="#apply">
                              Apply Now
                            </a>
                          </div>
                          <small className="text-truncate">
                            <i className="far fa-calendar-alt text-primary me-2"></i>
                            Date Line: 01 Jan, 2045
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="job-item p-4 mb-4">
                      <div className="row g-4">
                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid border rounded"
                            src="/img/com-logo-2.jpg"
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                          <div className="text-start ps-4">
                            <h5 className="mb-3">Marketing Manager</h5>
                            <span className="text-truncate me-3">
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              New York, USA
                            </span>
                            <span className="text-truncate me-3">
                              <i className="far fa-clock text-primary me-2"></i>
                              Full Time
                            </span>
                            <span className="text-truncate me-0">
                              <i className="far fa-money-bill-alt text-primary me-2"></i>
                              $123 - $456
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div className="d-flex mb-3">
                            <a
                              className="btn btn-light btn-square me-3"
                              href=""
                            >
                              <i className="far fa-heart text-primary"></i>
                            </a>
                            <a className="btn btn-primary" href="#apply">
                              Apply Now
                            </a>
                          </div>
                          <small className="text-truncate">
                            <i className="far fa-calendar-alt text-primary me-2"></i>
                            Date Line: 01 Jan, 2045
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="job-item p-4 mb-4">
                      <div className="row g-4">
                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid border rounded"
                            src="/img/com-logo-3.jpg"
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                          <div className="text-start ps-4">
                            <h5 className="mb-3">Product Designer</h5>
                            <span className="text-truncate me-3">
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              New York, USA
                            </span>
                            <span className="text-truncate me-3">
                              <i className="far fa-clock text-primary me-2"></i>
                              Full Time
                            </span>
                            <span className="text-truncate me-0">
                              <i className="far fa-money-bill-alt text-primary me-2"></i>
                              $123 - $456
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div className="d-flex mb-3">
                            <a
                              className="btn btn-light btn-square me-3"
                              href=""
                            >
                              <i className="far fa-heart text-primary"></i>
                            </a>
                            <a className="btn btn-primary" href="#apply">
                              Apply Now
                            </a>
                          </div>
                          <small className="text-truncate">
                            <i className="far fa-calendar-alt text-primary me-2"></i>
                            Date Line: 01 Jan, 2045
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="job-item p-4 mb-4">
                      <div className="row g-4">
                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid border rounded"
                            src="/img/com-logo-4.jpg"
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                          <div className="text-start ps-4">
                            <h5 className="mb-3">Creative Director</h5>
                            <span className="text-truncate me-3">
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              New York, USA
                            </span>
                            <span className="text-truncate me-3">
                              <i className="far fa-clock text-primary me-2"></i>
                              Full Time
                            </span>
                            <span className="text-truncate me-0">
                              <i className="far fa-money-bill-alt text-primary me-2"></i>
                              $123 - $456
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div className="d-flex mb-3">
                            <a
                              className="btn btn-light btn-square me-3"
                              href=""
                            >
                              <i className="far fa-heart text-primary"></i>
                            </a>
                            <a className="btn btn-primary" href="#apply">
                              Apply Now
                            </a>
                          </div>
                          <small className="text-truncate">
                            <i className="far fa-calendar-alt text-primary me-2"></i>
                            Date Line: 01 Jan, 2045
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="job-item p-4 mb-4">
                      <div className="row g-4">
                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid border rounded"
                            src="/img/com-logo-5.jpg"
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                          <div className="text-start ps-4">
                            <h5 className="mb-3">Wordpress Developer</h5>
                            <span className="text-truncate me-3">
                              <i className="fa fa-map-marker-alt text-primary me-2"></i>
                              New York, USA
                            </span>
                            <span className="text-truncate me-3">
                              <i className="far fa-clock text-primary me-2"></i>
                              Full Time
                            </span>
                            <span className="text-truncate me-0">
                              <i className="far fa-money-bill-alt text-primary me-2"></i>
                              $123 - $456
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div className="d-flex mb-3">
                            <a
                              className="btn btn-light btn-square me-3"
                              href=""
                            >
                              <i className="far fa-heart text-primary"></i>
                            </a>
                            <a className="btn btn-primary" href="#apply">
                              Apply Now
                            </a>
                          </div>
                          <small className="text-truncate">
                            <i className="far fa-calendar-alt text-primary me-2"></i>
                            Date Line: 01 Jan, 2045
                          </small>
                        </div>
                      </div>
                    </div>

                    <div id="apply">
                      <h4 className="mb-4">Apply For The Job</h4>
                      <form>
                        <div className="row g-3">
                          <div className="col-12 col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-12 col-sm-6">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-12 col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Portfolio Website"
                            />
                          </div>
                          <div className="col-12 col-sm-6">
                            <input
                              type="file"
                              className="form-control bg-white"
                            />
                          </div>
                          <div className="col-12">
                            <textarea
                              className="form-control"
                              rows={5}
                              placeholder="Coverletter"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Job Detail End */}
    </>
  );
}

export default CompanyDetail;
