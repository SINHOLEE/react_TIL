import React, { useState } from 'react';
import TodoItemList from './TodoItemList';
interface Todo{ 
  id: number; 
  text: string; 
  done: boolean 
};

function Counter() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  const updateTodo = () => { setTodos(todos.concat(
[{
  id: 1,
  text: "아무것도 하기 싫타",
  done:true
}]
  )
    )
  console.log(todos)}
  
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={updateTodo}>update Todo</button>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <TodoItemList todos={todos}></TodoItemList>

      </div>

    </div>
  );
}

export default Counter;
