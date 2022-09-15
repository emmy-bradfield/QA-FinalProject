import { Link, Outlet } from 'react-router-dom';

const Information = () => {
    return (
        <main className="center lift1">
                <hr />
                <nav className="secondary-nav">
                    <ul className="secondary-nav">
                        <li className="navi2">
                            <Link to="/information/screens"><h5>Screens</h5></Link>
                        </li>
                        <li className="navi2">
                            <Link to="/information/directions"><h5>Directions</h5></Link>
                        </li>
                        <li className="navi2">
                            <Link to="/information/nearby"><h5>Nearby Venues</h5></Link>
                        </li>
                        <li className='navi2'>
                            <Link to="/information/opening"><h5>Opening Times</h5></Link>
                        </li>
                    </ul>
                </nav>
            <hr />
            <Outlet />
        </main>
    );
}

export default Information;