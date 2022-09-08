import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <nav className='nav'>
                    <ul className="main-nav">
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
                            <Link to="/bookings">Bookings</Link>
                        </li>
                        <li className="navi">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;