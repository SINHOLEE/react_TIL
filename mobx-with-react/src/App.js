
import Counter from './component/Counter';
import SuperMarket from './component/SuperMarket';
import React from 'react';
import DevTools from 'mobx-react-devtools';
// import './App.css';

function App() {
  return (
    <div className="App">
        <Counter />
        <SuperMarket></SuperMarket>
        {/* {process.env.NODE_ENV === 'development' && <DevTools />} */}

    </div>
  );
}

export default App;
