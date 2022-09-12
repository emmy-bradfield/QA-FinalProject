import {Link, Outlet} from 'react-router-dom';
import TerrorDairyImg from '../assets/terrordairy.png';
import MoonionsImg from '../assets/moonions.png';
import CalftimeImg from '../assets/calftime.png';
import TheCowsImg from '../assets/thecows.png';

const NewReleases = () => {
    return (
        <div className="center">
            <h1 className="light-text"> Out Now! </h1>
            <div>
                <nav className="navbar poster-nav">
                    <ul className="navbar">
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/terrordairy"><div className="card-poster"><img className="poster-image" src={TerrorDairyImg}/></div></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/moonions"><div className="card-poster"><img className="poster-image" src={MoonionsImg}/></div></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/calftime"><div className="card-poster"><img className="poster-image" src={CalftimeImg}/></div></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/thecows"><div className="card-poster"><img className="poster-image" src={TheCowsImg}/></div></Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default NewReleases;