import { makeObservable, observable, action } from "mobx";

class CounterStore {
  count = 1;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
    });
  }
  // переменные состояния
  increment() {
    this.count++;
    // console.log("increment", this.count);
  }
  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    }

    // console.log("decrement", this.count);
  }
}

const counterStore = new CounterStore();
export default counterStore;
