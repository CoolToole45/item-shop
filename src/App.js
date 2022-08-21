import React from 'react';
import './Styles/App.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Dark Mode</button>
      <Header darkMode={darkMode} />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
