import React from 'react';
import Worker from '../../modules/Worker';

const ID = 'gateways/customers';

export default function Home() {
  return (
    <div>
      <Worker id={ID} />
    </div>
  );
}
