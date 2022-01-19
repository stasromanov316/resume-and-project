import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../../pages/About/About';
import CurrencyRate from '../../pages/CurrencyRate/CurrencyRate';
import { Route, Routes } from 'react-router-dom';
import ThemeContext from '../../context';

function Layout(){
    const {theme, setTheme} = React.useContext(ThemeContext);

    const change = () => {
        setTheme(theme === '' ? 'dark' : '');
    }
    
    return (
      <div>
        <Header clickSwitcher={change} />
          <div className="content">
            <Routes>
              <Route path="/" element={<About />} exact />
              <Route path="/rate" element={<CurrencyRate />} exact />
            </Routes>
          </div>
        <Footer />
      </div>
    );
}

export default Layout;