export interface IPCRenderer {
  createWorker: (id: string) => void;
  subscribeToWorker: (
    id: string,
    handler: (logs: { from: string; data: string }[]) => void
  ) => void;
  unsubscribeFromWorker: (id: string) => void;
  getLogs: (id: string) => void;
  openInCode: (id: string) => void;
  restart: (id: string) => void;
}

declare global {
  interface Window {
    electron: { ipcRenderer: IPCRenderer };
  }
}
