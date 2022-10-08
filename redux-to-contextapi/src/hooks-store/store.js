import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

// 이 훅의 state의 값이 바뀌면 이 훅을 사용하고 있는 모든 컴포넌트는 재랜더링 된다.
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1]; // useState를 사용할 때 listener로써 setState가 등록되어 있으면 자동으로 리랜더링 된다.

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState); // setState(변환값) 을 넣어서 state의 값이 변했으면 이 훅을 사용하고 있는 모든 컴포넌트는 재랜더링이 일어난다.
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
