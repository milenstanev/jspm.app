import { angular, CoreModule } from 'angular-core';
import { CounterComponent } from './counter.component.js';

export const appCounter = angular
  .module('app.counter', [CoreModule])
  .config(($stateProvider) => {
    $stateProvider.state('counter', {
      url: '/counter',
      component: 'appCounter'
    });
  })
  .component('appCounter', CounterComponent);
