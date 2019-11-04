import React from 'react';
import { ShowUserInfo } from './ShowUserInfo';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <ShowUserInfo 
        name={'Arun'}
        age={22}
      />
    </>
  );
}

export default App;
