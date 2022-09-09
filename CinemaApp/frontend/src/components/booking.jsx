import React, { Component } from 'react';
import axios from 'axios';



class Bookings extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeMovie = this.onChangeMovie.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeChild = this.onChangeChild.bind(this);
        this.onChangeConcession = this.onChangeConcession.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            firstName: '',
            lastName: '',
            movie: '',
            day: '',
            time: '',
            price: '',
            noOfAdult: 0,
            noOfChild: 0,
            noOfConcession: 0,
            dateTime: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeMovie(e) {
        this.setState({
            movie: e.target.value
        });
    }

    onChangeDay(e) {
        this.setState({
            day: e.target.value
        });
    }

    onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
    }

    onChangeAdult(e) {
        this.setState({
            noOfAdult: e.target.value
        });
    }

    onChangeChild(e) {
        this.setState({
            noOfChild: e.target.value
        });
    }

    onChangeConcession(e) {
        this.setState({
            noOfConcession: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const booking = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            movie: this.state.movie,
            day: this.state.day,
            time: this.state.time,
            price: (
                (this.state.noOfAdult * 10) +
                (this.state.noOfChild * 5) +
                (this.state.noOfConcession * 6)
            ),
            noOfAdult: this.state.noOfAdult,
            noOfChild: this.state.noOfChild,
            noOfConcession: this.state.noOfConcession
        }
        if ((Number(this.state.noOfAdult) + Number(this.state.noOfChild) + Number(this.state.noOfConcession)) > 10) {
            window.alert("That is over our 10-ticket limit")
            return;
        } else {
            axios.post('http://localhost:4000/bookings/post', booking)
                .then(res => localStorage.setItem("REF", res.data));

            this.setState({
                firstName: '',
                lastName: '',
                movie: '',
                day: '',
                time: '',
                price: '',
                noOfAdult: 0,
                noOfChild: 0,
                noOfConcession: 0,
                dateTime: ''
            })

            window.location.replace("/authorise-booking-payment")
        }

    }
    render() {
        return (
            <main className="center">
                <div id='forms'>
                    <form id="payment_form" onSubmit={this.onSubmit}>

                        <h1 className='paymentHeading'>Book Tickets</h1>
                        <ul className="hidePoint">
                            <div>
                                <hr></hr>
                            </div>
                            <li>
                                <div className="slide center2">
                                    <label> First Name</label>
                                    <input className="form-control form-control3" required type="text" value={this.state.firstName} onChange={this.onChangeFirstName} placeholder="Sue" />
                                </div>
                                <div className="slide center2">
                                    <label> Last Name</label>
                                    <input className="form-control form-control3" type="text" value={this.state.lastName} onChange={this.onChangeLastName} placeholder="Donym" />
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="slide">
                                    <div>
                                        <label> Select Movie</label>
                                        <select className="form-control form-control3" onChange={this.onChangeMovie}>
                                            <option selected disabled hidden value=""></option>
                                            <option>Beauty and the Beef</option>
                                            <option>Moonsters Inc</option>
                                            <option>Dairy Movie</option>
                                            <option>Cowsablanca</option>
                                            <option>Terror on the Dairy</option>
                                            <option>The Moonions: The Rise of Gru</option>
                                            <option>Calftime</option>
                                            <option>The Cows</option>
                                        </select>
                                    </div>
                                    <div className="stack">
                                        <label> Select Screening </label>
                                        <div className="slide center2">
                                            <select className="form-control form-control4" onChange={this.onChangeDay}>
                                                <option selected disabled hidden value=""></option>
                                                <option>10-Sep</option>
                                                <option>11-Sep</option>
                                                <option>12-Sep</option>
                                                <option>13-Sep</option>
                                                <option>14-Sep</option>
                                                <option>15-Sep</option>
                                                <option>16-Sep</option>
                                                <option>17-Sep</option>
                                                <option>18-Sep</option>
                                                <option>19-Sep</option>
                                                <option>20-Sep</option>
                                            </select>
                                            @
                                            <select className="form-control form-control4" onChange={this.onChangeTime}>
                                                <option selected disabled hidden value=""></option>
                                                <option>12:00</option>
                                                <option>14:00</option>
                                                <option>17:00</option>
                                                <option>19:00</option>
                                                <option>20:30</option>
                                                <option>22:00</option>
                                                <option>23:45</option>
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
                                    <select className="form-control form-control4" onChange={this.onChangeAdult}>
                                        <option selected value="0">0</option>
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
                                    <select className="form-control form-control4" onChange={this.onChangeChild}>
                                        <option selected value="0">0</option>
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
                                    <select className="form-control form-control4" onChange={this.onChangeConcession}>
                                        <option selected value="0">0</option>
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
                            <br />
                            <hr />
                        </ul >
                        <button type="submit" onClick={this.onSubmit} className="btn btn-dark btn-control"> <h3>Buy Now</h3></button>
                    </form >
                </div >
            </main >
        )
    };
}
export default Bookings;