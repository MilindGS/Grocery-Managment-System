import React, { useEffect, useState } from "react";
import ProductCat from "../../components/customer/product_cat";
import Carousel from "../../components/customer/carousel";
import "../../css/customer/home.css";
import axios from "axios";
import config from "../../config";

export default function Home() {
  const [product_category, setProductCategory] = useState([]);

  const getProductCategories = () => {
    axios
      .get(config.productURL + "/categories")
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setProductCategory(result["data"]);
        } else {
          console.log("Not success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductCategories();
  }, []);

  return (
    <div>
      <div style={{ margin: "5px", marginBottom: "10px" }}>
        <Carousel />
      </div>

      <div>
        <div className="row" style={{ margin: "5px" }}>
          {product_category.map((p_cat) => {
            return <ProductCat key={p_cat.cat_id} p_cat={p_cat} />;
          })}
        </div>
      </div>
    </div>
  );
}
