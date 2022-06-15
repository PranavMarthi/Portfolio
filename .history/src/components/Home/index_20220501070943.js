import { useState } from 'react';
import LogoP from '../../assets/images/logo-p.png'
import './index.scss'

const Home = ()=> {

    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['r', 'a', 'n', 'a', 'v'];
    const jobArray = ['h', 'i', 'g', 'h', ' ', 's', 'c','h', 'o', 'o', 'l', ' ', 's', 't', 'u', 'd', 'e', 'n', 't']
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoP} alt="high school student"/>
                ranav
                <br/>
                </h1>
                <h2>High school student / Innovative Thinker / Backend Developer</h2>
            </div>
        </div>
    );
}

export default Home;