import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from "../../config";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../css/customer/login.css";

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      c_email: "",
      c_password: "",
    },
    validationSchema: Yup.object({
      c_password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .min(4, "Must be 4 characters")
        .required("Required"),
      c_email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      if (values.c_email.length === 0) {
        toast.warning("Please enter email address");
      } else if (values.c_password.length === 0) {
        toast.warning("Please enter password");
      } else {
        let c_email = values.c_email;
        let c_password = values.c_password;
        axios
          .post(config.customerURL + "/signin_auth", { c_email, c_password })
          .then((response) => {
            if (response.length === 0) {
              toast.warning("Your email or password doesn't match");
            } else {
              // console.log(response);
              let result = response["data"];
              // console.log(result["data"]["c_email"]);
              sessionStorage["token"] = result["data"]["token"];
              sessionStorage["c_email"] = result["data"]["c_email"];
              sessionStorage["c_id"] = result["data"]["c_id"];
              sessionStorage["c_fname"] = result["data"]["c_fname"];
              sessionStorage["c_lname"] = result["data"]["c_lname"];

              toast.success("You are successfully logged in.");
              navigate("/home");
            }
          })
          .catch((error) => {
            console.log(error);

            toast.error("Something went wrong");
          });
      }
    },
  });

  return (
    <>
      <div
        style={{
          marginTop: "5%",

          fontSize: "20px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div style={styles.container}>
            <h3
              className="form-label"
              style={{ textAlign: "center", marginBottom: "6%" }}
            >
              Log in to GMS
            </h3>
            <div className="mb-3 input-group-lg">
              <input
                type="email"
                name="c_email"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_email}
                className="form-control"
                placeholder="Email address"
                style={{ height: "60px" }}
              />
              {formik.touched.c_email && formik.errors.c_email ? (
                <p className="validation-message">{formik.errors.c_email}</p>
              ) : null}
            </div>
            <div className="mb-3 input-group-lg">
              <input
                type="password"
                name="c_password"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_password}
                className="form-control"
                placeholder="Password"
                style={{ height: "60px" }}
              />
              {formik.touched.c_password && formik.errors.c_password ? (
                <p className="validation-message">{formik.errors.c_password}</p>
              ) : null}
            </div>

            <div className="mb-3 input-group-lg">
              <button
                type="submit"
                className="btn btn-success form-control"
                // onClick={login}
                style={{ height: "60px" }}
              >
                Login
              </button>
            </div>

            <div style={{ marginTop: "5%", textAlign: "center" }}>
              <Link to='/signup'>Dont have an account? Signup Here</Link>
            </div>


          </div>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    width: "30%",
    padding: "1%",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#11851b",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 8px 2px #11851b",
  },
};
