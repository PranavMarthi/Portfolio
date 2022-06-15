import './index.scss';
import LogoP from '../../assets/images/logo-p.png'

const Logo = ()=> {

    return (
        <div className='logo-container' ref={bgRef}>
            <img className='solid-logo' src={LogoP} alt="P"/>
        </div>
    );
}

export default Logo;