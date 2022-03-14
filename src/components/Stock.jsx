import clsx from "clsx";

function Stock({ count, initInventory }) {
  return (
    <div className="w-32 p-1 space-y-1">
      <h2 className="text-xs font-semibold">庫存</h2>
      <p className="text-gray-600 flex">
        <span
          className={clsx(
            "flex-1 text-2xl font-semibold",
            count <= 10 ? "text-red-500" : ""
          )}
        >
          {count}
        </span>
        <span className="text-5xl font-thin">/</span>
        <span className="self-end font-light">{initInventory}</span>
      </p>
    </div>
  );
}

export default Stock;
