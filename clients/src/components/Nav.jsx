import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className="header">
        <p>Product Center</p>
        <Link to={"/"}>Home</Link>
      </div>
    </>
  );
};

export default Nav;
