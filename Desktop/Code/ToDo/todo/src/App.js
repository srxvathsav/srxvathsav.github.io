import { useEffect, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
function App() {
  const [todo, setTodo] = useState(()=>{
    const data = localStorage.getItem("TASKS")
    if(data==null)
      return []
    return JSON.parse(data)
  })

  useEffect(()=>{
    localStorage.setItem("TASKS",JSON.stringify(todo))
  },[todo])

  function addItems(title) {
    setTodo(current => {
      return [
        ...current,
        {
          id: crypto.randomUUID(),
          title: title,
          status: false
        },
      ]
    })

  }

  function toggleFun(id, status) {
    setTodo(current => {
      return current.map(x => {
        if (x.id === id) {
          return { ...x, status };
        }
        return x
      })
    })
  }

  function deleter(id) {
    setTodo(current => {
      return current.filter(x => x.id !== id)
    })
  }

  console.log(todo);
  return (
    <>
      {/* for using props */}
      <Form onSubmit={addItems} /> 
      <h1 className='header'>To-Do List</h1>
      <List todo={todo} toggleFun={toggleFun} deleter={deleter}/>
    </>
  );
}

export default App;
