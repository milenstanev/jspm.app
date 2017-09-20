/**
 * Controller
 */
function decor(ref) {
  return ref;
}

@decor
class HomeCtrl {
  user = {
    name: 'User name'
  };
  /**
   * @type {Map}
   */
  map = new Map();

  static asd = "Asd";
  qwe = "qwe";

  init() {
    this.map.set('data', [
      {title: '1'},
      {title: '2'},
      {title: '3'},
      {title: '4'}
    ]);
  }
  // TODO: inject decorator
  constructor($http) {
    $http.get('http://localhost:3000/api//svc/translations').then(
      res => console.log(res)
    );

    this.asd = 'asd';

    this.init();
  }
}

HomeCtrl.$inject = ['$http'];

export default HomeCtrl;
