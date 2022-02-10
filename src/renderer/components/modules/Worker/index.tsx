import Ansi from 'ansi-to-react';
import React, { createContext } from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import useWorker, { UseWorker } from '../../../hooks/useWorker';
import Actions from './Actions';
import Console from './Console';
import './worker.scss';

type Props = {
  id: string;
};

export const CurrentWorkerCtx = createContext<UseWorker>({} as UseWorker);

export default function Worker({ id }: Props) {
  const worker = useWorker(id);

  return (
    <CurrentWorkerCtx.Provider value={worker}>
      <div className="worker">
        <Actions />
        <Console />
      </div>
    </CurrentWorkerCtx.Provider>
  );
}
