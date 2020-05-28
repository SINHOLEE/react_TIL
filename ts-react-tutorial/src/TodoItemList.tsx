import React, { useState, ReactElement } from 'react';
import TodoItem from './TodoItem';

interface Todo{ 
    id: number; 
    text: string; 
    done: boolean 
  };


interface Props{
    todos:Todo[]
}
function TodoItemList({todos}: Props): ReactElement {
    const todosList = todos.map((todo:Todo, index:number)=>{
        return (
            <TodoItem todo={todo} key={index}></TodoItem>
        )
    })
    return (
        <ul>
            {todosList}
        </ul>
    )
    }

export default TodoItemList;