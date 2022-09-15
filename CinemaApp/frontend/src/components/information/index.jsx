import { Link, Outlet } from 'react-router-dom';

const Information = () => {
    return (
        <main className="center lift1">
            <div className="minor-header">
                <Link to="/information"><h1 className="light-text"> What to Expect </h1></Link>
                <hr />
                <nav className="secondary-nav">
                    <ul className="secondary-nav">
                        <li className="navi2">
                            <Link to="/information/screens">Screens</Link>
                        </li>
                        <li className="navi2">
                            <Link to="/information/directions">Find Us</Link>
                        </li>
                        <li className="navi2">
                            <Link to="/information/nearby">Places to go</Link>
                        </li>
                        <li className="navi2">
                            <Link to="/information/age-ratings">Age Ratings</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <br/>
            <Outlet />
        </main>
    );
}

export default Information;