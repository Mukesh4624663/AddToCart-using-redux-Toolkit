// import React, { useEffect } from "react";
// import { fetchProducts } from "../features/productSlice";
// import { useDispatch, useSelector } from "react-redux";
// import "../pages/Cart.css";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const product = useSelector((item) => item.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <div>
//       {product.map((item) => (
//         <div className="pro-containerr">
//           <div className="pro">
//             <img src={item.id} className="img" alt="imag" />
//             <h3>{item.name}</h3>
//             <h3>{item.price}</h3>
//             <h4>{item.brand}</h4>
//             <span>{item.rating}</span>
//             <h3>{item.salePrice}</h3>
//             <h3 className="des">{item.description}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import "../pages/Cart.css";

const Cart = () => {
  return (
    <div>
      <h1>cart</h1>
    </div>
  );
};

export default Cart;
