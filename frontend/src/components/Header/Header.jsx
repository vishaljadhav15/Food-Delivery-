import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Explore a vibrant menu filled with flavorful dishes prepared with
          premium ingredients and authentic craftsmanship. We’re dedicated to
          delighting your taste buds and making every bite memorable, bringing
          you a satisfying dining experience with every order.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
