import { Tab, Tabs } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { services } from '../../../utils/services';
import Worker from '../../modules/Worker';
import './home.scss';

const tabsLabels = [
  'docker-compose',
  ...Object.values(services.gateways).map((e) => e + '-gateway'),
  ...Object.values(services.services).flat(),
];

const tabsItems = [
  'docker-compose',
  ...Object.values(services.gateways).map((e) => `gateways/${e}`),
  ...Object.values(services.services)
    .flat()
    .map((e) => `services/${e}`),
];

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const buildTabLabels = () =>
    tabsLabels.map((item, index) => <Tab label={item} value={index} />);

  const buildTabs = () => {
    return tabsItems.map((item, index) => (
      <div
        hidden={currentTab !== index}
        style={{ width: '100%', height: '100%' }}
      >
        <Worker id={item} />
      </div>
    ));
  };
  const tabLabels = useMemo(() => buildTabLabels(), [buildTabLabels]);
  const tabsContent = useMemo(() => buildTabs(), [currentTab]);

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
      {...tabsContent}
    </div>
  );
}
