import "./todoprogress.css";

export default function ToDoProgress({ todoList, setToDoList }) {

    let completed = todoList.filter((isCompleted) => isCompleted.isCompleted === true).length
    return (
        <div className="progress-container">
            <p> {completed} / {todoList.length} Completed</p>
            <button onClick={() => {
                setToDoList(todoList.filter((isCompleted) => isCompleted.isCompleted === false))
            }}>Clear Completed</button>
        </div>
    )
}