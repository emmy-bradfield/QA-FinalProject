import { Component } from 'react';
import axios from 'axios';

class OrderEdit extends Component {
    constructor(props) {
        super(props);

        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeChild = this.onChangeChild.bind(this);
        this.onChangeConcession = this.onChangeConcession.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            reference: localStorage.getItem("reference"),
            forename: localStorage.getItem("forename"),
            surname: localStorage.getItem("surname"),
            movie: localStorage.getItem("movie"),
            date: localStorage.getItem("date"),
            time: localStorage.getItem("time"),
            adult: localStorage.getItem("adult2"),
            child: localStorage.getItem("child2"),
            concession: localStorage.getItem("concession2")
        }
    }

    onChangeAdult(e) {
        this.setState({
            adult: e.target.value
        })
    }
    onChangeChild(e) {
        this.setState({
            child: e.target.value
        })
    }
    onChangeConcession(e) {
        this.setState({
            concession: e.target.value
        })
    }

    onSubmit(e) {
        console.log("button pressed");
        e.preventDefault();
        const updateTickets = {
            noOfAdult: this.state.adult,
            noOfChild: this.state.child,
            noOfConcession: this.state.concession
        }
        console.log("tickets: " + JSON.stringify(updateTickets));
        axios.post(`http://localhost:4000/bookings/update/${this.state.reference}`, updateTickets)
            .then(res => console.log(res.data))
        window.alert("Update complete: press OK to be redirected to the hompage")
        localStorage.clear()
        window.location.replace('/')
    }

    render() {
        return (
            <main className="append-page">
                <div className="center stack">
                    <hr />
                    <h2> Amend Order </h2>
                    <div className="card">
                        <form onSubmit={this.onSubmit}>
                            <br />
                            <p>Note: You cannot change the movie or screening you are booked for.
                                <br />
                                To do so, please cancel the booking and place a new one.
                                <br />
                                This feature is only to amend tickets.
                            </p>
                            <div className="card-body">
                                <ul className="no-bullet">
                                    <li>
                                        <div className="slide center2">
                                            <label> First Name</label>
                                            <input disabled className="form-control form-control2" value={this.state.forename} required type="text" />
                                        </div>
                                        <div className="slide center2">
                                            <label> Last Name</label>
                                            <input disabled className="form-control form-control2" value={this.state.surname} type="text" />
                                        </div>
                                    </li>
                                    <hr />
                                    <li>
                                        <div className="slide">
                                            <div>
                                                <label> Movie</label>
                                                <select className="form-control form-control2">
                                                    <option selected disabled hidden value={this.state.movie}>{this.state.movie}</option>
                                                </select>
                                            </div>
                                            <div className="stack">
                                                <label> Select Screening </label>
                                                <div className="slide center2">
                                                    <select className="form-control form-control4 small-in">
                                                        <option selected disabled hidden value={this.state.date}>{this.state.date}</option>
                                                    </select>
                                                    @
                                                    <select className="form-control form-control4 small-in">
                                                        <option selected disabled hidden value={this.state.time}>{this.state.time}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <br />
                                        <label> Select Tickets: </label> <br />
                                        <div className="slide">
                                            <label>Adults</label>
                                            <select className="form-control form-control4 tiny-in" onChange={this.onChangeAdult}>
                                                <option selected disabled hidden value={this.state.adult}>{this.state.adult}</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                            <label>Children </label>
                                            <select className="form-control form-control4 tiny-in" onChange={this.onChangeChild}>
                                                <option selected disabled hidden value={this.state.child}>{this.state.child}</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                            <label>Concessions </label>
                                            <select className="form-control form-control4 tiny-in" onChange={this.onChangeConcession}>
                                                <option selected disabled hidden value={this.state.concession}>{this.state.concession}</option>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <button type="submit" className="btn btn-primary btn-box">UPDATE</button>
                                    </li>
                                    <li className="right-align">
                                        <button type="button" className="btn btn-delete btn-box">Delete Order &nbsp; <i className="fa-solid fa-trash-can" /></button>
                                    </li>
                                </ul >
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

export default OrderEdit;