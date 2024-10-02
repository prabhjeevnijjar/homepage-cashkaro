const Offers = () => {
  return (
    <section className="card_list_sec mt-5 pt-3">
      <div className="container-lg">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="inner_card_list h-100 position-relative">
              <img src="images/card_shape_1.svg" className="w-100" alt="" />
              <div className="fs-50 fw-300 position-absolute top-0 start-0 end-0 text-center lh-1 text-white pt-5 mt-5">
                Card
                <br />
                Kundali
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner_card_list h-100 position-relative">
              <img src="images/card_shape_2.svg" className="w-100" alt="" />
              <div className="fs-50 fw-300 position-absolute top-0 start-0 end-0 text-center lh-1 text-white pt-5 mt-5">
                Beat
                <br />
                My Card
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner_card_list h-100 position-relative">
              <img src="images/card_shape_3.svg" className="w-100" alt="" />
              <div className="fs-50 fw-300 position-absolute top-0 start-0 end-0 text-center lh-1 text-white pt-5 mt-5">
                Compare
                <br />
                Cards
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="inner_card_list h-100 position-relative">
              <img src="images/card_shape_4.svg" className="w-100" alt="" />
              <div className="fs-50 fw-300 position-absolute top-0 start-0 end-0 text-center lh-1 text-white pt-5 mt-5">
                Lounge
                <br />
                Finder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
