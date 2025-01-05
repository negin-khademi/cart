import { createContext, useContext, useReducer, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ childern }) => {
  const greeting = 'hello word';

  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
