import {Link, Outlet} from 'react-router-dom';

const Information = () =>{
    return(
        <main className="center lift3">
            <h1 className="light-text"> What to Expect </h1>
            <nav className='navbar center'>
                <ul className="main-nav">
                    <li className="navi">
                        <Link to="/information/screens">Screens</Link>
                    </li>
                    <li className="navi">
                        <Link to="/information/directions">Find Us</Link>
                    </li>
                    <li className="navi">
                        <Link to="/information/nearby">Places to go</Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
}

export default Information;