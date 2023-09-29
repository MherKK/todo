import { useRef } from "react"
import "./addtodos.css"

export default function AddToDo({ todoList, setToDoList }) {
    const text = useRef()

    return (
        <div className="add-container">
            <input placeholder="What Needs to be done?" type="text" ref={text} />
            <button onClick={() => {
                if (text.current.value !== "") {
                    setToDoList([...todoList, { id: todoList.length + 1.1, todoText: text.current.value, isCompleted: false }])
                    text.current.value = ""
                }
            }}>Add</button>
        </div>
    )
}