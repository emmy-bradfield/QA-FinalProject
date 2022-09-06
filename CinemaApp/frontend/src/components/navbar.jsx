import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <nav className='nav'>
                    <ul>
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
                            <Link to="/payment">Payment</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;
