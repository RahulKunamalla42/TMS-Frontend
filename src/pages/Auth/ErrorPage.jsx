import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[15rem] text-center bg-gray-100">
      <h1
        className="text-6xl font-bold mb-4 animate-bounce"
      >
        404
      </h1>
      <h1 className="text-2xl mb-4">
        Oops! The page you're looking for doesn't exist.
      </h1>
      <button className="mt-4" href="/">
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
