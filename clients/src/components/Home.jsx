import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [productData, setProductData] = useState();
  useEffect(() => {
    async function getFun() {
      let result = await fetch(
        "https://techwing-assignment-server.onrender.com/",
        {
          method: "get",
          headers: { "content-type": "application/json" },
        }
      );
      result = await result.json();
      //   console.log(result);
      setProductData(result);
    }
    getFun();
  });
  return (
    <>
      <div className="homeMain">
        {productData &&
          productData.map((value) => {
            return (
              <div className="productData" key={value._id}>
                <Link to={`/product/${value._id}`}>
                  <h1>Name:-{value.name}</h1>
                  <p>Brand:- {value.brand}</p>
                  <p>Price:- {value.price}</p>
                  <p>Storage:- {value.storage}</p>
                  <p>Price:- {value.price}</p>
                  <p>Camera:- {value.camera}</p>
                  <p>Color:- {value.color}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
