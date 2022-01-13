import './Header.scss';
import dayIcon from '../../img/sunny_white.png';
import nightIcon from '../../img/mode_black.png';
import { Link } from 'react-router-dom';

function Header() {
    const clickSwitcher = () => {
      if(!document.querySelector('.wrapper').classList.contains('dark')){
        document.querySelector('.wrapper').classList.add('dark');
      } else {
        document.querySelector('.wrapper').classList.remove('dark');
      }
    }

    return (
        <header>
            <div className="switcherWrap">
                <div className="switcher" 
                onClick={clickSwitcher}>
                  <img src={dayIcon} alt="" className="dayIcon" title="changeTheme" />
                  <img src={nightIcon} alt="" className="nightIcon" title="changeTheme" />
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