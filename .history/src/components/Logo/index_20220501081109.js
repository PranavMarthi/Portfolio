import './index.scss';
import LogoP from '../../assets/images/logo-p.png'
import { useRef } from 'react';

const Logo = ()=> {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className='logo-container' ref={bgRef}>
            <img className='solid-logo' src={LogoP} alt="P" ref={solidLogoRef/>
        </div>
    );
}

export default Logo;