import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className='container-main'>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
