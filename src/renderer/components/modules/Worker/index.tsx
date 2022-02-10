import React, { createContext, useState } from 'react';
import useWorker, { UseWorker } from '../../../hooks/useWorker';
import { IDBWorker } from '../../../utils/services';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import Actions from './Actions';
import Console from './Console';
import './worker.scss';

type Props = IDBWorker;

export const CurrentWorkerCtx = createContext<UseWorker>({} as UseWorker);
export type CurrentDisplay = 'console' | 'swagger';

export default function Worker(workerConfig: Props) {
  const worker = useWorker(workerConfig.id);

  const [currentDisplay, setCurrentDisplay] =
    useState<CurrentDisplay>('console');

  return (
    <CurrentWorkerCtx.Provider value={worker}>
      <div className="worker">
        <Actions
          {...workerConfig}
          currentDisplay={currentDisplay}
          setCurrentDisplay={(display) => setCurrentDisplay(display)}
        />
        <div className="lower-container">
          {currentDisplay === 'console' && <Console />}
          {currentDisplay === 'swagger' && (
            <SwaggerUI
              url={workerConfig.swaggerDoc}
              docExpansion="none"
              displayOperationId
              // onComplete={(ui) => ui.preauthorizeApiKey('AppSecret', 'sdf')}
            />
          )}
        </div>
      </div>
    </CurrentWorkerCtx.Provider>
  );
}
