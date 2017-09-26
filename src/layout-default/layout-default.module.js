import { angular, CoreModule } from 'milenstanev/mstanev.angular.1.x.x.core';

export const LayoutDefault = angular
  .module('app.layout', [
    CoreModule
  ])
  .component('layout', {
    controller: class {
      isDefault = true
      constructor($timeout) {
        /*$timeout(() => {
          this.isDefault = false;
        }, 3000);*/
      }
    },
    template:`<layout-default ng-if="$ctrl.isDefault"></layout-default>
      <layout2 ng-if="!$ctrl.isDefault"></layout2>`
  })
  .component('layoutDefault', {
    template: `
    <div>
      <div>Header Extended</div>
      <div>Side Nav</div>
      <div>
        <div ui-view></div>
      </div>
      <div>Footer</div>
    </div>
    `
  })
  .component('layout2', {
    template:
      `<div>
        <div ui-view></div>
      </div>`
  })
  .name;
