import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Paper,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import Ansi from 'ansi-to-react';
import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import useWorker from '../../../hooks/useWorker';
import './worker.scss';

type Props = {
  id: string;
};

export default function Worker({ id }: Props) {
  const { logs, openInCode } = useWorker(id);

  return (
    <div className="worker">
      <Paper className="actions">
        <IconButton onClick={() => openInCode()}>
          <Edit />
        </IconButton>
      </Paper>
      <div className="console">
        <ScrollableFeed className="feed">
          {logs.map(({ data }, index) => (
            <p key={index}>
              <Ansi useClasses>{data}</Ansi>
            </p>
          ))}
        </ScrollableFeed>
      </div>
    </div>
  );
}
