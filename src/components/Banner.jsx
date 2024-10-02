const Banner = () => {
  return (
    <section className="persional_offer mb-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-3">
            <figure className="m-0 text-center">
              <img src="images/persional_offer_1.png" alt="" />
              <figcaption className="text-white">
                <div className="fs-32">Personalised Offers</div>
                <div className="fs-15 poppins-fonts fw-300 text-muted mt-2">
                  Find best Credit Cards based on your spend pattern
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="m-0 text-center">
              <img src="images/persional_offer_2.png" alt="" />
              <figcaption className="text-white">
                <div className="fs-32">Earn Rewards</div>
                <div className="fs-15 poppins-fonts fw-300 text-muted mt-2">
                  Earn Rewards for every successful Credit Card approval
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="m-0 text-center">
              <img src="images/persional_offer_3.png" alt="" />
              <figcaption className="text-white">
                <div className="fs-32">Compare Cards</div>
                <div className="fs-15 poppins-fonts fw-300 text-muted mt-2">
                  Compare your existing Cards with best in the industry
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-md-3">
            <figure className="m-0 text-center">
              <img src="images/persional_offer_4.png" alt="" />
              <figcaption className="text-white">
                <div className="fs-32">Max Benifits</div>
                <div className="fs-15 poppins-fonts fw-300 text-muted mt-2">
                  Get maximum benefits from your Credit Cards
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
