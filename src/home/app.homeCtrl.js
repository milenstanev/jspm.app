/**
 * Controller
 */
function decor(ref) {
  window.Object.defineProperty(ref, 'map', {
    value: new Map(),
    writable: true,
    enumerable: true,
    configurable: true
  });

  ref.map.set('test', 'Test');

  return ref;
}

function inject(ref) {
  console.log(ref)

  return ref;
}

class CtrlBase {
  constructor() {
    /**
     * View Model
     * @type {Map}
     * @private
     */
    this.vm = new Map();
  }
}

@decor
class HomeCtrl extends CtrlBase {
  user = {
    name: 'User name'
  };

  static $inject = [
    '$http'
  ];

  constructor() {
    super();
  }

  $onInit() {
    const data = [
      {title: '1'},
      {title: '2'},
      {title: '3'},
      {title: '4'}
    ]

    this.vm.set('data', data);
  }
}

HomeCtrl.$inject = ['$http'];

export default HomeCtrl;
