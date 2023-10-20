import { TodoList } from "./pages/home/TodoList"
import { AddTodo } from "./pages/home/AddTodo"
import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

function App(){

  const data = [
    {
      id: uuidv4(),
      title: "Learn HTML and CSS"
    },
    {
      id: uuidv4(),
      title: "Learn JavaScript"
    },
    {
      id: uuidv4(),
      title: "Learn React"
    },
    {
      id: uuidv4(),
      title: "Become a Web Developer"
    }
  ];
  const [todos, setTodos] = useState(() => {
    const localValues = localStorage.getItem("TODOS")
    if (localValues === null) { return [] }
    else {return JSON.parse(localValues)}
  });
  
  useEffect( () => {
    console.log('useEffect');
    localStorage.setItem("TODOS", JSON.stringify(todos))
  }, [todos])

   
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuidv4(),
        title: todo
      }
    ]);
  };

  const handleDeleteTodo = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
    );
  };

  return (
    <div className="container">
      <h4 className="mb-3">Main</h4>
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
