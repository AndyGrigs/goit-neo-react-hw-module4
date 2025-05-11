import React from "react";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button
      className="bg-amber-500 px-4 py-2 border rounded-md hover:shadow-md transition-all "
      onClick={onClick}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
