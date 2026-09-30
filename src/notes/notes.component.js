import template from './notes.html!text';
import { CtrlBase } from '../lib/asd.js';

class NotesCtrl extends CtrlBase {
  constructor() {
    super();
    this.items = [];
    this.input = '';
  }

  add() {
    if (!this.input.trim()) return;
    this.items.push(this.input.trim());
    this.input = '';
  }

  remove(index) {
    this.items.splice(index, 1);
  }
}
NotesCtrl.$inject = [];

export const NotesComponent = {
  template,
  controller: NotesCtrl
};
