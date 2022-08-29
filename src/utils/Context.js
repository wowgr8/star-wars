import React, { useState } from "react";
import Characters from "../pages/Characters";
  
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [ selectedPlanet, setSelectedPlanet ] = useState();
  const [ currentView, setCurrentView ] = useState(()=> <Characters />);

  return (
    <Context.Provider value={{ selectedPlanet, setSelectedPlanet, currentView, setCurrentView }}>
      {children}
    </Context.Provider>
  );
};