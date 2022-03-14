import { createContext, useReducer } from "react";

const initialState = {
  notice: [],
};

const noticeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTICE":
      return {
        ...state,
        notice: [...state.notice, action.payload],
      };
    case "REMOVE_NOTICE":
      const remaining = state.notice.filter(
        (notice) => notice.id !== action.payload
      );
      return {
        ...state,
        notice: remaining,
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
