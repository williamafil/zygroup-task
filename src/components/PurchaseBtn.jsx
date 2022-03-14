import React from "react";
import clsx from "clsx";
import { ReactComponent as LoadingIcon } from "./icons/loading.svg";

function PurchaseBtn({ onPurchase, isLoading, count }) {
  if (count <= 0) {
    return (
      <h3
        className={clsx(
          "w-32 h-10 px-5 py-2 text-sm text-gray-400 tracking-wider rounded-sm border border-neutral-400",
          "text-center"
        )}
      >
        已售完
      </h3>
    );
  }

  return (
    <button
      type="button"
      className={clsx(
        "w-32 h-10 px-5 py-2 text-white tracking-wider rounded-sm",
        "bg-rose-500 hover:bg-rose-600 active:bg-rose-400",
        "flex justify-center items-center",
        isLoading ? "bg-rose-400" : ""
      )}
      onClick={onPurchase}
      disabled={isLoading}
    >
      {isLoading ? <LoadingIcon className="h-5" /> : "搶購此商品"}
    </button>
  );
}

export default PurchaseBtn;
