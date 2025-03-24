import React, { useEffect, useState } from "react";
import { getList } from "../../assets/functions/listChange";
import { useLoaderData } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { addToList, removeFromList } from "../../assets/functions/listChange";

const Compare = () => {
    const [compareList,setCompareList]=useState([]);
    const products = useLoaderData();

  useEffect(()=>{
    const localCompareList = getList("compare");
    const newCompareList = products.filter((product) =>
    localCompareList.includes(product.product_id)
  );
    setCompareList(newCompareList);
  },[]);
  const handleBuy=(id)=>{
      addToList('cart-list',id);
    }
    const handleRemove=(id)=>{
      removeFromList('compare',id);
      const newList=[...compareList].filter((product)=>product.product_id!== id);
      setCompareList(newList);
    }
  return (
    <div className="bg-base-100">
      <div className="h-[256px] bg-[#9538E2] w-full text-center text-white flex flex-col gap-2 lg:gap-4 items-center pt-10">
        <h2 className="text-2xl md:text-4xl font-bold">Compare</h2>
        <p className="w-3/4 md:w-1/2 text-sm md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="container mx-auto my-12">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                {compareList.map((product, idx) => (
                  <td
                    className="h-64 p-6"
                    key={idx}
                  >
                    <div className="w-full justify-items-end">
                      <MdCancel
                        className="text-red-600 text-xl"
                        onClick={()=>handleRemove(product.product_id)}
                      />
                    </div>
                    <img
                      src={product.product_image}
                      className="h-10/12 mx-auto"
                      alt=""
                    />
                    <h4 className="font-bold text-2xl h-1/12 text-center">
                      {product.product_title}
                    </h4>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Description</th>
                {compareList.map((product, idx) => (
                  <td key={idx}>{product.description}</td>
                ))}
              </tr>
              {/* row 2 */}
              <tr>
                <th>Rating</th>
                {compareList.map((product, idx) => (
                  <td key={idx}>{product.rating}</td>
                ))}
              </tr>
              {/* row 3 */}
              <tr>
                <th>Category</th>
                {compareList.map((product, idx) => (
                  <td key={idx}>{product.category}</td>
                ))}
              </tr>
              <tr>
                <th>Specification</th>
                {compareList.map((product, idx) => (
                  <td key={idx} ><ol className="list-decimal p-4 opacity-50">
                  {product.specifications.map((element, idx) => (
                    <li key={idx}>{element}</li>
                  ))}
                </ol></td>
                ))}
              </tr>
              <tr>
                <th>Available</th>
                {compareList.map((product, idx) => (
                  <td key={idx} className="p-4">{product.availability ? 'In Stock': 'Stock Out'}</td>
                ))}
              </tr>
              <tr>
                <th></th>
                {compareList.map((product, idx) => (
                  <td key={idx}><button className="btn border-[#9538E2] text-[#9538E2] rounded-4xl" onClick={()=>handleBuy(product.product_id)}>Buy Now</button></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
