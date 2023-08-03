import {CountersContextProvider} from "./Context/CountersContext"
import FunctionComponent from "./Components/FunctionComponent"
import ClassContextType from "./Components/ClassContextType"
import ClassConsumer from "./Components/ClassConsumer"
import Wrapper from "./Components/Wrapper"
function App() {
  return (
    <CountersContextProvider>
      <div style={{
        display: "flex",
        gap: '50px',
        backgroundColor: 'lightBlue',
        padding: '40px',
      }}>
        <div>
          <FunctionComponent/>
          <ClassContextType/>
          <ClassConsumer/>
        </div>
        <Wrapper/>
      </div>
    </CountersContextProvider>
  )
}

export default App
