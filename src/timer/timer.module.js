import { angular, CoreModule } from 'angular-core';
import { TimerComponent } from './timer.component.js';

export const appTimer = angular
  .module('app.timer', [CoreModule])
  .config(($stateProvider) => {
    $stateProvider.state('timer', {
      url: '/timer',
      component: 'appTimer'
    });
  })
  .component('appTimer', TimerComponent);
