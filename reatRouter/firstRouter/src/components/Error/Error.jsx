import React from "react";

const Error = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-red-800 font-bold text-6xl">Page error: 474</h1>
      <div>
        <p className="my-4 block">
          The error you recived, because you are using Wrong url Please Check
          link.
        </p>
      </div>
    </div>
  );
};

export default Error;
