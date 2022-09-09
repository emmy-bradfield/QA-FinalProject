import axios from 'axios';
import { Component, useEffect } from 'react';

function Buttons() {
    if (localStorage.getItem("results") === "true") {
        return (
            <>
            <button className="btn btn-primary btn-box">Edit</button>
            <button className="btn btn-primary btn-box">Delete</button>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

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
            price: '',
            results: false
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
                localStorage.setItem("customer", res.data.firstName + " " + res.data.lastName);
                localStorage.setItem("booking", res.data.movie + " on " + res.data.day + " at " + res.data.time);
                const stringTickets = JSON.stringify(res.data.tickets);
                const parseTickets = JSON.parse(stringTickets);
                console.log(parseTickets);
                let adultTick = '';
                let childTick = '';
                let concessionTick = '';
                if (parseTickets[0]['noOfAdult'] > 0) {
                    adultTick = String(parseTickets[0]['noOfAdult'] + " x adult tickets")
                }
                console.log(adultTick);
                if (parseTickets.noOfChild > 0) {
                    childTick = String(parseTickets.noOfChild + " x child tickets")
                }
                console.log(childTick);
                if (parseTickets.noOfConcession > 0) {
                    concessionTick = String(parseTickets.noOfConcession + " x concession tickets")
                }
                console.log(concessionTick);
                const transformedTickets = String(adultTick + childTick + concessionTick)
                console.log(transformedTickets);
                localStorage.setItem("tickets", transformedTickets);
                const stringPayments = JSON.stringify(res.data.payment);
                const parsePayments = JSON.parse(stringPayments);
                console.log(parsePayments);
                if (parsePayments[0]['dateTime'] !== null) {
                    const datePaid = String(parsePayments[0]['dateTime'].substring(8, 10) + "/" + parsePayments[0]['dateTime'].substring(5, 7) + "/" + parsePayments[0]['dateTime'].substring(2, 4));
                    console.log(datePaid);
                    localStorage.setItem("cost", "Total = £" + res.data.price + " purchased on " + datePaid);
                    console.log(res.data)
                } else {
                    localStorage.setItem("cost", "transaction has not been processed - check again later")
                };
                localStorage.setItem("results", true);
                window.location.reload()
            })
            .catch((err) => {
                localStorage.clear()
                window.location.reload()
            })
    };

    render() {
        return (
            <main className="center stack" >
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
                    <div className="card-body stack">
                        <ul className="no-bullet cleanup">
                            <li><em>Enter your booking reference into the search bar above to view your order</em></li>
                            <hr/>
                            <li>{localStorage.getItem("customer")}</li>
                            <li>{localStorage.getItem("booking")}</li>
                            <li>{localStorage.getItem("tickets")}</li>
                            <li>{localStorage.getItem("cost")}</li>
                            <div className="slide">
                                <Buttons results={localStorage.getItem("results")} />
                            </div>
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
}

export default Orders;