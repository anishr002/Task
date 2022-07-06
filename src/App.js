import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Task2 } from './components/Task2';
import { Task1 } from './components/Task1';
import { Task3 } from './components/Task3';

function App() {
  return (
    <div className="App">
      <div>
     <h3>React Task</h3>
     </div>
     <div style={{marginTop:20}}>
      
      <Task1/>
     </div>
     {/* <div style={{marginTop:20}}>
     <Task2/>
     </div> */}
     <div style={{marginTop:20}}>
     <Task3/>
     </div>
    </div>
  );
}

export default App;
