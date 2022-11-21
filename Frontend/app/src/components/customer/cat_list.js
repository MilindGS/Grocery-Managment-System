import React from "react";
import { Link } from "react-router-dom";
export default function CatList(props) {
  return (
    <div style={{ border: "1px solid green" }}>
      <h4 style={{ padding: "5px" }}>
        <Link
          to="#"
          className="text-decoration-none"
          style={{ color: "green" }}
        >
          {props.p_cat.p_category}
        </Link>
      </h4>
    </div>
  );
}
