import {CountersContextProvider} from "./Context/CountersContext"
import FunctionComponent from "./Components/FunctionComponent"
import ClassContextType from "./Components/ClassContextType"
import ClassConsumer from "./Components/ClassConsumer"

function App() {
  return (
    <CountersContextProvider>
      <FunctionComponent/>
      <ClassContextType/>
      <ClassConsumer/>
    </CountersContextProvider>
  )
}

export default App
