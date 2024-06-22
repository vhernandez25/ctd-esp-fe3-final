import React, { createContext, useReducer, useEffect } from 'react';
import globalReducer from './globalReducer';

const initialState = {
  theme: 'light',
  dentists: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
