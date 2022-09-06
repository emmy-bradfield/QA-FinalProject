import { Link, Outlet } from 'react-router-dom';

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
                      
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>

    );
}

export default Navbar;