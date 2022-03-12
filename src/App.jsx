import PurchaseBtn from "./components/PurchaseBtn";
import Stock from "./components/Stock";

function App() {
  return (
    <div className=" bg-neutral-200 w-full h-screen flex flex-col justify-center items-center gap-6">
      <Stock />
      <PurchaseBtn />
    </div>
  );
}

export default App;
