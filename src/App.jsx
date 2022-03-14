import { useState } from "react";
import clsx from "clsx";

import PurchaseBtn from "./components/PurchaseBtn";
import Stock from "./components/Stock";

function App() {
  const [count, setCount] = useState(5);
  const [initInventory, setInitInventory] = useState(1500);
  const [isLoading, setIsLoading] = useState(false);

  const purchaseHandler = () => {
    setIsLoading(true);
    setCount((prev) => (prev -= 1));
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div
      className={clsx(
        "w-full h-screen bg-neutral-200",
        "flex flex-col justify-center items-center gap-6"
      )}
    >
      <Stock count={count} initInventory={initInventory} />
      <PurchaseBtn
        onPurchase={purchaseHandler}
        isLoading={isLoading}
        count={count}
      />
    </div>
  );
}

export default App;
