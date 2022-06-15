import Sidebar from '../Sidebar';
import './index.scss';
import LogoP from '../../assets/images/logo-p.png';
import { Link } from 'react-router-dom';
import Subtitle from '../../assets/images/logo_sub.png'

const Layout = () => (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img classNamesrc={LogoP} alt="logo"/>
            <img classNamesrc={LogoP} alt="logo"/>
        </Link>
    </div>
)

export default Layout;