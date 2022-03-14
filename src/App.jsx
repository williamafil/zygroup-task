import { useState, useContext } from "react";
import clsx from "clsx";

import { NoticeContext } from "./context/notification-context";
import PurchaseBtn from "./components/PurchaseBtn";
import Stock from "./components/Stock";
import NotificationContainer from "./components/notification/NotificationContainer";

function App() {
  const { state, dispatch } = useContext(NoticeContext);
  const [count, setCount] = useState(5);
  const [initInventory, setInitInventory] = useState(1500);
  const [isLoading, setIsLoading] = useState(false);

  const purchaseHandler = () => {
    setIsLoading(true);
    const id = Math.floor(Math.random() * 1000);
    dispatch({
      type: "ADD_NOTICE",
      payload: { id, kind: "SUCCESS", message: "購買成功..." },
    });
    setCount((prev) => (prev -= 1));
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
    </div>
  );
}

export default App;
