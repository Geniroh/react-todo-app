import './App.css';
import { useState, useEffect } from 'react';
import { Button, TextField, FormControl, Input, FormHelperText, InputLabel } from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import { collection, getDocs, onSnapshot, orderBy, query, where, addDoc, serverTimestamp } from 'firebase/firestore';

//Project Console: https://console.firebase.google.com/project/react-todo-list-2f590/overview
//Hosting URL: https://react-todo-list-2f590.web.app

function App() {
  const [todos, setTodos] = useState(['A test']);
  const [input, setInput] = useState('');
  const mycollection = collection(db, 'todos');
  const myquery = query(mycollection, orderBy('createdAt','desc'));

  useEffect(() => {

    onSnapshot(myquery, (snapshot)=>{
        setTodos(snapshot.docs.map(doc=> doc.data().task));
    })
  }, []);

  const addTodo = (e)=>{
    // setInput('');
    addDoc(mycollection,{
        task: input,
        createdAt: serverTimestamp()
    })
    .then(()=>{
      setInput('');
    })
    setTodos([...todos, input])
  }

  return (
    <div className="App">
      <h1>Hi there</h1>
      <form onSubmit={(e)=> e.preventDefault()}>
        <FormControl>
          <InputLabel htmlFor="my-input">Write a todo</InputLabel>
          <Input id="my-input" value={input} onChange={(e)=> setInput(e.target.value)}/>
        </FormControl>
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={addTodo}>
          Add
        </Button>

      </form>

      <ul>
        {todos.map((todo, i)=>(
          <Todo todo={todo}  key={i}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
