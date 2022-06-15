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

                <p className='text' style={{
                  "position": "relative",
                  "marginTop":"100px",

                }}>
                    Hi! My name is Pranav currently enrolled in the Pre-IB/ALP program at White Oaks Secondary School 
                    in Oakville, Ontario, Canada. I'm a very ambitious student looking to expand expertise in software 
                    engineering-related fields. I'm constantly on the lookout for challenges that peak my interests!
                </p>
                <p>
                   I love programming and working with new languages. Specifically, I know Python, Java, Javascript (React), and MySQL.
                   I enjoy creating new websites and programs with new web and package-based technologies. My interests in machine learning
                   is now compelling me to venture into the realm of data science .
                </p>
                <p>
                    Outside of school, I am a high-performance swimmer @ Orcas Swim Club. I have been swimming for seven years and have 
                    competed in competitions in the Niagara/Eastern Zone regions as well as with Swim Ontario.
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
