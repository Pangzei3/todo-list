import React, {useState, useRef, useEffect} from 'react';
import './taskForm.css'

function TaskForm(props) {
  const [input, setInput] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '') {alert("Your plan can not be empty"); return}
    props.addTodo({
      id: Math.floor(Math.random()*10000),
      value: input,
      completed: false,
    })
    setInput("")
  }

  return (
    <div className="taskForm">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a task' onChange={(e) => setInput(e.target.value)} value={input} ref={inputRef} />
        <button type="submit" className="addButton">Add Task</button>
      </form>
    </div>
  )
}

export default TaskForm