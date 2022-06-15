import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/index';
import './index.scss'

const Layout = () => (
    <div className='App'>
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>
                MADE WITH REACT.JS
            </span>

            <Outlet/>

            <span className='tags bottom-tags'>
                OPPORTUNITY-SEEKER
                <br/>
                <span className='bottom-tag-html'></span>
            </span>
            
        </div>
        
    </div>
)

export default Layout;