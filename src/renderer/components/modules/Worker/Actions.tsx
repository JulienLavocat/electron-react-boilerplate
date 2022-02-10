import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Paper } from '@mui/material';
import React, { useContext } from 'react';
import { CurrentWorkerCtx } from '.';

type Props = {};

export default function Actions() {
  const { openInCode, restart } = useContext(CurrentWorkerCtx);

  return (
    <Paper className="actions">
      <IconButton onClick={() => openInCode()}>
        <FontAwesomeIcon icon="edit" />
      </IconButton>
      <IconButton onClick={() => restart()}>
        <FontAwesomeIcon icon="redo" />
      </IconButton>
    </Paper>
  );
}
