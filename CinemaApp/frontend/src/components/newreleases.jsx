import {Link, Outlet} from 'react-router-dom';

const NewReleases = () => {
    return (
        <div className="center">
            <h1> Out Now! </h1>
            <div>
                <nav className="navbar poster-nav">
                    <ul className="navbar">
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/terrordairy">placeholder</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/moonions">placeholder</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/calftime">placeholder</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/new-releases/thecows">placeholder</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </div>
    );
}

export default NewReleases;