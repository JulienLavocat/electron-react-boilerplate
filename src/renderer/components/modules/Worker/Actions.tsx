import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { CurrentDisplay, CurrentWorkerCtx } from '.';
import { IDBWorker } from '../../../utils/services';

type Props = Partial<IDBWorker> & {
  setCurrentDisplay: (display: CurrentDisplay) => void;
  currentDisplay: CurrentDisplay;
};

export default function Actions({
  swaggerDoc,
  setCurrentDisplay,
  currentDisplay,
}: Props) {
  const { openInCode, restart } = useContext(CurrentWorkerCtx);

  return (
    <Paper className="actions">
      <IconButton onClick={() => openInCode()}>
        <FontAwesomeIcon icon="edit" />
      </IconButton>
      <IconButton onClick={() => restart()}>
        <FontAwesomeIcon icon="redo" />
      </IconButton>
      {swaggerDoc && currentDisplay !== 'swagger' && (
        <IconButton onClick={() => setCurrentDisplay('swagger')}>
          <FontAwesomeIcon icon="file-alt" />
        </IconButton>
      )}
      {currentDisplay !== 'console' && (
        <IconButton onClick={() => setCurrentDisplay('console')}>
          <FontAwesomeIcon icon="terminal" />
        </IconButton>
      )}
    </Paper>
  );
}
