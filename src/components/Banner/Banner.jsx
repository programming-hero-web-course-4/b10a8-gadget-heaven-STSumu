import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-[#9538E2] min-h-screen flex flex-col rounded-4xl  relative text-white mb-96">
      <div className="hero-content text-center h-[500px]">
        <div className="max-w-5xl space-y-8 flex flex-col justify-center items-center">
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
        <div className="absolute max-w-4xl p-2 md:p-5 bg-gray-300/50 border-2 border-gray-400 rounded-4xl top-2/3">
          <img src="/banner.jpg" className="rounded-3xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
