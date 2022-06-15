import Sidebar from '../Sidebar';
import './index.scss';
import LogoP from '../../assets/images/logo-p.png';
import { Link, NavLink } from 'react-router-dom';
import Subtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Layout = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoP} alt="logo"/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
        </nav>


    </div>
)

export default Layout;