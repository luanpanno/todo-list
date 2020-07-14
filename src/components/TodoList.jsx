import React from 'react';
import Todo from './Todo';

import { Ul } from './styles';

const TodoList = ({ todos, deleteTodo }) => {
    let id = 0;
    
    return(
        <Ul>
            {todos.map(todo => {
                todo = todo.trim();
                if(todo == ''){
                    return null;
                } else{
                    return (<Todo key={id++} todo={todo} deleteTodo={deleteTodo} />);
                }
            })}
        </Ul>
    );
}

export default TodoList;