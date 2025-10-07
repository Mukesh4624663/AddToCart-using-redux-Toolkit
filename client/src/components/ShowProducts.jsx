import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, fetchProducts } from "../features/productSlice";
import "./ShowProducts.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const ShowProducts = () => {
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const product = useSelector((item) => item.products);
  // console.log(product);

  // const singlePost = useSelector((items) => items);

  // const handlesinglebyid = async (id) => {
  //   await dispatch(getsinglePost(id));
  //   console.log(singlePost);

  const addToCartHandler = async (id) => {
    const { data: singleProducts } = await axios.get(
      `http://localhost:8000/products/${id}`
    );
    console.log(singleProducts);
    dispatch(addtoCart({ product: singleProducts, quantity: 1 }));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {product.map((item) => (
        <div className="flx">
          <div
            className="pro-container"

            // onClick={() => handlesinglebyid(item._id)}
          >
            <div className="pro" key={item.id}>
              <img src={item.imageUrl} className="img" alt="imag" />
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
              <h4>{item.brand}</h4>
              <button
                onClick={() => {
                  addToCartHandler(item._id);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowProducts;
