import Ansi from 'ansi-to-react';
import React, { useEffect, useRef, useState } from 'react';

const { ipcRenderer } = window.electron;

type Props = {
  id: string;
};

export default function Worker({ id }: Props) {
  const [logs, setLogs] = useState<{ from: string; data: string }[]>([]);
  const ref = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    ipcRenderer.createWorker(id);
    ipcRenderer.subscribeToWorker(id, (logs) => {
      setLogs(logs);
    });

    ref.current = setInterval(() => ipcRenderer.getLogs(id), 1000);

    return () => {
      ipcRenderer.unsubscribeFromWorker(id);
      if (ref.current) clearInterval(ref.current);
    };
  }, []);

  return (
    <div>
      {logs.map(({ data }, index) => (
        <p key={index}>
          <Ansi>{data}</Ansi>
        </p>
      ))}
    </div>
  );
}
