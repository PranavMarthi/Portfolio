import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/index';
import './index.scss'
import Home from '../Home';

const Layout = () => (
    <div className='nav-bar'>
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>
                OPPORTUNITY-SEEKER
            </span>

            <Outlet/>

            <span className='tags bottom-tags'>
               RESEARCHER
                <br/>
                <span className='bottom-tag-html'></span>
            </span>
        </div>
    </div>
)

export default Layout;