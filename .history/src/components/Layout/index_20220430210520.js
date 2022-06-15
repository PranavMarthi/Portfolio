import Sidebar from '../Sidebar/index';
import './index.scss'

const Layout = () => (
    <div className='nav-bar'>
        <Sidebar/>
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>
        </div>
    </div>
)

export default Layout;