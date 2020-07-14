import React, { useState } from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

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
      <Nav>ToDo List</Nav>
      <Div>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </Div>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  padding: 10px;
  background-color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  position: absolute;
  top: 0;
`;

const Div = styled.div`
  background-color: #fff;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  width: 50vw;
  min-width: 300px;
`;

export default App;
