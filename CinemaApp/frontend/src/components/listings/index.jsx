import { Link, Outlet } from 'react-router-dom';
import BeautyBeefImg from '../../assets/movie-posters/beauty-and-beef.jpg';
import MoonstersImg from '../../assets/movie-posters/moo-nsters-inc.png';
import DairyMovie from '../../assets/movie-posters/dairy-movie.png';
import Cowsablanca from '../../assets/movie-posters/cowsablanca.png';;

const Listings = () => {
    return (
        <div className="center">
            <h1 className="light-text"> What's On </h1>
            <div className="center">
                <nav className="navbar poster-nav center">
                    <ul className="navbar">
                        <li className="nav-item nav-link">
                            <Link to="/listings/beautybeef"><div className="card-poster"><img className="poster-image" src={BeautyBeefImg}/></div></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/listings/moonstersinc"><div className="card-poster"><img className="poster-image" src={MoonstersImg}/></div></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/listings/dairymovie"><div className="card-poster"><img className="poster-image" src={DairyMovie}/></div></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/listings/cowsablanca"><div className="card-poster"><img className="poster-image" src={Cowsablanca}/></div></Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};

export default Listings