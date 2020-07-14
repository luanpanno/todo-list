import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
            <Button color="#5d5"><FontAwesomeIcon icon={faPlus} /></Button>
        </Form>
    );
}

const Form = styled.form`
    border: 1px solid #ddd;
    padding: 5px 10px;
    display: flex;
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    font-size: 1.4rem;
    border: none;
`;

const Button = styled.button`
    background-color: #5d5;
    border: none;
    color: white;
    height: 100%;
    width: 35px;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
`;

export default TodoForm;