import React from "react";
import { MdCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ListProduct = ({ product, list, handleRemove }) => {
  const { product_title, product_image, price, description, product_id } =
    product;
  const handleProductRemove = () => {
    handleRemove(list, product_id);
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm p-3 md:p-8 h-64 space-x-3 md:space-x-10 ">
      <figure className="w-1/3 h-full">
        <img
          src={product_image}
          className="object-cover border border-gray-100"
          alt="Movie"
        />
      </figure>
      <div className="flex flex-grow items-center justify-between">
        <NavLink to={`/details/${product_id}`}>
          <div className="space-y-3 md:space-y-5">
            <h2 className="card-title md:text-3xl">{product_title}</h2>
            <p className="opacity-50 text-sm">{description}</p>
            <p>Price:{price}$</p>
          </div>
        </NavLink>
        <div className="card-actions items-center mr-3">
          <button className="btn rounded-full" onClick={handleProductRemove}>
            <MdCancel className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
