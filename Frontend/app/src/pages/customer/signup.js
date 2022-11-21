import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import config from "../../config";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import "../../css/customer/signup.css";

export default function Login() {
  const navigate = useNavigate();

  //New Code
  const formik = useFormik({
    initialValues: {
      c_city: "",
      c_pincode: "",
      c_state: "",

      c_address: "",
      c_fname: "",
      c_lname: "",
      c_email: "",
      c_mobile: "",
      c_password: "",
      c_confirm_password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      c_password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .min(4, "Must be 4 characters")
        .required("Required"),
      c_confirm_password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .min(4, "Must be 4 characters")
        .required("Required"),
      c_email: Yup.string().email("Invalid email address").required("Required"),
      c_fname: Yup.string().required("First Name Required"),
      c_lname: Yup.string().required("Last Name Required"),
      c_mobile: Yup.string().phone(),
      c_address: Yup.string().required("Address is require"),
      c_pincode: Yup.string().required("Pincode is require"),
    }),

    onSubmit: (values) => {
      let c_pincode = values.c_pincode;
      let c_address = values.c_address;
      let c_fname = values.c_fname;
      let c_lname = values.c_lname;
      let c_email = values.c_email;
      let c_mobile = values.c_mobile;
      let c_password = values.c_password;
      let c_confirm_password = values.c_confirm_password;
      let c_city = values.c_city;

      let c_state = values.state;

      if (c_password === c_confirm_password) {
        axios
          .post(config.customerURL + "/signup", {
            c_city,
            c_state,
            c_pincode,

            c_pincode,
            c_address,
            c_fname,
            c_lname,
            c_email,
            c_mobile,
            c_password,
          })
          .then((response) => {
            if (response["data"]["status"] === "success") {
              toast.success("You are successfully registered");
              navigate("/login");
            } else if (response["data"] === "already exists") {
              toast.warning(
                "You are already registered. please try with different email address"
              );
            }
          })
          .catch((error) => {
            toast.error("Something went wrong");
          });
      } else {
        toast.warning("Password and Confirm password is not matching");
      }
    },
  });

  return (
    <div>
      <div style={{ marginTop: "1%" }}>
        <form onSubmit={formik.handleSubmit}>
          <div style={styles.container}>
            <h3>
              <center>Signup here!!!</center>
            </h3>
            <div className="mb-3 d-flex input-group-lg">
              <input
                type="text"
                className="form-control"
                name="c_fname"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_fname}
                placeholder="First Name"
              />
              &nbsp; &nbsp;&nbsp;
              <input
                type="text"
                name="c_lname"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_lname}
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div>
              <span>
                {formik.touched.c_fname && formik.errors.c_fname ? (
                  <p className="validation-message">{formik.errors.c_fname}</p>
                ) : null}
                {formik.touched.c_lname && formik.errors.c_lname ? (
                  <p className="validation-message">{formik.errors.c_lname}</p>
                ) : null}
              </span>
            </div>
            <div className="mb-3 input-group-lg">
              <input
                type="email"
                name="c_email"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_email}
                className="form-control"
                placeholder="Email"
              />
              {formik.touched.c_email && formik.errors.c_email ? (
                <p className="validation-message">{formik.errors.c_email}</p>
              ) : null}
            </div>
            <div className="mb-3 input-group-lg">
              <input
                type="tel"
                className="form-control"
                name="c_mobile"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_mobile}
                placeholder="Mobile number"
              />
              {formik.touched.c_mobile && formik.errors.c_mobile ? (
                <p className="validation-message">{formik.errors.c_mobile}</p>
              ) : null}
            </div>
            <div className="mb-3 input-group-lg">
              <input
                type="password"
                className="form-control"
                name="c_password"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_password}
                placeholder="Password"
              />
              {formik.touched.c_password && formik.errors.c_password ? (
                <p className="validation-message">{formik.errors.c_password}</p>
              ) : null}
            </div>
            <div className="mb-3 input-group-lg">
              <input
                type="password"
                name="c_confirm_password"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_confirm_password}
                className="form-control"
                placeholder="Confirm Password"
              />
              {formik.touched.c_confirm_password &&
              formik.errors.c_confirm_password ? (
                <p className="validation-message">
                  {formik.errors.c_confirm_password}
                </p>
              ) : null}
            </div>
            <div className="mb-3 input-group-lg">
              <textarea
                style={{ resize: `none` }}
                className="form-control"
                rows="4"
                autoComplete="on"
                resize="none"
                placeholder="Address"
                name="c_address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_address}
              />
              {formik.touched.c_address && formik.errors.c_address ? (
                <p className="validation-message">{formik.errors.c_address}</p>
              ) : null}
            </div>

            <div className="mb-3  input-group-lg">
              <input
                type="input"
                name="c_pincode"
                autoComplete="on"
                onKeyUp={() => {
                  let c_pincode = formik.values.c_pincode;
                  axios
                    .get("https://api.postalpincode.in/pincode/" + c_pincode)
                    .then((response) => {
                      formik.values.c_city =
                        response["data"][0]["PostOffice"][0]["District"];
                      formik.values.c_state =
                        response["data"][0]["PostOffice"][0]["State"];

                      formik.setFieldValue("city", formik.values.c_city);
                      formik.setFieldValue("state", formik.values.c_state);
                    })
                    .catch((error) => {
                      // console.log("Error " + error);
                    });
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_pincode}
                className="form-control"
                placeholder="Pincode"
              />
              {formik.touched.c_pincode && formik.errors.c_pincode ? (
                <p className="validation-message">{formik.errors.c_pincode}</p>
              ) : null}
            </div>
            <div className="mb-3 d-flex input-group-lg">
              <input
                type="text"
                name="city"
                disabled="on"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_city}
                className="form-control"
                placeholder="City"
              />
              &nbsp; &nbsp;&nbsp;
              <input
                type="text"
                name="state"
                disabled="on"
                autoComplete="on"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.c_state}
                className="form-control"
                placeholder="State"
              />
            </div>

            <div className="text-center">
              Already have an account?&nbsp;
              <Link to="/login" style={{ color: "#11851b" }}>
                login here
              </Link>
            </div>
            <hr />
            <div className="mb-3 input-group-lg">
              <button type="submit" className="btn btn-success form-control">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "28%",

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
