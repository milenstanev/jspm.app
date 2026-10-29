export const futureRoutes = [
  {
    stateName: 'home',
    urlPrefix: '/home',
    type: 'load',
    src: 'homeComponent',
    moduleExport: 'module:name:constant',
    moduleExportName: 'app.home',
  },
  {
    stateName: 'counter',
    urlPrefix: '/counter',
    type: 'load',
    src: 'counterComponent',
    moduleExport: 'module:name:constant',
    moduleExportName: 'app.counter',
  },
  {
    stateName: 'timer',
    urlPrefix: '/timer',
    type: 'load',
    src: 'timerComponent',
    moduleExport: 'module:name:constant',
    moduleExportName: 'app.timer',
  },
  {
    stateName: 'notes',
    urlPrefix: '/notes',
    type: 'load',
    src: 'notesComponent',
    moduleExport: 'module:name:constant',
    moduleExportName: 'app.notes',
  }
];
