import { CountersContext } from "../Context/CountersContext";
import { Component } from "react";

class ClassConsumer extends Component {
  render() {
    return (
      <CountersContext.Consumer>
        {
          (value) => {
            const {
              one,
              two,
              setOne,
              setTwo,
            } = value;

            return (
              <div>
                <h1>Class Component with Consumer</h1>
                <h2>{one}</h2>
                <h2>{two}</h2>
                <button onClick={() => setOne(one + 1)}>one</button>
                <button onClick={() => setTwo(two + 1)}>two</button>
              </div>
            )
          }
        }
      </CountersContext.Consumer>
    )
  }
}

export default ClassConsumer