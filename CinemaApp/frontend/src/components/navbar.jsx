import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/listings">Listings</Link>
                        </li>
                        <li>
                            <Link to="/openings">Opening times</Link>
                        </li>
                        <li>
                            <Link to="/new-releases">New Releases</Link>
                        </li>
                        <li>
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
