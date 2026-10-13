(function (global) {
  var CHANNEL = 'desktop-ui';
  var VERSION = 1;
  var params = new URLSearchParams(global.location.search);
  var windowId = params.get('desktopWindowId') || '';
  var hostOrigin = params.get('desktopHostOrigin') || '';
  if (!windowId || !hostOrigin) {
    return;
  }

  var listeners = {};

  function envelope(name, payload) {
    return {
      v: VERSION,
      channel: CHANNEL,
      id: String(Date.now()) + '-' + Math.random().toString(36).slice(2, 10),
      windowId: windowId,
      type: 'event',
      name: name,
      payload: payload
    };
  }

  function emit(name, payload) {
    if (global.parent === global) {
      return;
    }
    global.parent.postMessage(envelope(name, payload), hostOrigin);
  }

  global.addEventListener('message', function (event) {
    if (event.origin !== hostOrigin || !event.data || event.data.channel !== CHANNEL) {
      return;
    }
    if (event.data.windowId && event.data.windowId !== windowId) {
      return;
    }
    var handlers = listeners[event.data.name];
    if (!handlers) {
      return;
    }
    handlers.forEach(function (handler) {
      handler(event.data.payload);
    });
  });

  global.desktopUi = {
    windowId: windowId,
    hostOrigin: hostOrigin,
    emit: emit,
    ready: function () { emit('ready'); },
    close: function () { emit('close'); },
    setTitle: function (title) { emit('setTitle', { title: title }); },
    ping: function () { emit('ping'); },
    on: function (name, handler) {
      listeners[name] = listeners[name] || [];
      listeners[name].push(handler);
      return function () {
        listeners[name] = (listeners[name] || []).filter(function (item) {
          return item !== handler;
        });
      };
    }
  };
})(window);
