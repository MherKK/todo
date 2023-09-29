import { useEffect, useState } from 'react'
import './App.css'
import AddToDo from './components/addtodos/AddToDo'
import ListOfToDos from './components/listodtodo/ListOfToDos'
import ToDoProgress from './components/todoprogress/ToDoProgress'

function App() {


  let [todoList, setToDoList] = useState([
    { id: 1, todoText: "Learn JavaScript", isCompleted: false },
    { id: 2, todoText: "Learn TypeScript", isCompleted: false },
    { id: 3, todoText: "Learn React.JS", isCompleted: false }
  ])

  return (
    <div className='app-container'>
      <AddToDo todoList={todoList} setToDoList={setToDoList} />
      <ListOfToDos todoList={todoList} setToDoList={setToDoList} />
      <ToDoProgress todoList={todoList} setToDoList={setToDoList} />
    </div>
  )
}

export default App
