import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaSortAmountDown } from "react-icons/fa";
import { getList, removeFromList } from "../../assets/functions/listChange";
import { useLoaderData } from "react-router-dom";
import ListProduct from "../ListProduct/ListProduct";

const Dashboard = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState(true);
  const [sort, setSort] = useState("Price");
  const [wishList, setWishList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState();

  const bg = "bg-[#9538E2] text-white";
  const bg2 = "text-[#9538E2] bg-white";
  useEffect(() => {
    const localWishList = getList("wish-list");
    const localCartList = getList("cart-list");
    const wishProducts = products.filter((product) =>
      localWishList.includes(product.product_id)
    );
    const cartProducts = products.filter((product) =>
      localCartList.includes(product.product_id)
    );
    let total = 0;
    cartProducts.forEach((product) => (total += product.price));
    setCartTotal(total);
    setWishList(wishProducts);
    setCartList(cartProducts);
  }, []);
  const handleRemove = (list, id) => {
    removeFromList(list, id);

    if (list === "wish-list") {
      const newWishList = [...wishList].filter(
        (product) => product.product_id != id
      );
      setWishList(newWishList);
    } 
    else if(list === "cart-list")
    {
      const newCartList = [...cartList].filter(
        (product) => product.product_id != id
      );
      let newtotal=0;
      newCartList.forEach((product)=>newtotal+=product.price);
      setCartTotal(newtotal);
      setCartList(newCartList);  
    }
  };

  return (
    <div className="bg-base-200 pb-10">
      <div className="h-[256px] bg-[#9538E2] w-full text-center text-white flex flex-col gap-2 lg:gap-4 items-center pt-10">
        <h2 className="text-2xl md:text-4xl font-bold">Dashboard</h2>
        <p className="w-3/4 md:w-1/2 text-sm md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-4">
          <button
            className={`btn rounded-3xl shadow-none px-6 ${cart ? bg2 : bg}`}
            onClick={() => setCart(true)}
          >
            Cart
          </button>
          <button
            className={`btn rounded-3xl shadow-none px-6 ${cart ? bg : bg2}`}
            onClick={() => setCart(false)}
          >
            WishList
          </button>
        </div>
      </div>
      <div className="container mx-auto my-12">
        <Tabs selectedIndex={cart ? 0 : 1}>
          <TabList hidden>
            <Tab>Cart</Tab>
            <Tab>WishList</Tab>
          </TabList>
          <TabPanel>
            <div className="flex justify-between items-center">
              <h2 className="font-bold">Cart</h2>
              <div className="flex items-center gap-4">
                <h3 className="font-semibold hidden md:flex">
                  Total Price: {cartTotal}$
                </h3>
                <div className="dropdown dropdown-start rounded-3xl border border-[#8332C5] ">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn text-[#9538E2] rounded-3xl mx-1 w-40"
                  >
                    Sort by {sort}
                    <FaSortAmountDown />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li onClick={() => setSort("Price")}>
                      <a>Price</a>
                    </li>
                    <li onClick={() => setSort("Rating")}>
                      <a>Rating</a>
                    </li>
                  </ul>
                </div>
                <button className={`${bg} btn rounded-3xl`}>Purchase</button>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-6 mt-8">
              {cartList.map((product, idx) => (
                <ListProduct
                  key={idx}
                  product={product}
                  list={"cart-list"}
                  handleRemove={handleRemove}
                ></ListProduct>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between">
              <h2 className="font-bold">WishList</h2>
            </div>
            <div className="flex flex-col gap-3 md:gap-6 mt-8">
              {wishList.map((product, idx) => (
                <ListProduct
                  key={idx}
                  product={product}
                  list={"wish-list"}
                  handleRemove={handleRemove}
                ></ListProduct>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
