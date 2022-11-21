export default function Footer() {
  return (
    <div className="d-flex flex-column min-vh-50 bg-success mt-5 p-3">
      <footer className="container mt-auto">

        <ul className="nav justify-content-center border-bottom pb-3 mb-3">

          <li className="nav-item">
            <a href="/aboutus" className="nav-link px-2 text-muted">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a href="/contactus" className="nav-link px-2 text-muted">
              Contact Us
            </a>
          </li>


          <li className="nav-item">
            <a href="/signin" className="nav-link px-2 text-muted">
              Seller Login
            </a>
          </li>

          {/* {(sessionStorage["id"] === null) || (window.sessionStorage.getItem("adminkey") === null) ? (

            <li className="nav-item">
              <a href="/signin" className="nav-link px-2 text-muted">
                Seller Login
              </a>
            </li>

          ) : (
            <li>
            </li>
          )} */}

        </ul>

        <p className="text-center text-muted">© 2022 Company, Inc</p>
        <img
          src="logo.png"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "5%",
          }}
          alt=""
        ></img>
      </footer>
    </div>
  );
}
