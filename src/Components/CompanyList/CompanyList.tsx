import { Link } from "react-router-dom";

function CompanyList() {
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
                <li className="breadcrumb-item">
                  <Link to={"/"}>Pages</Link>
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
        {/* Header End  */}

        {/* Category Start  */}
        <div className="container-xxl py-5">
          <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Top Companies Hiring Now
            </h1>
            <div className="row g-4 clist">
              <aside className="col-sm-3">
                <div className="card">
                  <article className="card-group-item">
                    <header className="card-header">
                      <h6 className="title">Category </h6>
                    </header>
                    <div className="filter-content">
                      <div className="card-body">
                        <form>
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Technology (20)
                            </span>
                          </label>
                          {/* form-check.//  */}
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Account & finance (10)
                            </span>
                          </label>
                          {/* form-check.//  */}
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Medical & nurse (40)
                            </span>
                          </label>
                          {/* form-check.// */}

                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Marketing & Sales (30)
                            </span>
                          </label>
                          {/* form-check.//  */}

                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Design Jobs (50)
                            </span>
                          </label>
                          {/* form-check.//  */}

                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Transportation (20)
                            </span>
                          </label>
                          {/* form-check.//  */}

                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Reception Jobs (10)
                            </span>
                          </label>
                          {/* form-check.//  */}

                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Architect Jobs (30)
                            </span>
                          </label>
                          {/* form-check.//  */}
                        </form>
                      </div>
                      {/* card-body.//  */}
                    </div>
                  </article>
                  {/* card-group-item.//  */}

                  <article className="card-group-item">
                    <header className="card-header">
                      <h6 className="title">Experience Level</h6>
                    </header>
                    <div className="filter-content">
                      <div className="card-body">
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadio"
                            value=""
                          />
                          <span className="form-check-label">
                            Entry level (20)
                          </span>
                        </label>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadio"
                            value=""
                          />
                          <span className="form-check-label">
                            Top-Level (40)
                          </span>
                        </label>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadio"
                            value=""
                          />
                          <span className="form-check-label">
                            Mid-Level (50)
                          </span>
                        </label>
                      </div>
                      {/* card-body.//  */}
                    </div>
                  </article>
                  {/* card-group-item.// */}

                  <article className="card-group-item">
                    <header className="card-header">
                      <h6 className="title">Salary Range </h6>
                    </header>
                    <div className="filter-content">
                      <div className="card-body">
                        <form>
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              $5k - $15k (20)
                            </span>
                          </label>
                          {/* form-check.//  */}
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              $25k - $35k (10)
                            </span>
                          </label>
                          {/* form-check.//  */}
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              $40k - $65k (40)
                            </span>
                          </label>
                          {/* form-check.//  */}

                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              $50k - $100k (30)
                            </span>
                          </label>
                          {/* form-check.//  */}
                        </form>
                      </div>
                      {/* card-body.//  */}
                    </div>
                  </article>
                  {/* card-group-item.//  */}

                  <article className="card-group-item">
                    <header className="card-header">
                      <h6 className="title">Date of Post </h6>
                    </header>
                    <div className="filter-content">
                      <div className="card-body">
                        <form>
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Today (100)
                            </span>
                          </label>
                          {/* form-check.//  */}
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Last week ago (200)
                            </span>
                          </label>
                          {/* form-check.//  */}
                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              Last month ago(400)
                            </span>
                          </label>
                          {/* form-check.//  */}

                          <label className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                            />
                            <span className="form-check-label">
                              3 Month ago (300)
                            </span>
                          </label>
                          {/* form-check.// */}
                        </form>
                      </div>
                      {/* card-body.//  */}
                    </div>
                  </article>
                  {/* card-group-item.//  */}
                </div>
                {/* card.// */}
              </aside>
              {/* col.//  */}

              <div className="col-sm-9">
                <div className="row clist">
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/hilton.gif" className="d-block m-auto" />
                      <h6 className="mb-3 text-center">Hilton Hotels</h6>
                      <p className="mb-0 text-center">20 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/zeta.gif" className="d-block m-auto" />
                      <h6 className="mb-3">Zeta Global</h6>
                      <p className="mb-0">13 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/kgk.gif" />
                      <h6 className="mb-3">KGK Group</h6>
                      <p className="mb-0">23 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/aspirent.gif" />
                      <h6 className="mb-3">Spirent Communications</h6>
                      <p className="mb-0">12 Vacancy</p>
                    </Link>
                  </div>

                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/hilton.gif" className="d-block m-auto" />
                      <h6 className="mb-3 text-center">Hilton Hotels</h6>
                      <p className="mb-0 text-center">13 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/zeta.gif" className="d-block m-auto" />
                      <h6 className="mb-3">Zeta Global</h6>
                      <p className="mb-0">12 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/kgk.gif" />
                      <h6 className="mb-3">KGK Group</h6>
                      <p className="mb-0">23 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/aspirent.gif" />
                      <h6 className="mb-3">Spirent Communications</h6>
                      <p className="mb-0">13 Vacancy</p>
                    </Link>
                  </div>

                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/hilton.gif" className="d-block m-auto" />
                      <h6 className="mb-3 text-center">Hilton Hotels</h6>
                      <p className="mb-0 text-center">12 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/zeta.gif" className="d-block m-auto" />
                      <h6 className="mb-3">Zeta Global</h6>
                      <p className="mb-0">23 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/kgk.gif" />
                      <h6 className="mb-3">KGK Group</h6>
                      <p className="mb-0">13 Vacancy</p>
                    </Link>
                  </div>
                  <div
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <Link
                      className="cat-item rounded p-4"
                      to={"/CompanyDetail"}
                    >
                      <img src="/img/aspirent.gif" />
                      <h6 className="mb-3">Spirent Communications</h6>
                      <p className="mb-0">12 Vacancy</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category End  */}
    </>
  );
}

export default CompanyList;
