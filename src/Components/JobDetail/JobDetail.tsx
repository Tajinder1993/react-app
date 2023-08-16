import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { IJob } from '../Home/Home';
import { getJobList } from '../../api-utils';


function JobDetail(props: any) {

  const { jobId } = useParams<any>();
  
  const [job, setJob] = useState<IJob>();

  const getCurrentJobDetails = () => {
    getJobList(jobId).then((res) => {
      let job: IJob = res.data.jobList[0];
      setJob(job);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getCurrentJobDetails();
  }, [])

  return (
    <>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Job Detail
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={"/JobList"}>Jobs List</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Job Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Job Detail Start  */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-5">
                <img
                  className="flex-shrink-0 img-fluid border rounded"
                  src="/img/com-logo-2.jpg"
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="text-start ps-4">
                  <h3 className="mb-3">{job?.title}</h3>
                  <span className="text-truncate me-3">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {job?.location}
                  </span>
                  <span className="text-truncate me-3">
                    <i className="far fa-clock text-primary me-2"></i>{job?.type}
                  </span>
                  <span className="text-truncate me-0">
                    <i className="far fa-money-bill-alt text-primary me-2"></i>
                    $ {job?.salary}
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <h4 className="mb-3">Company</h4>
                <p>
                  {" "}
                  {job?.company}
                </p>
                <h4 className="mb-3">Job description</h4>
                <p>
                  {" "}
                  {job?.jobDescription}
                </p>
                {/* <h4 className="mb-3">Responsibility</h4>
                <p>
                  {" "}
                  Rakuten Kobo Inc. is looking for a Gift Card Marketing Manager
                  to join our CRM team! The team is focused on customer
                  marketing strategies from retention to loyalty and gift cards
                  is an essential part of the overall strategy. The Gift Card
                  Marketing Manager will play an essential role in managing the
                  day to day operations and the growth of gift cards across
                  three verticals - Web store, 3rd party and B2B. Each vertical
                  requires a unique strategy and hence solid experience in
                  marketing as well as partner relationships is crucial to
                  success.
                </p> */}
                {/* <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    Building marketing plans and goals to achieve company
                    objectives for the Gift Card program, channel development,
                    branding, sales, and redemption strategies
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    Manage all 3rd party and direct eCommerce marketing
                    placement calendars tightly with a good understanding of
                    ROIs to optimize for best performing campaigns
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    Strong reporting skills to manage reporting and ongoing
                    analysis for sales, redemption, and breakage of Gift Cards
                    and presenting to Executive Leadership
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    Collaborating cross functionally with Creative, Operations,
                    Sales, Analytics , Product and other Marketing teams to
                    drive innovation to optimize existing campaigns and
                    processes while paving the way for further expansion via new
                    campaigns
                  </li>
                  <li>
                    <i className="fa fa-angle-right text-primary me-2"></i>
                    Evaluate gift card designs and make recommendations on
                    changes that are needed to attract new buyers of the product
                  </li>
                </ul> */}
                <h4 className="mb-3">Skillsets Required</h4>
                <p></p>
                <ul className="list-unstyled">
                  {job?.skillsRequired.map((skill, idx) => {
                    return (
                      <li key={idx}>
                        <i className="fa fa-angle-right text-primary me-2"></i>
                        {skill}
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Form For applying Job  */}
              <div className="">
                <h4 className="mb-4">How to apply?</h4>
                <p>Send your resume on below mentioned details:</p>
                <p><strong>Name:</strong> {job?.contactPerson}</p>
                <p><strong>Email:</strong> <span className='text-lowercase'>hr@{job?.company}.com</span></p>
                {/* <form>
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
                      <input type="file" className="form-control bg-white" />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Coverletter"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>

            {/* Job Summary  */}
            <div className="col-lg-4">
              <div
                className="bg-light rounded p-5 mb-4 wow slideInUp"
                data-wow-delay="0.1s"
              >
                <h4 className="mb-4">Job Summary</h4>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Published On: 01 Jan, 2023
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Applications Received: {job?.applicationsReceived}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Job Type: {job?.type}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Salary: {job?.salary}
                </p>
                <p>
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Location: {job?.location}
                </p>
                <p className="m-0">
                  <i className="fa fa-angle-right text-primary me-2"></i>
                  Last Date To Apply: {job?.applicationDeadline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Job Detail End  */}
    </>
  );
}

export default JobDetail;
