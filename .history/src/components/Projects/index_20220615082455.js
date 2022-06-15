import './index.css';
import JavaIcon from '../../assets/images/javaicon.png';
import MySQLIcon from '../../assets/images/mysql.png';
import ApifyIcon from '../../assets/images/apifylogo.png';
import ReactIcon from '../../assets/images/reacticon.png';

const Projects = ()=> {
    return (
      <div>
        <h1 id="title-personal-projects">Personal Projects</h1>
        <table>
          <tr>
            <td>
              <a href='https://github.com/PranavMarthi/BankingApplication'  target="_blank" rel="noopener noreferrer">
                <div id='project-pane1'>
                  <span className='project-text'>
                    <p  style={{
                      color: "black",
                      textDecoration: "none",

                    }}>Banking Application</p>
                  </span>
                  <p className='description'>
                    Fully developed, from the ground up, a closed-loop banking application using Java, MySQL, and various connection implementations.
                  </p>
                  <img src={JavaIcon} width='50px' height='50px'  alt="java-icon" style={
                    {
                      "position": "relative",
                      "left" : "20%",
                      "bottom" : "10%"
                    }
                  }/>
                  <img src={MySQLIcon} width='50px' height='50px' alt="mysql-icon" style={
                    {
                      "position": "relative",
                      "left" : "50%",
                      "bottom" : "10%"
                    }
                  }/>
                </div>
              </a>
            </td>
            <td>
              <a href='https://github.com/PranavMarthi/social-searcher-tool'  target="_blank" rel="noopener noreferrer">
                <div id='project-pane2'>
                <span className='project-text'>
                    <p  style={{
                      color: "black",
                      textDecoration: "none"
                    }}>Social Searcher Tool</p>
                  </span>
                  <p className='description'>
                    Fully developed a thorough proof-of-concept (PoC) for the startup Uphabit Technologies. Using the Apify API, scraped social media sites to provide ideal user experience on the application.
                  </p>
                  <img src={ApifyIcon} alt="Apify Logo" width="50px" height="50px" style={{
                    "position":"relative",
                    "left":"25%",
                    "bottom":"18%"
                  }}/>
                  <img src={ReactIcon} alt="Apify Logo" width="40px" height="40px" style={{
                    "position":"relative",
                    "left":"50%",
                    "bottom":"20%"
                  }}/>
                </div>
              </a>
            </td>
            <td>
              <a href='https://github.com/PranavMarthi/VirtualAssistant'  target="_blank" rel="noopener noreferrer">
                  <div id='project-pane3'>
                <span className='project-text'>
                    <p style={{
                      color: "black",
                      textDecoration: "none"

                    }}>Virtual Assistant</p>
                  </span>
                  <p className='description'>
                    Developed a vitual assistant application using Python. Implementing Google Calendar API and other APIs to ensure the virtual assistant can complete basic tasks.
                  </p>
                </div>
              </a>
            </td>
          </tr>
        </table>
      </div>
    );
}

export default Projects;
