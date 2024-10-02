const LoungeFinder = () => {
  return (
    <>
      <section className="lounge_finder_section position-relative">
        <video autoPlay="false" id="video">
          <source src="images/video/video-2.mp4" type="video/mp4" />
        </video>
        <div className="position-absolute top-0 end-0 bottom-0 start-0 py-5">
          <div className="container-lg">
            <div className="row position-relative">
              <div className="col-12 text-center text-white ">
                <div className="fs-50">Lounge Finder</div>
                <div className="fs-20">
                  Check which lounges you can access at a click!
                </div>
              </div>
              <div className="col-12 text-center mt-4">
                <button
                  type="button"
                  className="btn btn-gradient px-5 py-3"
                  id="playButton"
                >
                  Try Lounge Finder
                </button>
              </div>
            </div>
            <div className="row lounge_row">
              <div className="col-md-4">
                <figure className="m-0">
                  <figcaption className="d-flex align-items-center px-md-4">
                    <div className="me-1 lounge_ic">
                      <img src="images/lounge_ic_1.svg" alt="" />
                    </div>
                    <div className="text-white ms-3">
                      <div className="fs-28">Indra Gandhi Int'l</div>
                      <ul className="list-inline poppins-fonts m-0">
                        <li className="list-inline-item">IGI</li>
                        <li className="list-inline-item">New Delhi</li>
                      </ul>
                    </div>
                  </figcaption>
                  <img src="images/lounge-1.png" className="w-100" alt="" />
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="m-0">
                  <figcaption className="d-flex align-items-center px-md-4">
                    <div className="me-1 lounge_ic">
                      <img src="images/lounge_ic_2.svg" alt="" />
                    </div>
                    <div className="text-white ms-3">
                      <div className="fs-28">Indra Gandhi Int'l</div>
                      <ul className="list-inline poppins-fonts m-0">
                        <li className="list-inline-item">IGI</li>
                        <li className="list-inline-item">New Delhi</li>
                      </ul>
                    </div>
                  </figcaption>
                  <img src="images/lounge-2.png" className="w-100" alt="" />
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="m-0">
                  <figcaption className="d-flex align-items-center px-md-4">
                    <div className="me-1 lounge_ic">
                      <img src="images/lounge_ic_3.svg" alt="" />
                    </div>
                    <div className="text-white ms-3">
                      <div className="fs-28">Indra Gandhi Int'l</div>
                      <ul className="list-inline poppins-fonts m-0">
                        <li className="list-inline-item">IGI</li>
                        <li className="list-inline-item">New Delhi</li>
                      </ul>
                    </div>
                  </figcaption>
                  <img src="images/lounge-3.png" className="w-100" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_section pt-5 bg-white">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 text-center">
              <div className="fs-22 fw-400">WHAT THEY SAY ABOUT BANKKARO</div>
              <div className="fs-60 fw-500 text-black lh-1">
                See the <span className="impact_txt">Impact</span> in action
              </div>
            </div>
          </div>
          <div className="row justify-content-between abot_content_row">
            <div className="col-md-3 text-center">
              <div className="fs-40 lh-1 fw-500">Ratan Tata</div>
              <div className="fs-22 text-warning-emphasis-3">
                Chairperson Tata Group
              </div>
            </div>
            <div className="col-md-3 text-center poppins-fonts fs-15">
              "BankKaro helped me find the perfect credit card that matches my
              spending on groceries and travel. Highly recommend it for
              personalized credit card options."
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoungeFinder;
