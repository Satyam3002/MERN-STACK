import { useState } from "react";
import { useEffect } from "react";
import axios  from "axios";

function App() {
  const [selectId,setSelectId] = useState(1);

  return <div>
    <button onClick={function() {
      setSelectId(1)
    }}>1</button>

   <button onClick={function() {
      setSelectId(2)
    }}>2</button>

   <button onClick={function() {
      setSelectId(3)
    }}>3</button> 

    <Todo id={selectId} />   
  </div>
}

function Todo({id}) {
  const [todo,setTodo] = useState({})

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
      .then(function(response) {
        // Assuming the API always returns an array under 'todos', even for a single item
        // Extract the first item from the array, as we're fetching by a specific ID
        const todoItem = response.data.todos[0]; // Get the first item
        setTodo(todoItem || {}); // Set the todo state, or an empty object if the array is empty
      })
  }, [id]);
  

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>

    <h4>
      {todo.description}
    </h4>

  </div>
} 

export default App;