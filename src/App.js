import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import CurrencyRate from './components/CurrencyRate';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<About />} exact />
          <Route path="/rate" element={<CurrencyRate />} exact />
        </Routes>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
