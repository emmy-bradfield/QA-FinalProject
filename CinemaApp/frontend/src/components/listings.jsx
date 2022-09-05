import { Link, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BeautyBeefImg from '../assets/beauty-and-beef.jpg';
import MoonstersImg from '../assets/moo-nsters-inc.png';

const Listings = () => {
    return (
        <>
            <h1> What To Watch </h1>
            <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/listings/beautybeef"><img src={BeautyBeefImg} /></Link>
                    </li>
                    <li>
                        <Link to="/listings/moonstersinc"><img src={MoonstersImg} /></Link>
                    </li>
                    <li>
                        <Link to ="/listings/dairymovie">placeholder</Link>
                    </li>
                    <li>
                        <Link to ="/listings/cowsablanca">placeholder</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
        </>
    );
};

export default Listings