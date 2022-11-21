import React from "react";
import fruit_cat from "../../img/customer/fruit_cat.jpg";
import { useDispatch } from "react-redux";
import { Add } from "./../../redux/actions/action";
import { toast } from "react-toastify";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  const send = (p) => {
    console.log("Clicked");
    dispatch(Add(p));
  };
  const reject = () => {
    toast.warning("Please Login");
  };
  return (
    <div
      className="card"
      style={{ width: "15rem", margin: "15px", textAlign: "center" }}
    >
      <img src={fruit_cat} className="card-img-top" alt="" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.product.p_name}</h5>
        <p className="card-text">Description : {props.product.p_details}</p>
        <p className="card-text"><strong>Unit :</strong> {props.product.p_unit}</p>
        <p className="card-text" ><strong>Price :</strong> ₹ {props.product.p_price}</p>

        <button
          className="btn btn-success mt-auto"
          onClick={
            sessionStorage["token"] ? () => send(props.product) : () => reject()
          }

        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
