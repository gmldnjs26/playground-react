import { useState, useReducer } from "react";

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
};

const useHttp = (requestFunction, startWithPending) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    status: startWithPending ? "pending" : "",
  });

  const sendRequest = async (requestData) => {
    dispatch({ type: "PENDING" });
    try {
      const res = await requestFunction(requestData);
      dispatch({ type: "SUCCESS", data: res });
    } catch (err) {
      dispatch({
        type: "ERROR",
        errorMessage: error.message || "Something went wrong!",
      });
    }
  };

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
