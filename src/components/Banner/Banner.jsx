import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-[#9538E2] min-h-screen flex flex-col rounded-b-4xl  relative text-white mb-20 md:mb-72 lg:mb-[500px]">
      <div className="hero-content text-center h-[500px]">
        <div className="max-w-5xl space-y-4 lg:space-y-8 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold leading-relaxed">
            Upgrade Your Tech Accessorize with <br></br> Gadget Heaven Accessories
          </h1>
          <p className="py-6 max-w-3xl">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-white text-[#9538E2] rounded-4xl">Shop Now</button>
        </div>
        <div className="absolute w-3/4 p-2 md:p-5 bg-gray-300/40 border-4 border-white rounded-4xl top-2/3 h-[611px]">
          <img src="/banner.jpg" className="rounded-3xl object-cover h-full w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
