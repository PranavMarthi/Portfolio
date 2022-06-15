import './index.scss';
import LogoP from '../../assets/images/logo-p.png'
import { useRef } from 'react';

const Logo = ()=> {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img className='solid-logo' src={LogoP} alt="P" ref={solidLogoRef}/>
        </div>
    );
}

export default Logo;