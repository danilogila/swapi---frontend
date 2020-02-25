import React from 'react';
import Main from './components/Main'
import GlobalStyles from './styles/global'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
        <Header/>
        <Main />
        <GlobalStyles />
    </div>
  );
}

export default App;
