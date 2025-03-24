import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { addToList, getList } from "../../assets/functions/listChange";

const ProductDetails = () => {
  const [wishListed,setWishListed]=useState();
  
  const params = useParams();
  const { productId } = params;
  const id = parseInt(productId);
  const products = useLoaderData();
  const product = products.find((product) => product.product_id === id);

  const { product_title, product_image, rating, price, specifications } =
    product;
    useEffect(() => {
      const wishList = getList("wish-list");
      setWishListed(wishList.includes(id));
    }, []);
  
    const handleAdd = (list) => {
      addToList(list, id);
      if (list === "wish-list") {
        setWishListed(true);
      }
    };
  return (
    <div className="flex flex-col justify-center items-center mb-[500px] md:mb-80">
      <div className="h-[375px] relative bg-[#9538E2] w-full text-center text-white flex flex-col gap-2 lg:gap-4 items-center pt-10">
        <h2 className="text-2xl md:text-4xl font-bold">Product Details</h2>
        <p className="w-3/4 md:w-1/2 text-sm md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="card md:card-side w-3/4 p-4 md:p-8 bg-white shadow-sm absolute top-1/3">
        <figure className=" md:w-2/5 bg-base-200 border-gray-200 border w-fit md:mr-6">
          <img src={product_image} alt="Album" />
        </figure>
        <div className="card-body space-y-4">
          <div className="space-y-2">
          <h2 className="card-title md:text-3xl">{product_title}</h2>
          <p>Price : {price}$</p>
          <span className="border border-green-300 bg-green-200 rounded-xl p-1">In stock</span>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold">Specification:</h5>
            <ol className="list-decimal pl-4 opacity-50">
              {specifications.map((element, idx) => (
                <li key={idx}>{element}</li>
              ))}
            </ol>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold">Ratings:</h5>
            <div className="rating rating-xs rating-half">
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="0.5 star" defaultChecked={rating <= 1} />
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="1 star" defaultChecked={rating === 1} />
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="1.5 star" defaultChecked={rating <= 2} />
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="2 star" defaultChecked={rating === 2} />
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="2.5 star" defaultChecked={rating <= 3}/>
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="3 star" defaultChecked={rating === 3} />
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="3.5 star" defaultChecked={rating <= 4}/>
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="4 star" defaultChecked={rating === 4} />
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-1 bg-[#F9C004]" aria-label="4.5 star" defaultChecked={rating <= 5}/>
  <input type="radio" name="rating-5" className="mask mask-star-2 mask-half-2 bg-[#F9C004]" aria-label="5 star" defaultChecked={rating === 5} />
</div>
            <button className="btn btn-xs ml-2 rounded-2xl p-2">{rating}</button>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#9538E2] text-white rounded-4xl" onClick={()=>handleAdd('cart-list')}>Add to cart<IoCartOutline/></button>
            <button className={`btn rounded-full ${wishListed? 'text-[#9538E2] ': ''}`} onClick={()=>handleAdd('wish-list')} disabled={wishListed}><MdOutlineFavoriteBorder className="text-lg"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
