import React, {ReactElement} from 'react';


interface Todo{ 
  id: number; 
  text: string; 
  done: boolean 
};
interface Props{
    todo : Todo;
}

function TodoItem({todo}: Props):ReactElement {
    return(
        <div>
            <div>
            {todo.id}     
            </div>
            <div>
            {todo.text}
            </div>
            <div>
            {todo.done}
            </div>
        </div>
    )
}


export default TodoItem;
