import { useEffect, useRef, useState } from 'react';

const { ipcRenderer } = window.electron;

const useWorker = (id: string) => {
  const [logs, setLogs] = useState<{ from: string; data: string }[]>([]);
  const ref = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    console.log('Subscribing to worker', id);
    ipcRenderer.createWorker(id);
    ipcRenderer.subscribeToWorker(id, (logs) => {
      setLogs(logs);
    });

    ref.current = setInterval(() => ipcRenderer.getLogs(id), 1000);

    return () => {
      console.log('unsubscribing from worker', id);
      ipcRenderer.unsubscribeFromWorker(id);
      if (ref.current) clearInterval(ref.current);
    };
  }, []);

  return { logs, openInCode: () => ipcRenderer.openInCode(id) };
};

export default useWorker;
