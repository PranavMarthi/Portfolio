import { useState } from 'react';
import LogoP from '../../assets/images/logo-p.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Logo from '../Logo/index.js';
import { Link } from 'react-router-dom'

const Home = ()=> {

    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['r', 'a', 'n', 'a', 'v', ' ', '-'];
    const jobArray = ['a', ' ', 'h', 'i', 'g', 'h', ' ', 's', 'c','h', 'o', 'o', 'l', ' ', 's', 't', 'u', 'd', 'e', 'n', 't', "."]
    
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

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
                idx={8}
                />
                <br></br>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                <br/>
                </h1>
                <h2>Pre-IB/ ALP High school student / Innovative Thinker / Backend Developer</h2>

                <Link to="/about" className="flat-button">
                    MY WORK
                </Link>
            </div>
            <Logo/>
        </div>
    );
}

export default Home;