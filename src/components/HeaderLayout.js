import React from 'react';
import { GnbLeft, GnbRight, Header } from '../styles/HeaderLayout.style';

function HeaderLayout() {
  return (
    <Header>
      <GnbLeft />
      <GnbRight />
    </Header>
  );
}

export default HeaderLayout;
