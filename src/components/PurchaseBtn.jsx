import { useState } from "react";
import clsx from "clsx";
import { ReactComponent as LoadingIcon } from "./icons/loading.svg";

function PurchaseBtn({ onPurchase, isLoading, count }) {
  const [quantity, setQuantity] = useState(1);

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
    <div className="flex">
      <input
        type="number"
        className="w-10 text-center rounded-none rounded-l-sm"
        min="0"
        max="5"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button
        type="button"
        className={clsx(
          "w-32 h-10 px-5 py-2 text-white tracking-wider rounded-r-sm",
          "bg-rose-500 hover:bg-rose-600 active:bg-rose-400",
          "flex justify-center items-center",
          isLoading ? "bg-rose-400" : ""
        )}
        onClick={() => onPurchase(quantity)}
        disabled={isLoading}
      >
        {isLoading ? <LoadingIcon className="h-5" /> : "搶購此商品"}
      </button>
    </div>
  );
}

export default PurchaseBtn;
