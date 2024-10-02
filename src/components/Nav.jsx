const Nav = () => {
  return (
    <section className="main_bnr position-relative">
      <header className="py-1 position-absolute top-0 start-0 end-0">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-md-3">
              <img src="/images/logo_main.svg" alt="" />
            </div>
            <div className="col-md-6 text-center px-0">
              <ul className="list-inline m-0">
                <li className="list-inline-item">
                  <a href="#">OUR PRODUCTS</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">TOOLS</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">BLOGS</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">ABOUT US</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 text-end">
              <button type="button" className="bg-transparent border-0 p-0">
                <img src="images/sign_in_btn.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <img src="images/banner.svg" className="w-100" alt="" />
    </section>
  );
};

export default Nav;
