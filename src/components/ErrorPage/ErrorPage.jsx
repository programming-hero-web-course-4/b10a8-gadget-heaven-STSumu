import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col text-center h-screen space-y-3">
      <div className="flex-1 flex items-end justify-center mb-0">
        <h1 className="text-9xl font-bold text-gray-300 mb-0">404</h1>
      </div>
      <div className="bg-gray-300 flex-1 text-gray-600 pt-10 space-y-2 md:space-y-4">
        <h5 className="mt-0 text-6xl">Sorry, Page Not Found</h5>
        <p className="text-base">The page you requested could not be found.</p>
        <button className="rounded-2xl btn border-0 shadow-none bg-gray-600 text-white">
          <NavLink to="/">Go Back Home</NavLink>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
