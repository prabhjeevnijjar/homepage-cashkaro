const Cards = () => {
  return (
    <section className="card_section">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12 text-center text-white fs-50 mt-5 fw-400">
            Popular credit cards for every
            <br />
            dedicated category
          </div>
          <div className="col-12 mt-5">
            <nav>
              <div
                className="nav nav-tabs mb-3 border-0"
                id="nav-tab"
                role="tablist"
              >
                <div className="tb_out_btn">
                  <button
                    className="nav-link active"
                    id="nav-Featured-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Featured"
                    type="button"
                    role="tab"
                    aria-controls="nav-Featured"
                    aria-selected="true"
                  >
                    Featured
                  </button>
                </div>
                <div className="tb_out_btn">
                  <button
                    className="nav-link"
                    id="nav-Cashback-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Cashback"
                    type="button"
                    role="tab"
                    aria-controls="nav-Cashback"
                    aria-selected="false"
                  >
                    Cashback
                  </button>
                </div>
                <div className="tb_out_btn">
                  <button
                    className="nav-link"
                    id="nav-Rewards-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Rewards"
                    type="button"
                    role="tab"
                    aria-controls="nav-Rewards"
                    aria-selected="false"
                  >
                    Rewards
                  </button>
                </div>
                <div className="tb_out_btn">
                  <button
                    className="nav-link"
                    id="nav-Fuel-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Fuel"
                    type="button"
                    role="tab"
                    aria-controls="nav-Fuel"
                    aria-selected="false"
                  >
                    Fuel
                  </button>
                </div>
                <div className="tb_out_btn">
                  <button
                    className="nav-link"
                    id="nav-Business-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-Business"
                    type="button"
                    role="tab"
                    aria-controls="nav-Business"
                    aria-selected="false"
                  >
                    Business
                  </button>
                </div>
              </div>
            </nav>
            <div className="tab-content mt-5" id="nav-tabContent">
              <div
                className="tab-pane fade active show"
                id="nav-Featured"
                role="tabpanel"
                aria-labelledby="nav-Featured-tab"
              >
                <div className="row gx-5">
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-1.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          HDFC Regalia
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-2.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Axis Bank Ace Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-3.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Indian Oil HDFC Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-Cashback"
                role="tabpanel"
                aria-labelledby="nav-Cashback-tab"
              >
                <div className="row gx-5">
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-1.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          HDFC Regalia
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-2.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Axis Bank Ace Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-3.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Indian Oil HDFC Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-Rewards"
                role="tabpanel"
                aria-labelledby="nav-Rewards-tab"
              >
                <div className="row gx-5">
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-1.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          HDFC Regalia
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-2.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Axis Bank Ace Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-3.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Indian Oil HDFC Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-Fuel"
                role="tabpanel"
                aria-labelledby="nav-Fuel-tab"
              >
                <div className="row gx-5">
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-1.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          HDFC Regalia
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-2.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Axis Bank Ace Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-3.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Indian Oil HDFC Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-Business"
                role="tabpanel"
                aria-labelledby="nav-Business-tab"
              >
                <div className="row gx-5">
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-1.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          HDFC Regalia
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-2.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Axis Bank Ace Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4">
                    <figure className="m-0">
                      <img src="images/card-3.svg" className="w-100" alt="" />
                      <figcaption className="text-white">
                        <div className="fs-28 mt-3 lh-1 card_heading">
                          Indian Oil HDFC Credit Card
                        </div>
                        <div className="mt-3">
                          <ul className="m-0 list-inline">
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Travel
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="bg-gradient text-warning-emphasis poppins-fonts py-2 px-3 text-uppercase fw-600 fs-13">
                                Online Shopping
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="fs-22 poppins-fonts mt-4 text-secondary pe-md-5">
                          50% Cashback
                        </div>
                        <div className="fs-18 poppins-fonts text-secondary mb-3 pe-md-5 fw-300">
                          High cashback on online and offline spends
                        </div>
                        <button
                          type="button"
                          className="border-0 bg-transparent text-warning-emphasis fs-18"
                        >
                          Apply Now <img src="images/next_arr.svg" alt="" />
                        </button>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
