import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const DUMMY_TODOS= [
  {
    id:1,
    title:"Attend the React Course"
    
  },
  {
    id:2,
    title:"Build a ToDO List"
    
  },
  {
    id:3,
    title:"???"
    
  },
  
];
function App() {
  const [todos,setTodos] = useState(DUMMY_TODOS);
  const [inputValue, setinputValue] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    setTodos((prevtodos) => {
      const newTodo = {
        id: Math.floor(Math.random()*1000) + todos.length,
        title: inputValue,
      };
      setinputValue(" ");
      return [...prevtodos, newTodo]
      

    }
  )};
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setinputValue(event.target.value);
  }
  return (
  <main>
    <h1>ToDO List</h1>

    <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={handleInputChange} />
    <button>Submit</button>
    </form>
 
    <h2>My ToDOs</h2>

    <ul className="list-inside list-disc">
      {todos.map((todo) =>(
        <li key={todo.id}>{todo.id} {todo.title}</li>
      ))}
    </ul>
  </main>
  
) ;

}

export default App
