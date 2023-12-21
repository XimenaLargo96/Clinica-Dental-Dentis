/* eslint-disable */ 

import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider() {
  return (
    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
  )
}
