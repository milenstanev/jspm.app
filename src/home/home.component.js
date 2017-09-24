/**
 * Home Component description or something
 */
import template from './home.html!text';
// import { Map } from 'immutable';

function decor(ref) {
  ref.prototype.map = ref.prototype.map || new Map();
  ref.prototype.map.set('test', 'Test');

  return ref;
}

//region CtrlBase
function make$Inject(args) {
  this.constructor.$inject.map((item, index) => {
    this[item] = args[index];
  })
}

class CtrlBase {
  constructor(...args) {
    this.constructor.init.call(this, args)
  }

  static init(args) {
    make$Inject.call(this, args)
  }

  $onDestroy() {
    if(this.hasOwnProperty('onDestroy') && typeof this.onDestroy === 'function') {
      onDestroy();
    }
  }
}
//endregion

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
  controller: class HomeCtrl extends CtrlBase {
    static $inject = [];

    //region data get/set
    get data() {
      if(this.dataProvider && this.dataProvider.size) {
        return Array.from(this.dataProvider.get('data'))
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

    theText = 'default';

    add(itemData) {
      this.addItem(itemData);
      this.theText = '';
    }
  }
};
