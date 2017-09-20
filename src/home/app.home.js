import { angular } from 'angular-core';

import appHomeTpl from './app.home.html!text';
import HomeCtrl from './app.homeCtrl.js';

const appHome = angular.module('app.home', []);

appHome.component('appHome', {
  template: appHomeTpl,
  controller: HomeCtrl
});

export default 'app.home';

