import { createContext, useReducer } from "react";

const initialState = {
  notice: [
    { kind: "SUCCESS", message: "購買成功" },
    { kind: "FAIL", message: "購買失敗" },
  ],
};

const noticeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTICE":
      return {
        ...state,
        notice: [...state.notice, action.payload],
      };
    default:
      return state;
  }
};

export const NoticeContext = createContext({
  state: initialState,
  dispatch: () => {},
});

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noticeReducer, initialState);

  const providerValue = { state, dispatch };
  return (
    <NoticeContext.Provider value={providerValue}>
      {children}
    </NoticeContext.Provider>
  );
};
