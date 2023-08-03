import { createContext, useState } from "react";

const CountersContext = createContext();

function CountersContextProvider(props) {
  const {
    children
  } = props;

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);

  const value={
    one,
    two,
    setOne,
    setTwo,
  }

  return (
    <CountersContext.Provider value={value}>
      {children}
    </CountersContext.Provider>
  )
}

export {
  CountersContext,
  CountersContextProvider
}