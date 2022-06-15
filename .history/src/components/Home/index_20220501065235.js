import LogoP from '../../assets/images/logo-p.png'
import './index.scss'
import Sidebar from '../Sidebar';

const Home = ()=> {
    
    return (
        <div className="container home-page">
            <Sidebar></Sidebar>
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoP} alt="high school student"/>
                ranav
                <br/>
                </h1>
                <h2>High school student/Innovative Thinker/Backend Developer</h2>
            </div>
        </div>
    );
}

export default Home;