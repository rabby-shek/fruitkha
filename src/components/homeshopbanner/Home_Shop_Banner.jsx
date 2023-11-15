import React from "react";

const Home_Shop_Banner = () => {
  return (
    <section className="shop-banner">
      <div className="container">
        <h3>
          December sale is on! <br /> with big{" "}
          <span className="orange-text">Discount...</span>
        </h3>
        <div className="sale-percent">
          <span>
            Sale! <br /> Upto
          </span>
          50% <span>off</span>
        </div>
        <a href="shop.html" className="cart-btn btn-lg">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Home_Shop_Banner;
