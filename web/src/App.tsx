import React from 'react';
import Routes from './Routes';
import { Global } from './assets/styles/global';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <Global />
    </>
  );
};

export default App;
