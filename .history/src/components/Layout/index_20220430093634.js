import Sidebar from '../Sidebar';
import './index.scss';
import LogoP from '../../assets/images/logo-p.png';
import { Link } from 'react-router-dom';

const Layout = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoP} alt="logo"/>
        </Link>
    </div>
)

export default Layout;