import { createContext, useState } from "react";

export const SwapContext = createContext();

export const SwapProvider = (props) => {
  const [user, setUser] = useState();

  console.log(user);
  return (
    // Creacion de contexto ,al que le enviamos los elemntos que requiriremos en los componentes de la aplicacion, mediante el metodo provider y su atributo value
    <SwapContext.Provider
      value={{
        user,
      }}
    >
      {props.children}
    </SwapContext.Provider>
  );
};
