import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './routes/Routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter forceRefresh>
      <Header className="pb-5" />
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
