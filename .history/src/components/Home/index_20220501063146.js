import LogoP from '../../assets/images/logo-p.png'

const Home = ()=> {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm</h1>
                <img src={LogoP} alt="developer/>
            </div>
        </div>
    );
}

export default Home;