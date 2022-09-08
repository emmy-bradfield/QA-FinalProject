import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';

class Tickets extends Component {

    render() {
        return (
            <>
                <nav className='nav lift3'>
                    <ul className="main-nav">
                        <li className='navi'>
                            <Link to="/tickets/bookings">Book Tickets</Link>
                        </li>
                        <li className='navi'>
                            <Link to="/tickets/orders">My Orders</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Tickets;