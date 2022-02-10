import Ansi from 'ansi-to-react';
import React, { useContext } from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import { CurrentWorkerCtx } from '.';

export default function Console() {
  const { logs } = useContext(CurrentWorkerCtx);

  return (
    <div className="console">
      <ScrollableFeed className="feed">
        {logs.map(({ data }, index) => (
          <p key={index}>
            <Ansi useClasses>{data}</Ansi>
          </p>
        ))}
      </ScrollableFeed>
    </div>
  );
}
