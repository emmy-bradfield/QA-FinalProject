import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';

class Tickets extends Component {

    render() {
        return (
            <div className="stack spread">
                <nav className="secondary-nav">
                    <ul className="secondary-nav">
                        <li className='navi2'>
                            <Link to="/tickets/bookings"><h5>Book Tickets</h5></Link>
                        </li>
                        <li className='navi2'>
                            <Link to="/tickets/orders"><h5>My Orders</h5></Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        )
    }
}

export default Tickets;