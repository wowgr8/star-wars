import React, { useState } from "react";
  
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [ selectedPlanet, setSelectedPlanet ] = useState();
  
  return (
    <Context.Provider value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </Context.Provider>
  );
};