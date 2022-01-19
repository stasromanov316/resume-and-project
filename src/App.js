import React from 'react';
import Layout from './components/Layout/Layout';
import ThemeContext from './context';

import './App.scss';

function App() {
  const {theme} = React.useContext(ThemeContext);

  return (
    <div className="wrapper" >
      <div className={theme} >
        <div className="App">
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
