import { useEffect, useState } from "react";
import axios from "axios"; // Add this line to import Axios

import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
   
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response) {
        setTodos(response.data.todos)
      })
      .catch(function(error) {
        console.error('Error fetching todos:', error);
      });
  }, []);

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({title, description}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
