import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/listings">Listings</Link>
                </li>
            </ul>
            <Outlet />
        </>

    );
}

export default Navbar;