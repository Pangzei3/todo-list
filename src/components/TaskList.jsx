import React, {useState} from 'react';
import './taskList.css'

const TaskList = ({todos, handleComplete, handleEdit, handleRemove}) => {

  const [editingId, setEditingId] = useState(null)
  const [editingInput, setEditingInput] = useState("")

  
  const handleEditStates = (id, editText) => {
    if (editText === "") {alert("Your plan can not be empty"); return}
    handleEdit(id, editText);
    setEditingId(null);
    setEditingInput("")
  }
  const handleEditInput = (id, currentValue) => {
    setEditingId(id);
    setEditingInput(currentValue);
  }
  return (
    <>
      {todos.map((todo) => (
        <div className="task" key={todo.id}>
          <div className="todo-text">
            {todo.id === editingId ? (
              <input type="text" onChange={(e) => setEditingInput(e.target.value)} value={editingInput}/>              
            ) : (
              <div className={todo.completed ? 'completed value' : 'value'}>{todo.value}</div>
            )}
          </div>
          <div className="todo-actions">
            <input type="checkbox" id="completed" checked={todo.completed} onChange={() => handleComplete(todo.id)}/>
            {todo.id === editingId ? (
              <button onClick ={() => handleEditStates(todo.id, editingInput)} style={{color: 'lightgreen'}}>Save</button>
            ) : (
              <button onClick={() => handleEditInput(todo.id, todo.value)}>Edit</button>
            )}
            <button  onClick={() => handleRemove(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default TaskList