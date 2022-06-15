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
                    textDecoration: "none"

                  }}>Banking Application</a>
                </span>
                <span className='description'>
                  hello
                </span>
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
