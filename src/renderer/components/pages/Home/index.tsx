import { createStyles, Divider, Tab, Tabs } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { services } from '../../../utils/services';
import Worker from '../../modules/Worker';
import './home.scss';

const ID = 'gateways/customers';

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const getTabLabels = () =>
    Object.entries(services).map(([type, items]) =>
      items.map((item) => (
        <Tab label={type === 'gateways' ? `${item}-gateway` : item} sx={{}} />
      ))
    );

  const tabLabels = useMemo(() => getTabLabels(), []);

  return (
    <div className="home">
      <Tabs
        className="tabs"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
        }}
        value={currentTab}
        onChange={(_, value) => setCurrentTab(value)}
        orientation="vertical"
        variant="scrollable"
      >
        {...tabLabels}
      </Tabs>
      <Divider orientation="vertical" />
      <Worker id={ID} />
    </div>
  );
}
