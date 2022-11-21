import React from "react";
import fruit from "../../img/customer/fruit.jpg";
import veg from "../../img/customer/veg.jpg";
import egg from "../../img/customer/egg1.jpg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={fruit}
            className="d-block w-100"
            style={{ height: "50vh" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Fresh from the Farm</h5>
            <p>Wildest range of Fruits and Vegetables</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={veg}
            className="d-block w-100 "
            style={{ height: "50vh" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Organic Products</h5>
            <p>Get Fresh Organic Products at your doorstep</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={egg}
            className="d-block w-100"
            style={{ height: "50vh" }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Limited Offer</h5>
            <p>Get Exciting offers on daily essentials</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
