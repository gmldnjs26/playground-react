import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      error: null,
      data: action.resposeData,
    };
  }

  if (action.type === "ERROR") {
    return {
      status: "completed",
      error: action.errorMessage,
      data: action.resposeData,
    };
  }

  if (action.type === "PENDING") {
    return {
      status: "pending",
      error: null,
      data: null,
    };
  }
  return state;
};

const useHttp = (requestFunction, startWithPending) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    status: startWithPending ? "pending" : "",
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "PENDING" });
      try {
        const res = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", resposeData: res });
      } catch (err) {
        dispatch({
          type: "ERROR",
          errorMessage: err.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
