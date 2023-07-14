function Home() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* Carousel Start  */}
        <div className="container-fluid p-0">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/img/carousel-1.jpg" alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(43, 57, 64, .5)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                      <h1 className="display-3 text-white animated slideInDown mb-4">
                        Find The Perfect Job That You Deserved
                      </h1>

                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >
                        Search A Job
                      </a>
                      <a
                        href=""
                        className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                      >
                        Find A Talent
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End  */}

        {/* Job  Category Start  */}
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
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                  <h6 className="mb-3">Marketing</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                  <h6 className="mb-3">Customer Service</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                  <h6 className="mb-3">Human Resource</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                  <h6 className="mb-3">Project Management</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                  <h6 className="mb-3">Business Development</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                  <h6 className="mb-3">Sales & Communication</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                  <h6 className="mb-3">Teaching & Education</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <a className="cat-item rounded p-4" href="">
                  <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                  <h6 className="mb-3">Design & Creative</h6>
                  <p className="mb-0">123 Vacancy</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Category End  */}

        {/* About Start  */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="row g-0 about-bg rounded overflow-hidden">
                  <div className="col-6 text-start">
                    <img className="img-fluid w-100" src="/img/about-1.jpg" />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid"
                      src="/img/about-2.jpg"
                      style={{ width: "85%", marginTop: "15%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid"
                      src="/img/about-3.jpg"
                      style={{ width: "85%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid w-100" src="/img/about-4.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4">
                  We Help To Get The Best Job And Find A Talent
                </h1>
                <p className="mb-4"></p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i> Add Content
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i>Add Content
                </p>
                <p>
                  <i className="fa fa-check text-primary me-3"></i> Add Content
                </p>
                <a className="btn btn-primary py-3 px-5 mt-3" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* About End  */}

        {/* Jobs Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Job Listing
            </h1>
            <div
              className="tab-class text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                    data-bs-toggle="pill"
                    href="#tab-1"
                  >
                    <h6 className="mt-n1 mb-0">Featured</h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 pb-3"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    <h6 className="mt-n1 mb-0">Full Time</h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    <h6 className="mt-n1 mb-0">Part Time</h6>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Jobs
                  </a>
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Jobs
                  </a>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          src="img/com-logo-3.jpg"
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                          <a className="btn btn-light btn-square me-3" href="">
                            <i className="far fa-heart text-primary"></i>
                          </a>
                          <a className="btn btn-primary" href="">
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
                  <a className="btn btn-primary py-3 px-5" href="">
                    Browse More Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jobs End  */}
    </>
  );
}

export default Home;
