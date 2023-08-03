import { CountersContext } from "../Context/CountersContext";
import { Component } from "react";

class ClassContextType extends Component {
  static contextType = CountersContext;

  render() {
    const {
      one,
      two,
      setOne,
      setTwo,
    } = this.context;

    return (
      <div>
        <h1>Class Component with contextType</h1>
        <h2>{one}</h2>
        <h2>{two}</h2>
        <button onClick={() => setOne(one + 1)}>one</button>
        <button onClick={() => setTwo(two + 1)}>two</button>
      </div>
    )
  }
}

export default ClassContextType