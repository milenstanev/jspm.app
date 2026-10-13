import { angular, CoreModule } from 'angular-core';
import { HomeComponent } from './home.component.js';

export const appHome = angular
  .module('app.home', [
    CoreModule
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        component: 'appHome'
      });
  })
  .component('appHome', HomeComponent);
