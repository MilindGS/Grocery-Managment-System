import { Link } from "react-router-dom";
import fruit_cat from "../../img/customer/fruit_cat.jpg";

export default function ProductCat(props) {
  return (
    <div
      className="card"
      style={{
        width: "15rem",
        margin: "12px",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit"
      }}
    >
      <Link
        to="/producthome"
        state={{
          catid: props.p_cat.cat_id,
        }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={fruit_cat} className="card-img-top" alt="" />
        {props.p_cat.cat_name}
      </Link>



    </div>
  );
}
