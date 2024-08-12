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
  increment() {
    this.count++;
  }
  decrement() {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
}

const counterStore = new CounterStore();
export default counterStore;
