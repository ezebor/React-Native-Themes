import React, {createContext, useReducer} from 'react';

import {Dark, Light} from '../components/Themes';

const initialState = Light;
const store = createContext(initialState);
const {Provider} = store;

function StateProvider({children}) {
  const [state, dispatch] = useReducer((state, {type}) => {
    switch (type) {
      case Dark.turn_off:
        return {
          ...state,
          ...Light,
        };
      case Light.turn_off:
        return {
          ...state,
          ...Dark,
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
