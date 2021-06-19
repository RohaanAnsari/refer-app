import React from 'react';
import { Main } from './containers';
import { Header, NavBottom } from './components';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      {/* <NavBottom /> */}
    </>
  );
}

export default App;
