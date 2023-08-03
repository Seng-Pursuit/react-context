import { CountersContext } from "../Context/CountersContext";
import { useContext } from "react";

function FunctionComponent() {
  const {
    one,
    two,
    setOne,
    setTwo,
  } = useContext(CountersContext);

  return (
    <div>
      <h1>Function Component</h1>
      <h2>{one}</h2>
      <h2>{two}</h2>
      <button onClick={() => setOne(one + 1)}>one</button>
      <button onClick={() => setTwo(two + 1)}>two</button>
    </div>
  )  
}

export default FunctionComponent