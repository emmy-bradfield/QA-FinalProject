import { Link, Outlet } from "react-router-dom";
import logoImg from '../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <nav className='nav'>
                <ul className="main-nav">
                    <li className='navi'>
                        <Link to="/"><img className="logo" src={logoImg} />  </Link>
                    </li>
                    <li className='navi'>
                        <Link to="/listings"><h5>Screenings</h5></Link>
                    </li>

                    <li className='navi'>
                        <Link to="/new-releases"><h5>*NEW*</h5></Link>
                    </li>
                    <li className='navi'>
                        <Link to="/information"><h5>Information</h5></Link>
                    </li>
                    <li className='navi'>
                        <Link to="/tickets"><h5>Tickets</h5></Link>
                    </li>
                    <li className="navi">
                        <Link to="/moovies"><h5>MoovieBarn</h5></Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;