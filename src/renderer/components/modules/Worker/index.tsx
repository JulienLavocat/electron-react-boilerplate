import Ansi from 'ansi-to-react';
import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import useWorker from '../../../hooks/useWorker';
import './worker.scss';

type Props = {
  id: string;
};

export default function Worker({ id }: Props) {
  const { logs } = useWorker(id);

  return (
    <div className="console">
      <ScrollableFeed>
        {logs.map(({ data }, index) => (
          <p key={index}>
            <Ansi useClasses>{data}</Ansi>
          </p>
        ))}
      </ScrollableFeed>
    </div>
  );
}
