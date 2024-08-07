import React,{useEffect,useState} from "react"
import Task from "./Task"
import TodoForm from "./TodoForm"

export default function Todolist(){
    const [add,setAdd]=useState(true)
    const [todos,setTodos]=useState([])
   
    const addTodo = (todo) => {
        console.log('todo',todo)
        setTodos([...todos, { id: Date.now(), name: todo, done: false }]);
    };

    const toggleDone= (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          )
        );
      };

      useEffect(()=>{
          console.log(todos)
              },[todos])
    return(
        <div className="max-w-lg ">
            <h1 className="text-2xl font-bold mb-4">My to do list</h1>
            {add && <TodoForm addTodo={addTodo}/>}
            {/**Notre liste */}
            <div className="mt-4 flex flex-col">
                {todos.map((todo) => {
                    console.log(todo.name)
                return(
                <Task
                    key={todo.id}
                    name={todo.name}
                    id={todo.id}
                    toggleDone={toggleDone}
                    done={todo.done}
                />
                ) })}
      </div>
        </div>
    )

}