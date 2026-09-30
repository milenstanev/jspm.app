/**
 * Home Component description or something
 */
import template from './home.html!text';
import { CtrlBase } from '../lib/asd.js';

function decor(ref) {
  ref.prototype.map = ref.prototype.map || new Map();
  ref.prototype.map.set('test', 'Test');

  return ref;
}

class HomeCtrl extends CtrlBase {
  constructor() {
    super();
    this.theText = 'default';
  }

  //region data get/set
  get data() {
    if(this.dataProvider && this.dataProvider.size) {
      return Array.from(this.dataProvider.get('data'));
    } else {
      return [];
    }
  }
  set data(data) {
    if(!data instanceof Set) {
      throw new Error(`expect {Set} instead of {${typeof data}}`);
    }

    data.forEach(item => this.dataProvider.get('data').add(item));
  }
  //endregion

  add(itemData) {
    this.addItem(itemData);
    this.theText = '';
  }
}
HomeCtrl.$inject = [];

export const HomeComponent = {
  bindings: {
    title: '@',
    user: '<',
    dataProvider: '<',
    addItem: '<',
    removeItem: '<',
    onDestroy: '<'
  },
  template,
  controller: HomeCtrl
};
