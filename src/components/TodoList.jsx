import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
    let id = 0;
    
    return(
        <Ul>
            {todos.map(todo => {
                if(todo == ''){
                    return null;
                } else{
                    return (<Todo key={id++} todo={todo} deleteTodo={deleteTodo} />);
                }
            })}
        </Ul>
    );
}

const Ul = styled.ul`
    margin: 25px 0;
    width: 100%;
    border-radius: 5px;
`;

export default TodoList;