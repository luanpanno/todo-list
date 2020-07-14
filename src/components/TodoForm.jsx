import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Form, Input, ButtonAdd } from './styles';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState([]);

    function handleTaskInputChange(e){
        setTodo(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo === ''){
            return;
        }
        addTodo(todo);
        setTodo('');
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                name="task"
                value={todo}
                onChange={handleTaskInputChange} />
            <ButtonAdd color="#5d5"><FontAwesomeIcon icon={faPlus} /></ButtonAdd>
        </Form>
    );
}

export default TodoForm;