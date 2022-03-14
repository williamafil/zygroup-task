import { useState, useContext } from "react";
import clsx from "clsx";

import { NoticeContext } from "./context/notification-context";
import PurchaseBtn from "./components/PurchaseBtn";
import Stock from "./components/Stock";
import NotificationContainer from "./components/notification/NotificationContainer";

function App() {
  const { state, dispatch } = useContext(NoticeContext);
  const [count, setCount] = useState(12);
  const [initInventory, setInitInventory] = useState(1500);
  const [isLoading, setIsLoading] = useState(false);

  const purchaseHandler = (quantity) => {
    const id = Math.floor(Math.random() * 1000);

    if (quantity > 5) {
      dispatch({
        type: "ADD_NOTICE",
        payload: { id, kind: "FAIL", message: "最大限購 5 台" },
      });
      return;
    }

    if (!quantity || quantity <= 0) {
      dispatch({
        type: "ADD_NOTICE",
        payload: { id, kind: "FAIL", message: "購買數量不可為 0 或低於 0" },
      });
      return;
    }

    setIsLoading(true);

    if (count >= quantity) {
      dispatch({
        type: "ADD_NOTICE",
        payload: { id, kind: "SUCCESS", message: "購買成功..." },
      });
      setCount((prev) => (prev -= quantity));
    } else {
      dispatch({
        type: "ADD_NOTICE",
        payload: { id, kind: "FAIL", message: "庫存不足，請修改購買數量" },
      });
    }

    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div
      className={clsx(
        "relative",
        "w-full h-screen bg-neutral-200",
        "flex flex-col justify-center items-center gap-6"
      )}
    >
      <NotificationContainer />
      <Stock count={count} initInventory={initInventory} />
      <PurchaseBtn
        onPurchase={purchaseHandler}
        isLoading={isLoading}
        count={count}
      />
      <p className="text-xs">*每次限購 5 個</p>
    </div>
  );
}

export default App;
