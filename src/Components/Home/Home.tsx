import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobCategoryList, getJobList }  from "../../api-utils";

enum JOB_TYPE {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT'
}

interface ICategory {
  _id : number ;
  name : string ;
  vacancy : string ;
}

export interface IJob {
  _id: number,
  title: string,
  type: string,
  company: string,
  salary: number,
  applicationsReceived: number,
  status: string,
  location: string,
  contactPerson: string,
  jobDescription: string,
  skillsRequired: string[],
  applicationDeadline: string
}

function Home() {

  const [jobCategoryList, setJobCategoryList] = useState<ICategory[]>([]);
  const [jobList, setJobList] = useState<IJob[]>([]);

  const [fullTimeJobList, setFullTimeJobList] =  useState<IJob[]>([]);
  const [partTimeJobList, setPartTimeJobList] = useState<IJob[]>([]);

  const [employee, setEmployee] = useState<{name: string; salary: number}>({
      name: '',
      salary: 0,
    });

  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "/src/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }

  const populateCategoryList = () => {
    getJobCategoryList().then((res) => {
      let list = res.data.categoryList;
      setJobCategoryList(list);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const populateJobList = () => {
    getJobList().then((res) => {
      let list: IJob[] = res.data.jobList;
      let partTimeJobs = list.filter((job: IJob) => job.type == JOB_TYPE.PART_TIME);
      let fullTimeJobs = list.filter((job: IJob) => job.type == JOB_TYPE.FULL_TIME);

      setJobList(list);
      setPartTimeJobList(partTimeJobs);
      setFullTimeJobList(fullTimeJobs);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  

  useEffect(() => {
    populateCategoryList();
    populateJobList();
    loadScript();
  }, []);


  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
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
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(43, 57, 64, .5)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      Find The Best Startup Job That Fit You
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
      {/* <!-- Carousel End --> */}

      {/* Job  Category Start  */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Explore By Category
          </h1>
          <div className="row g-4">
            

              {jobCategoryList.map((category: ICategory, idx) => {
                return (
                  <div
                      className="col-lg-3 col-sm-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                    <Link key={idx} className="cat-item rounded p-4" to={""}>
                      <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                      <h6 className="mb-3">{category.name}</h6>
                      <p className="mb-0">{category.vacancy}</p>
                    </Link>
                  </div>
                )
              })}

              {/* <Link className="cat-item rounded p-4" to={""}>
                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                <h6 className="mb-3">Marketing</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link> */}
            {/* <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <Link className="cat-item rounded p-4" to={""}>
                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                <h6 className="mb-3">Customer Service</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link>
            </div> */}
            {/* <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <Link className="cat-item rounded p-4" to={""}>
                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h6 className="mb-3">Human Resource</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <Link className="cat-item rounded p-4" to={""}>
                <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                <h6 className="mb-3">Project Management</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <Link className="cat-item rounded p-4" to={""}>
                <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                <h6 className="mb-3">Business Development</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <Link className="cat-item rounded p-4" to={""}>
                <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                <h6 className="mb-3">Sales & Communication</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <Link className="cat-item rounded p-4" to={""}>
                <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                <h6 className="mb-3">Teaching & Education</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <Link className="cat-item rounded p-4" to="">
                <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                <h6 className="mb-3">Design & Creative</h6>
                <p className="mb-0">123 Vacancy</p>
              </Link>
            </div> */}
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
              <Link className="btn btn-primary py-3 px-5 mt-3" to={""}>
                Read More
              </Link>
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
                <Link
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  to={"#tab-1"}
                >
                  <h6 className="mt-n1 mb-0">Featured</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  to={"#tab-2"}
                >
                  <h6 className="mt-n1 mb-0">Full Time</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  to={"#tab-3"}
                >
                  <h6 className="mt-n1 mb-0">Part Time</h6>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                  {!jobList.length &&
                      <h3>No Jobs Found!</h3>
                  }
                  {jobList.map((job, idx) => {
                    return (
                      <div key={idx} className="job-item p-4 mb-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                              <img
                                className="flex-shrink-0 img-fluid border rounded"
                                src="/img/com-logo-1.jpg"
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                              />
                              <div className="text-start ps-4">
                                <h5 className="mb-3">{job.title}</h5>
                                <span className="text-truncate me-3">
                                  <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                  {job.location}
                                </span>
                                <span className="text-truncate me-3">
                                  <i className="far fa-clock text-primary me-2"></i>
                                  {job.type}
                                </span>
                                <span className="text-truncate me-0">
                                  <i className="far fa-money-bill-alt text-primary me-2"></i>
                                  {job.salary}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div className="d-flex mb-3">
                              <Link className="btn btn-light btn-square me-3" to={""}>
                                <i className="far fa-heart text-primary"></i>
                              </Link>
                              <Link className="btn btn-primary" to={`/JobDetail/${job._id}`}>
                                Apply Now
                              </Link>
                            </div>
                            <small className="text-truncate">
                              <i className="far fa-calendar-alt text-primary me-2"></i>
                              {job.applicationDeadline}
                            </small>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>

              <div id="tab-2" className="tab-pane fade show p-0">
                  {!fullTimeJobList.length &&
                    <h3>No Jobs Found!</h3>
                  }
                  {fullTimeJobList.map((job, idx) => {
                    return (
                      <div key={idx} className="job-item p-4 mb-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                              <img
                                className="flex-shrink-0 img-fluid border rounded"
                                src="/img/com-logo-1.jpg"
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                              />
                              <div className="text-start ps-4">
                                <h5 className="mb-3">{job.title}</h5>
                                <span className="text-truncate me-3">
                                  <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                  {job.location}
                                </span>
                                <span className="text-truncate me-3">
                                  <i className="far fa-clock text-primary me-2"></i>
                                  {job.type}
                                </span>
                                <span className="text-truncate me-0">
                                  <i className="far fa-money-bill-alt text-primary me-2"></i>
                                  {job.salary}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div className="d-flex mb-3">
                              <Link className="btn btn-light btn-square me-3" to={""}>
                                <i className="far fa-heart text-primary"></i>
                              </Link>
                              <Link className="btn btn-primary" to={`/JobDetail/${job._id}`}>
                                Apply Now
                              </Link>
                            </div>
                            <small className="text-truncate">
                              <i className="far fa-calendar-alt text-primary me-2"></i>
                              {job.applicationDeadline}
                            </small>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                {!partTimeJobList.length &&
                    <h3>No Jobs Found!</h3>
                }
                  {partTimeJobList.map((job, idx) => {
                    return (
                      <div key={idx} className="job-item p-4 mb-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                              <img
                                className="flex-shrink-0 img-fluid border rounded"
                                src="/img/com-logo-1.jpg"
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                              />
                              <div className="text-start ps-4">
                                <h5 className="mb-3">{job.title}</h5>
                                <span className="text-truncate me-3">
                                  <i className="fa fa-map-marker-alt text-primary me-2"></i>
                                  {job.location}
                                </span>
                                <span className="text-truncate me-3">
                                  <i className="far fa-clock text-primary me-2"></i>
                                  {job.type}
                                </span>
                                <span className="text-truncate me-0">
                                  <i className="far fa-money-bill-alt text-primary me-2"></i>
                                  {job.salary}
                                </span>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div className="d-flex mb-3">
                              <Link className="btn btn-light btn-square me-3" to={""}>
                                <i className="far fa-heart text-primary"></i>
                              </Link>
                              <Link className="btn btn-primary" to={`/JobDetail/${job._id}`}>
                                Apply Now
                              </Link>
                            </div>
                            <small className="text-truncate">
                              <i className="far fa-calendar-alt text-primary me-2"></i>
                              {job.applicationDeadline}
                            </small>
                          </div>
                        </div>
                      </div>
                    )
                  })}
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
