const {
  contextBridge,
  ipcRenderer
} = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    createWorker(id) {
      ipcRenderer.send('create-worker', id);
    },
    subscribeToWorker(id, func) {
      ipcRenderer.on(id, (_event, from, data) =>
        func(from, data)
      )
    },
    unsubscribeFromWorker(id, func) {
      ipcRenderer.removeAllListeners(id);
    },
    getLogs(id) {
      ipcRenderer.send('get-worker-logs', id)
    },
    openInCode(id) {
      ipcRenderer.send('open-in-code', id)
    },
    restart(id) {
      ipcRenderer.send('restart-worker', id)
    }
  },
});
