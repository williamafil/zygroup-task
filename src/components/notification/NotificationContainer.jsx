import { useContext } from "react";
import clsx from "clsx";
import { NoticeContext } from "../../context/notification-context";

function NotificationContainer() {
  const { state, dispatch } = useContext(NoticeContext);

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

  return (
    <div className="absolute top-2 left-0 right-0 flex justify-center">
      <section className="flex flex-col gap-2">
        {state.notice.map((notice, idx) => (
          <article
            key={idx}
            className={clsx(
              "h-8 w-60 bg-blue-200 text-xs tracking-wider rounded-sm flex justify-center items-center",
              bgColor(notice.kind)
            )}
          >
            {notice.message}
          </article>
        ))}
      </section>
    </div>
  );
}

export default NotificationContainer;
