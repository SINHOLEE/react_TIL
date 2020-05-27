import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
class Counter extends Component{
  // @observable number = 0;
  
  // @action
  // increase = () => {
  //   console.log(this ,"+")
  //   this.number++;
  // }
  
  // @action
  // decrease = () => {
  //   console.log(this, "-")
  //   this.number--;  
  // }
  
  render() {
    const { counter } = this.props;
    return (
      <div>
      <h1>
        {counter.number}
      </h1>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
      </div>
      );
    }
  }

// decorate(Counter, {
//   number:observable,
//   // 여기서 왜 액션을 쓸까? 컴푸티드가 아니고....
//   increase:action,
//   decrease:action
// })
  


// export default observer(Counter);
export default Counter;