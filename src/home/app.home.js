import { angular, CoreModule } from 'angular-core';

import appHomeTpl from './app.home.html!text';
import HomeCtrl from './app.homeCtrl.js';

export const appHome = angular
  .module('app.home', [
    CoreModule
  ])
  .config(($stateProvider, $urlRouterProvider, defaultView) => {
    defaultView = '/home';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'appHome'
      });
  })
  .component('appHome', {
    template: appHomeTpl,
    controller: HomeCtrl
  });

