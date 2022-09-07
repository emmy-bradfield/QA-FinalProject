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
                            <Link to="/new-releases/terrordairy"><img className="poster-image" src={TerrorDairyImg}/></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/moonions"><img className="poster-image" src={MoonionsImg} /></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/calftime"><img className="poster-image" src={CalftimeImg}/></Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/thecows"><img className="poster-image" src={TheCowsImg}/></Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default NewReleases;