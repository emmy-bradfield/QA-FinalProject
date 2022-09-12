import { Link, Outlet } from "react-router-dom";
import logoImg from '../assets/logo.png';


const Navbar = () => {
    return (
        <>
            <div>
                <nav className='nav'>
                    <ul className="main-nav">
                    <li className='navi'>
                       <Link to="/"> <img className="logo" src={logoImg}/></Link>  
                        </li>
    
                        <li className='navi'>
                            <Link to="/listings">Listings</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/openings">Opening times</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/new-releases">New</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/information"> What to Expect</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/tickets">Tickets</Link>
                        </li>
                        <li className="navi">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="navi">
                        <div class="search-box">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search..."/>
  </div>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;