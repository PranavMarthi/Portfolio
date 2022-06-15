import Sidebar from '../Sidebar';
import './index.scss';
import LogoP from '../../assets/images/logo-p.png';
import { Link, NavLink } from 'react-router-dom';
import Subtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Layout = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoP} alt="logo"/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank"
                rel='nonreferrer'
                href='https://www.linkedin.com/in/pranav-marthi-7714a4215/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a 
                target="_blank"
                rel='nonreferrer'
                href='https://github.com/PranavMarthi'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>

    </div>
)

export default Layout;