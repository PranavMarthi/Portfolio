import SelfPortrait from '../../assets/images/IMG_0751.jpg';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const About = ()=> {

    return (
        <div className='container about-page'>
            <h1 id="about-me-title">
              About Me
            </h1>
            <div className='text-zone'>

                <p className='text'>
                    I'm a very ambitious student looking to expand expertise in software engineering-related fields. 
                    I'm currently attending White Oaks Secondary School in the Pre-IB program.
                    I'm constantly on the lookout for challenges that peak my interests!
                </p>
                <p>
                   I love programming and working with new languages. Specifically, I know Python, Java, Javascript (React), and MySQL.
                   I enjoy creating new websites and programs with new web and package-based technologies. 
                </p>
                <p>
                    Outside of school, I am a high-performance swimmer @ Orcas Swim Club. I love reading a wide variety of fiction and non-fiction titles.
                    
                </p>
            </div>

            <img src={SelfPortrait} alt="self portrait" width="25%" height="70%" className='self-portrait'/>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSwimmer} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faMoneyBillTrendUp} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCalculator} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNoteSticky} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBookOpen} color="#EC4D28" />
            </div>
          </div>
        </div>

        </div>
    );
}

export default About;
