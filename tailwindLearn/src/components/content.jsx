import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Content() {
  return (
    <div className="w-100 font-serif">
      <h1 className="text-4xl font-bold my-2 font-sans">Stay Updated!</h1>
      <p className="text-gray-800 py-4 ">
        Join 60,000 managers receiving monthly updates on:
      </p>
      <p className="text-xs py-0.5">
        <FaCheckCircle className="text-red-600 inline-block align-middle mx-1 w-4 h-4" />
        Product discovering and building what matters
      </p>
      <p className="text-xs py-0.5">
        <FaCheckCircle className="text-red-600 inline-block align-middle mx-1 w-4 h-4" />
        Measuring to ensure updates are success
      </p>
      <p className="text-xs py-0.5">
        <FaCheckCircle className="text-red-600 inline-block align-middle mx-1 w-4 h-4" />
        And much more
      </p>
    </div>
  );
}
export default Content
