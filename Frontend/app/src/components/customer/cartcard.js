import React from "react";
import { useDispatch } from "react-redux";
import fruit_cat from "../../img/customer/fruit_cat.jpg";
import { Delete, Add, Remove } from "../../redux/actions/action";
import { useSelector } from "react-redux";

export default function CartCard(props) {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();
  //increment
  const send = (p) => {
    dispatch(Add(p));
  };
  const handleDelete = (p_id) => {
    console.log(p_id);
    dispatch(Delete(p_id));
  };
  //remove one or decrement
  const remove = (item) => {
    dispatch(Remove(item));
  };
  return (
    <div
      className="card "
      style={{ width: "15rem", margin: "15px", textAlign: "center" }}
    >
      <img src={fruit_cat} className="card-img-top" alt="" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.product.p_name}</h5>
        <p className="card-text">Description : {props.product.p_details}</p>
        <p className="card-text"><strong>Unit : {props.product.p_unit}</strong></p>
        <p className="card-text"><strong>Price: ₹ {props.product.p_price}</strong></p>
        <div
          className="mt-5 d-flex justify-content-between align-items-center"
          style={{
            width: 100,
            cursor: "pointer",
            background: "#ddd",
            color: "#111",
            margin: "auto",

          }}
        >
          <span
            style={{ fontSize: 24 }}
            onClick={
              props.product.p_qty <= 1
                ? () => handleDelete(props.product.p_id)
                : () => remove(props.product)
            }
          >
            -
          </span>
          <span style={{ fontSize: 24 }}>{props.product.p_qty}</span>
          <span style={{ fontSize: 24 }} onClick={() => send(props.product)}>
            +
          </span>
        </div>
        <button
          className="btn btn-danger mt-auto"
          onClick={() => handleDelete(props.product.p_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
