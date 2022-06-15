import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/index';
import './index.scss'

const Layout = () => (
    <div className='App'>
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
            <span className='tags top-tags'>
                Pre-IB Student
            </span>
            
        </div>
        
    </div>
)

export default Layout;