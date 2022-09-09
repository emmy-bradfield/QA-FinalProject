import axios from 'axios';
import { Component } from 'react';

class Orders extends Component {
    constructor(props) {
        super(props);

        this.onChangeReference = this.onChangeReference.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            reference: '',
            forename: '',
            surename: '',
            movie: '',
            time: '',
            date: '',
            tickets: [{}],
            price: ''
        }
    }

    onChangeReference(e) {
        this.setState({
            reference: e.target.value
        })
        console.log(this.state.reference);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("onSubmit started");

        axios.get(`http://localhost:4000/bookings/get/${this.state.reference}`)
            .then(console.log("get request succesfully made"))
            .then(res => {
                console.log(res.data);
                this.setState({
                    forename: res.data.firstName,
                    surname: res.data.lastName,
                    movie: res.data.movie,
                    time: " at " + res.data.time,
                    date: " on " + res.data.day,
                    price: "Cost: £" + res.data.price
                })
            })

    }

    render() {
        return (
            <main className="center stack">
                <hr />
                <h2> My Orders </h2>
                <em>Enter your booking reference number into the box below to view, amend, and cancel your
                    ticket order
                </em>
                <form className="slide center2" onSubmit={this.onSubmit}>
                    <input type="text" className="form-control form-control5" value={this.reference} onChange={this.onChangeReference} />
                    <button type="submit" className='btn btn-dark btn-box'><i className="fa-solid fa-magnifying-glass" /></button>
                </form>

                <div className="card">
                    <div className="card-body">
                        <ul className="no-bullet cleanup">
                            <li>{this.state.forename} {this.state.surname}</li>
                            <li>{this.state.movie} {this.state.time} {this.state.date}</li>
                            <ul>
                                <li>{this.state.adult}</li>
                                <li>{this.state.child}</li>
                                <li>{this.state.concession}</li>
                            </ul>
                            <li>{this.state.price}</li>
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
}

export default Orders;