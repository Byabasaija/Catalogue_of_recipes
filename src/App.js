import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './routes/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter forceRefresh>
      <Header className="pb-5" />
      <div className="App">
        <Routes />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
