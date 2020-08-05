import React from 'react';
import Landing from './pages/Landing';
import { Global } from './assets/styles/global';

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <Global />
    </>
  );
};

export default App;
