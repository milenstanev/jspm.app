import { angular, CoreModule } from 'angular-core';
import { NotesComponent } from './notes.component.js';

export const appNotes = angular
  .module('app.notes', [CoreModule])
  .config(($stateProvider) => {
    $stateProvider.state('notes', {
      url: '/notes',
      component: 'appNotes'
    });
  })
  .component('appNotes', NotesComponent);
