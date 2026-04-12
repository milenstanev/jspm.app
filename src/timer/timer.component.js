import template from './timer.html!text';
import { CtrlBase } from '../lib/asd.js';

class TimerCtrl extends CtrlBase {
  constructor($interval) {
    super();
    this.$interval = $interval;
    this.seconds = 0;
    this.running = false;
    this.intervalId = null;
  }

  formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.intervalId = this.$interval(() => {
      this.seconds += 1;
    }, 1000);
  }

  pause() {
    this.running = false;
    if (this.intervalId) {
      this.$interval.cancel(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.pause();
    this.seconds = 0;
  }

  $onDestroy() {
    this.pause();
  }
}
TimerCtrl.$inject = ['$interval'];

export const TimerComponent = {
  template,
  controller: TimerCtrl
};
