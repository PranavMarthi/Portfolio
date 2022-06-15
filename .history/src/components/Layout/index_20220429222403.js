import Sidebar from '../Sidebar';
import './index.scss';
import LogoP from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';

const Layout = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
        </Link>
    </div>
)

export default Layout;