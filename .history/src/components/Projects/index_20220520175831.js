import './index.css';

const Projects = ()=> {
    return (
      <div>
        <table>
          <tr>
            <td>
              <div id='project-pane1'>
                <span className='project-text'>
                  <a href='https://github.com/PranavMarthi/BankingApplication'  target="_blank" rel="noopener noreferrer" style={{
                    color: "black",
                    textDecoration: "none",
                    textAlign: "center"

                  }}>Banking Application</a>
                </span>
                <p className='description'>
                  Fully developed, from the ground up, a banking application using Java, MySQL, and various connection implementations to make the system a closed-loop structure
                </p>
              </div>
            </td>
            <td>
              <div id='project-pane2'>
              <span className='project-text'>
                  <a href='https://github.com/PranavMarthi/social-searcher-tool'  target="_blank" rel="noopener noreferrer" style={{
                    color: "black",
                    textDecoration: "none"

                  }}>Social Searcher Tool</a>
                </span>
              </div>
            </td>
            <td>
              <div id='project-pane3'>
              <span className='project-text'>
                  <a href='https://github.com/PranavMarthi/VirtualAssistant'  target="_blank" rel="noopener noreferrer" style={{
                    color: "black",
                    textDecoration: "none"

                  }}>Virtual Assistant</a>
                </span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
}

export default Projects;
