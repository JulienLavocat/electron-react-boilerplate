import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { services } from '../../../utils/services';
import Worker from '../../modules/Worker';
import './home.scss';

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const buildTabLabels = () =>
    services.map(({ name, icon }, index) => (
      <Tab
        label={name}
        value={index}
        // icon={icon && <FontAwesomeIcon icon={icon} />}
      />
    ));

  const buildTabs = () => {
    return services.map((worker, index) => (
      <div
        hidden={currentTab !== index}
        style={{ width: '100%', height: '100%' }}
      >
        <Worker {...worker} />
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
