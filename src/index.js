import { angular, CoreModule } from 'milenstanev/mstanev.angular.1.x.x.core';
import { appLazyLoadRouterModule, futureRoutesCollection } from 'milenstanev/jspm.angular.lazyload-router';

import { LayoutDefault } from './layout-default/layout-default.module';
//import { LayoutDefault } from 'layoutDefault';
//import { LayoutDefault } from 'jspm.component.layoutDefault';
import { futureRoutes } from './futureRoutes';

const defaultView = '/test' || futureRoutes[0].urlPrefix;
Object.assign(futureRoutesCollection, [...futureRoutes]);

const layout = 'default';

export const Module = angular
  .module('app', [
    CoreModule,
    LayoutDefault,
    appLazyLoadRouterModule
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('404', {
        url: '/404',
        component: 'page404'
      });

    return $urlRouterProvider.otherwise('/404');
  })
  .component('page404', {template: '404'})
  .component('app', {template: '<layout></layout>'})
  .name;
