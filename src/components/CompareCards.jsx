const CompareCards = () => {
  return (
    <>
      <section className="compare_sec position-relative">
        <video loop="true" autoPlay="autoplay" muted>
          <source src="images/video/vide-1.mp4" type="video/mp4" />
        </video>
        <div className="position-absolute top-0 end-0 bottom-0 start-0 ">
          <div className="container-lg">
            <div className="row">
              <div className="col-12 text-center">
                <img src="images/compare_crd.svg" alt="" />
              </div>
              <div className="col-12 text-center compare_card_inner">
                <img src="images/vid_crd.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="compare_crd_sec py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 fs-34 text-white text-center">
              Uncover hidden benefits and find the
              <br />
              perfect card for your financial goals.
            </div>
            <div className="col-12 text-center mt-4">
              <button type="button" className="btn btn-gradient px-5 py-3">
                Compare Cards
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareCards;
