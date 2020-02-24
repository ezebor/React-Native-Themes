import React, {createContext, useReducer} from 'react';

import {Dark, Light} from '../styles/index';

const initialState = {};
const store = createContext(initialState);
const {Provider} = store;

export function StateProvider({children}) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE_TO_DARK_THEME':
        return {
          ...state,
          ...Dark,
        };
      case 'CHANGE_TO_LIGHT_THEME':
        return {
          ...state,
          ...Light,
        };
      default:
        return {
          ...state,
          ...Light,
        };
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
}

export {store};
