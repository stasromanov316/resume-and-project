import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import CurrencyRate from './pages/CurrencyRate/CurrencyRate';
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
