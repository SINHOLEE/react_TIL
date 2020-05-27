import CounterStore from './Counter';
import MarketStore from './Market';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.market = new MarketStore(this);
  }
}

export default RootStore;