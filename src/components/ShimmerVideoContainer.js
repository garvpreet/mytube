import React from "react";

const ShimmerVideoContainer = () => {
  return (
    <div className="flex flex-wrap">
      {[...Array(30)].map((e, i) => (
        <div
          key={i}
          className="m-2 w-60 h-[300px] shadow-lg bg-gray-100 dark:bg-slate-600"
        >
          <div className="w-50 h-[150px] bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerVideoContainer;
