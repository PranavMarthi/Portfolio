import './index.css';

const Projects = ()=> {
    return (
      <div>
        <table>
          <tr>
            <td>
              <div id='project-pane1'>
                <span className='project-text'>
                  <a href='https://github.com/PranavMarthi/BankingApplication' style={{
                    color: "black",
                    textDecoration: "none"

                  }}>Banking Application</a>
                </span>
              </div>
            </td>
            <td>
              <div id='project-pane2'>
                hello
              </div>
            </td>
            <td>
              <div id='project-pane3'>
                hello
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id='project-pane4'>
                Hello
              </div>
            </td>
            <td>
                <div id='project-pane5'>
                  Hello
                </div>
            </td>
          </tr>
        </table>
      </div>
    );
}

export default Projects;
