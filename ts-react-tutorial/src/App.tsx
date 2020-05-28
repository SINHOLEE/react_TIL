import React from 'react';
import logo from './logo.svg';
import Greetings from './Greetings';
import Counter from './Counters';
import MyForm from './MyFrom';
import './App.css';

function App() {
  const onClick = (name:string) => {
    console.log(`${name} says hello`)
  }
  const onSubmit = (form: {name: string; description:string}) =>{
    console.log(form);
  }
  return (
    <div className="App">
      <Greetings name="sinho"  onClick={onClick}></Greetings>
      <MyForm onSubmit={onSubmit}></MyForm>
      <Counter></Counter>
    </div>
  );
}

export default App;
