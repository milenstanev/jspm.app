import { angular, CoreModule } from 'angular-core';

import {
  HomeComponent
} from './app.homeCtrl';

export const appHome = angular
  .module('app.home', [
    CoreModule
  ])
  .config(($stateProvider, $urlRouterProvider, defaultView) => {
    defaultView = '/home';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'appHome',
        resolve: {
          title: () => 'Home Page Title',
          user: () => {
            return {
              name: 'User name'
            };
          },
          dataProvider: testSvc => testSvc.getData().then(res => {
            testSvc.map.get('data').add({title: 'Initial'});
            res.data.forEach(item => testSvc.map.get('data').add(item));

            return testSvc.map;
          }),
          removeItem: testSvc => item => {
            testSvc.map.get('data').delete(item);
          },
          addItem: testSvc => (item) => testSvc.map.get('data').add(item),
          onDestroy: testSvc => testSvc.clear()

        }
      });
  })
  .factory('testSvc', ($timeout) => {
    let map = new Map();
    map.set('data', new Set());

    return {
      map,
      getData: () => {
        $timeout(() => {
          map.get('data').add({title: '666'});
        }, 2000);

        return new Promise((resolve) => {
          resolve({data: [
            {title: '1'},
            {title: '2'},
            {title: '3'},
            {title: '4'}
          ]});
        });
      },
      clear: () => map.get('data').clear()
    };
  })
  .component('appHome', HomeComponent);

