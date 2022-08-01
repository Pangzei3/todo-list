import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {useState, useEffect} from 'react';



function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  const addTodo = (input) => {
    const newTodos = [input, ...todos];
    setTodos(newTodos)
  }

  const handleComplete = (id) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const handleEdit = (id, editText) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.value = editText;
      }
      return todo;
    })
    setTodos(updatedTodos)
  }

  const handleRemove = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !==id);
    setTodos(updatedTodos)
  }

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
    // if todos.length > 1
  }, [todos]);
  //https://stackoverflow.com/questions/72179861/localstorage-data-keeps-resetting-on-page-reload-react-js/72179935
  return (
    <div className="App">
      
      <h1>Add Your Plan for Today</h1>
      <TaskForm addTodo={addTodo} />
      <TaskList 
        todos = {todos}
        handleComplete = {handleComplete}
        handleEdit = {handleEdit}
        handleRemove = {handleRemove}
      />
      {todos.length>1 ? <button onClick={() => setTodos([])} className="btn-reset">Reset All</button> : null }
      
    
    </div>
  );
}

export default App;
