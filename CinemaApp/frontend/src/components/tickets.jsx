import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';

class Tickets extends Component {

    render() {
        return (
            <div>
                <nav>
                    <ul className="main-nav slide spread">
                        <li className='navi navi-xl'>
                            <Link to="/tickets/bookings">Book Tickets</Link>
                        </li>
                        <li className='navi navi-xl'>
                            <Link to="/tickets/orders">My Orders</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        )
    }
}

export default Tickets;