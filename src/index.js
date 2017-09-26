import { angular, CoreModule } from 'milenstanev/mstanev.angular.1.x.x.core';
import { appLazyLoadRouterModule, futureRoutesCollection } from 'milenstanev/jspm.angular.lazyload-router';

import { LayoutDefault } from 'layoutDefault';
import { futureRoutes } from './futureRoutes';

import template from './index.html!text';

const defaultView = '/test' || futureRoutes[0].urlPrefix;
Object.assign(futureRoutesCollection, [...futureRoutes]);

const layout = 'default';

export const Module = angular
  .module('app', [
    CoreModule,
    LayoutDefault,
    appLazyLoadRouterModule
  ])
  .constant('defaultView', defaultView)
  .config(($stateProvider, $urlRouterProvider, defaultView) => {
    $stateProvider
      .state('404', {
        url: '/404',
        component: 'page404'
      });

    return $urlRouterProvider.otherwise(defaultView || '/404');
  })
  .component('page404', {template: '404'})
  .component('app', {template});

angular.bootstrap(document.body, [Module.name]);
