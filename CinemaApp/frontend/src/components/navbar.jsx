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
                        <Link to="/listings"><h3>Screenings</h3></Link>
                    </li>

                    <li className='navi'>
                        <Link to="/new-releases"><h3>*NEW*</h3></Link>
                    </li>
                    <li className='navi'>
                        <Link to="/information"><h3>Information</h3></Link>
                    </li>
                    <li className='navi'>
                        <Link to="/tickets"><h3>Tickets</h3></Link>
                    </li>
                    <li className="navi">
                        <Link to="/moovies"><h3>MoovieBarn</h3></Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;