import React from 'react';

const Product = ({product}) => {
    const {product_image,product_title,price}=product;
    return (
        <div className="card bg-base-100 shadow-sm rounded-2xl">
  <figure className="px-10 pt-10 h-3/4">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product_title}</h2>
    <p>Price : {price}$</p>
    <div className="card-actions">
      <button className="btn border-[#9538E2] text-[#9538E2] font-semibold rounded-4xl bg-white">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Product;