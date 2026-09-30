import { angular, CoreModule } from 'angular-core';
import { appLazyLoadRouterModule, futureRoutesCollection } from 'featureRoutes';

import { futureRoutes } from './futureRoutes';

const defaultView = futureRoutes[0].urlPrefix || '/home';
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
  .component('page404', {template: '404'});

function bootstrapApp() {
  if (!document.body || document.body.hasAttribute('data-ng-app-bootstrap')) {
    return;
  }
  document.body.setAttribute('data-ng-app-bootstrap', '1');
  angular.bootstrap(document.body, [Module.name]);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
