import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [storage, setStorage] = useState();
  const [camera, setCamera] = useState();
  const [color, setColor] = useState();
  const prames = useParams();
  useEffect(() => {
    async function getFun() {
      let result = await fetch("http://localhost:8000/product/" + prames.id);
      result = await result.json();
      setName(result.name);
      setBrand(result.brand);
      setPrice(result.price);
      setStorage(result.storage);
      setCamera(result.camera);
      setColor(result.color);
      console.log(result);
    }
    getFun();
  });
  return (
    <div className="productData" id="productDataId">
      <h1>Name:-{name}</h1>
      <p>Brand:- {brand}</p>
      <p>Price:- {price}</p>
      <p>Storage:- {storage}</p>
      <p>Price:- {price}</p>
      <p>Camera:- {camera}</p>
      <p>Color:- {color}</p>
    </div>
  );
};

export default Product;
