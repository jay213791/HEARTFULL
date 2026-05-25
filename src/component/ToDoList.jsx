import style from './ToDoList.module.css'
import { useState, useEffect } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")

    const addList = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input])
            setInput("")
        }
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return(
        <div className={style.container}>
            <h1>To Do List</h1>
            <input type="text" placeholder='add to do' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addList}>Add</button>
            <ul>
                {tasks.map((tasks, index) => <li key={index}>{tasks}</li>)}
            </ul>
        </div>
    );
}

export default ToDoList