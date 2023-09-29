import "./listoftodo.css"

export default function ListOfToDos({ todoList, setToDoList }) {
    return (
        <div className="list-container">
            {todoList.map((todos) => {
                return (
                    <div key={todos.id}>
                        <div>
                            <input type="checkbox" onClick={(e) => {
                                setToDoList(todoList.map((todo) => {
                                    if (todos.id === todo.id) {
                                        return { ...todo, isCompleted: !todo.isCompleted }
                                    } else {
                                        return todo
                                    }

                                }))
                            }} />
                            <span>{todos.todoText}</span>
                        </div>
                        <button onClick={() => {
                            setToDoList(todoList.filter((id) => id.id !== todos.id))

                        }}>X</button>
                    </div>
                )
            })}
        </div >
    )
}