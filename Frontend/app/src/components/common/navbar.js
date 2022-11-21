import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Navbar() {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate();

  const auth = () => {

    if (sessionStorage.length !== 0) {
      sessionStorage.clear();
      toast.success("Successfully Logged out");
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">

      <img src="logo.png" href="/home" style={{ width: "4%", marginLeft: "1%" }}>
      </img>

      <Container>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {(sessionStorage["id"] === null) || (window.sessionStorage.getItem("adminkey") === null) ? (
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/searchedProducts">
                    Search Products
                  </Link>
                </li>
              </div>
            ) : (
              <li></li>
            )}
          </ul>


          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/searchedProducts">
                Search Products
              </Link>
            </li>
          </ul> */}

          <ul className="navbar-nav">
            {sessionStorage["c_email"] ? (
              <div className="d-flex">
                <li className="nav-item active">
                  <Link className="nav-link active" to="/cart">
                    My Cart
                  </Link>
                </li>
                <li className="nav-item active">
                  <span className="btn btn-warning badge badge-pill badge-light">
                    {getdata.length}
                  </span>
                </li>
              </div>
            ) : (
              <li></li>
            )}
          </ul>


          <ul className="navbar-nav position-absolute top-0 end-0 me-5 mt-2">
            <li className="nav-item mt-3 ">

              {sessionStorage["token"] ? (
                <h5><span class="badge badge-secondary">Welcome, {sessionStorage["c_fname"] + " " + sessionStorage["c_lname"] + " "}</span></h5>
              ) : null}
            </li>
            <li>
              <button className="btn btn-danger mt-2 p-2" onClick={() => auth()}>
                {(sessionStorage["token"] || sessionStorage["id"] || window.sessionStorage.getItem("adminkey")) ? " Logout" : "Login"}
              </button>
            </li>
          </ul>




          <ul className="navbar-nav">
            {window.sessionStorage.getItem("adminkey") ? (
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link active" to="/acustomer">
                    Customer Details
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/aseller">
                    Seller Details
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/aproduct">
                    View Products
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link active" to="/aorder">
                    View Orders
                  </Link>
                </li>

              </div>
            ) : (
              <li></li>
            )}
          </ul>




          <ul className="navbar-nav">
            {sessionStorage["id"] ? (
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link active" to="/sorder">
                    My Orders
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/sproduct">
                    Listed Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/selleraddproduct">
                    Add Product
                  </Link>
                </li>


              </div>
            ) : (
              <li></li>
            )}
          </ul>


        </div>
      </Container>
    </nav>
  );
}
