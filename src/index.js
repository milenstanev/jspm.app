import { angular, CoreModule } from 'angular-core';
import { appLazyLoadRouterModule, futureRoutesCollection } from 'featureRoutes';

import { futureRoutes } from './futureRoutes';

const defaultView = '/test' || futureRoutes[0].urlPrefix;
Object.assign(futureRoutesCollection, [...futureRoutes]);

export const Module = angular
  .module('app', [
    CoreModule,
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

angular.bootstrap(document.body, [Module.name]);
