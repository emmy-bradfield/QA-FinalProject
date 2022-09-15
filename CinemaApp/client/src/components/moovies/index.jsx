import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ListByName from './searchListByName.jsx';
import ListByDirector from './searchListByDir.jsx';

const Moovies = () => {
    return (
        <div className="center">
            <nav className="secondary-nav">
                <ul className="secondary-nav">
                    <li className="navi2 center2">
                        <Link to="/moovies/directory"><em>Search our</em> <br /> <h5> Moovie Database </h5></Link>
                    </li>
                    <li className="navi2 center2">
                        <Link to="/moovies/forum"><em>Post on our</em> <br /> <h5>Discussion Board</h5></Link>
                    </li>
                    <li className="navi2 center2">
                        <Link to="/moovies/certificates"><em>Learn about</em> <br /> <h5>Moovie Certification</h5></Link>
                    </li>
                </ul>
            </nav>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Moovies;