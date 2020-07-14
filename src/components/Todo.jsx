import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ todo, deleteTodo }) => {
    const [marked, setMarked] = useState(false);

    function handleCheckbox(e){
        setMarked(e.target.checked);
    }

    function handleDeleteTodo(){
        deleteTodo(todo);
    }

    return(
        <Li mark={marked}>
            <Div>
                <InputCheckbox type="checkbox" onChange={handleCheckbox} />
                <Span>{todo}</Span>
            </Div>
            <Button><FontAwesomeIcon icon={faTrash} onClick={handleDeleteTodo} /></Button>
        </Li>
    );
}

const Li = styled.li`
    text-decoration: ${props => (props.mark) ? 'line-through' : 'none'};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-direction: column; */
    border-bottom: 1px solid #eee;
    padding: 15px;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
`;

const InputCheckbox = styled.input`
`;

const Span = styled.span`
    font-size: 1.2rem;
    margin-left: 10px;
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: #f00;
    font-size: 1.4rem;
    cursor: pointer;
`;

export default Todo;