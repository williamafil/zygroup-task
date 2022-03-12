import React from "react";

function Stock() {
  return (
    <div className="w-32 p-1 space-y-1">
      <h2 className="text-xs font-semibold">庫存</h2>
      <p className="text-gray-600 flex">
        <span className="flex-1 text-2xl font-semibold">1234</span>
        <span className="text-5xl font-thin">/</span>
        <span className="self-end font-light">1500</span>
      </p>
    </div>
  );
}

export default Stock;