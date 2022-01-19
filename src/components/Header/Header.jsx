
import dayIcon from '../../img/sunny_white.png';
import nightIcon from '../../img/mode_black.png';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header({clickSwitcher}) {
    return (
        <header>
            <div className="switcherWrap">
                <div className="switcher" 
                onClick={clickSwitcher}>
                  <img src={dayIcon} alt="dayIcon" className="dayIcon" title="changeTheme" />
                  <img src={nightIcon} alt="nightIcon" className="nightIcon" title="changeTheme" />
                </div>
            </div>
            <nav>
              <ul>
                  <li><Link to='/'>Резюме</Link></li>
                  <li><Link to='/rate'>Курс валют</Link></li>
              </ul>
            </nav>
        </header>  
    )
}

export default Header;