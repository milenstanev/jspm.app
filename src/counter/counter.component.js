import template from './counter.html!text';
import { CtrlBase } from '../lib/asd.js';

class CounterCtrl extends CtrlBase {
  constructor() {
    super();
    this.value = 0;
  }

  increment() {
    this.value += 1;
  }

  decrement() {
    this.value -= 1;
  }
}
CounterCtrl.$inject = [];

export const CounterComponent = {
  template,
  controller: CounterCtrl
};
