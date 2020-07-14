import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { AppDiv, Nav, Container } from './components/styles';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  function deleteTodo(todo){
    todos.splice(todos.indexOf(todo), 1);
    setTodos([...todos]);
  }

  return (
    <AppDiv>
      <Nav>Todo List</Nav>
      <Container>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </Container>
    </AppDiv>
  );
}

export default App;
