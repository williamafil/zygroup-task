import { useEffect } from "react";
import clsx from "clsx";
import { ReactComponent as RemoveIcon } from "../icons/remove.svg";

function Notice({ notice, onRemove }) {
  const bgColor = (kind) => {
    switch (kind) {
      case "SUCCESS":
        return "bg-green-300";
      case "FAIL":
        return "bg-rose-300";
      default:
        return "";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => onRemove(notice.id), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article
      className={clsx(
        "relative",
        "h-8 w-60 text-xs tracking-wider rounded-sm flex justify-center items-center",
        bgColor(notice.kind)
      )}
    >
      {notice.message}
      <RemoveIcon
        onClick={() => onRemove(notice.id)}
        className="absolute my-auto top-0 bottom-0 right-2 w-4 cursor-pointer text-gray-600"
      />
    </article>
  );
}

export default Notice;
