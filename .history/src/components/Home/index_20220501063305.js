import LogoP from '../../assets/images/logo-p.png'

const Home = ()=> {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoP} alt="high school student"/>
                Pranav
                <br/>
                high school student
                </h1>
            </div>
        </div>
    );
}

export default Home;