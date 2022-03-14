import { useContext } from "react";
import { NoticeContext } from "../../context/notification-context";

import Notice from "./Notice";

function NotificationContainer() {
  const { state, dispatch } = useContext(NoticeContext);

  const removeNoticeHandler = (id) => {
    dispatch({ type: "REMOVE_NOTICE", payload: id });
  };

  return (
    <div className="absolute top-2 left-0 right-0 flex justify-center">
      <section className="flex flex-col gap-2">
        {state.notice.map((notice) => (
          <Notice
            key={notice.id}
            notice={notice}
            onRemove={removeNoticeHandler}
          />
        ))}
      </section>
    </div>
  );
}

export default NotificationContainer;
