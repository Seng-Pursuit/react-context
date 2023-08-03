import ClassConsumer from "./ClassConsumer";
import ClassContextType from "./ClassContextType";
import FunctionComponent from "./FunctionComponent";

function Wrapper () {
  return (
    <div style={{
      backgroundColor: 'lightGray',
      padding: '20px',
    }}>
      <h2>Wrapper Component</h2>
      <FunctionComponent/>
      <ClassContextType/>
      <ClassConsumer/>
    </div>
  )
}

export default Wrapper;