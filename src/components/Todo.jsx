import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { Li, Div, InputCheckbox, Span, ButtonTrash } from './styles';

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
            <ButtonTrash><FontAwesomeIcon icon={faTrash} onClick={handleDeleteTodo} /></ButtonTrash>
        </Li>
    );
}

export default Todo;