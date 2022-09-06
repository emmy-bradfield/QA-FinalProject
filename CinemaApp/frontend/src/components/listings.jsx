import { Link, Outlet } from 'react-router-dom';
import BeautyBeefImg from '../assets/beauty-and-beef.jpg';
import MoonstersImg from '../assets/moo-nsters-inc.png';
import DairyMovie from '../assets/dairy-movie.png';
import Cowsablanca from '../assets/cowsablanca.png';;

const Listings = () => {
    return (
        <div className="center">
            <h1 className="light-text"> What's On </h1>
            <div className="center">
                <nav className="navbar poster-nav center">
                    <ul className="navbar">
                        <li className="nav-item nav-link card-img">
                            <Link to="/listings/beautybeef"><img className="poster-image" src={BeautyBeefImg} /></Link>
                        </li>
                        <li className="nav-item nav-link card-img">
                            <Link to="/listings/moonstersinc"><img className="poster-image" src={MoonstersImg} /></Link>
                        </li>
                        <li className="nav-item nav-link card-img">
                            <Link to="/listings/dairymovie"><img className="poster-image" src={DairyMovie}/></Link>
                        </li>
                        <li className="nav-item nav-link card-img">
                            <Link to="/listings/cowsablanca"><img className="poster-image" src={Cowsablanca} /></Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};

export default Listings