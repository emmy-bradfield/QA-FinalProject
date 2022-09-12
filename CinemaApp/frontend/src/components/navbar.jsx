import { Link, Outlet } from "react-router-dom";
import logoImg from '../assets/logo.png';
import Search from './search.jsx';

const Navbar = () => {
    return (
        <>
            <div>
                <nav className='nav'>
                    <ul className="main-nav">
                    <li className='navi'>
                        <img className="logo" src={logoImg}/>    
                        </li>
                        <li className='navi'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/listings">Listings</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/openings">Opening times</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/new-releases">New Releases</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/information"> What to Expect</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/tickets">Tickets</Link>
                        </li>
                        <li className="navi">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="navi">
                            <Search />
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;