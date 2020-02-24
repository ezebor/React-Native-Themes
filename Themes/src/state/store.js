import React, {createContext, useReducer} from 'react';

import {Dark, Light} from '../styles/index';
import {ThemesEvents} from '../events/index';

const initialState = Light;
const store = createContext(initialState);
const {Provider} = store;

function StateProvider({children}) {
  const [state, dispatch] = useReducer((state, {type}) => {
    switch (type) {
      case ThemesEvents.to_dark:
        return {
          ...state,
          ...Dark,
        };
      case ThemesEvents.to_light:
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

export {store, StateProvider};
