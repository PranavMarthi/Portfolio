import { useState } from 'react';
import LogoP from '../../assets/images/logo-p.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Home = ()=> {

    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['r', 'a', 'n', 'a', 'v'];
    const jobArray = ['h', 'i', 'g', 'h', ' ', 's', 'c','h', 'o', 'o', 'l', ' ', 's', 't', 'u', 'd', 'e', 'n', 't']
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoP} alt="high school student"/>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                <br/>
                </h1>
                <h2>High school student / Innovative Thinker / Backend Developer</h2>
            </div>
        </div>
    );
}

export default Home;