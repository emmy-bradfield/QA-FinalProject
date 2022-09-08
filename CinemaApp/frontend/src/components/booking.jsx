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
        this.onChangeCardName = this.onChangeCardName.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeCardDate = this.onChangeCardDate.bind(this);
        this.onChangeCVC = this.onChangeCVC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            firstName: '',
            lastName: '',
            movie: '',
            day: '',
            time: '',
            price: '',
            noOfAdult: '',
            noOfChild: '',
            noOfConcession: '',
            cardName: '',
            cardNumber: '',
            cardDate: '',
            cardCVC: '',
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

    onChangeCardName(e) {
        this.setState({
            cardName: e.target.value
        });
    }

    onChangeCardNumber(e) {
        this.setState({
            cardNumber: e.target.value
        });
    }

    onChangeCardDate(e) {
        this.setState({
            cardDate: e.target.value
        });
    }

    onChangeCVC(e) {
        this.setState({
            cardCVC: e.target.value
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
                (this.state.noOfAdult*10)+
                (this.state.noOfChild*5)+
                (this.state.noOfConcession*6)
            ),
            noOfAdult: this.state.noOfAdult,
            noOfChild: this.state.noOfChild,
            noOfConcession: this.state.noOfConcession,
            cardName: this.state.cardName,
            cardNumber: this.state.cardNumber,
            cardDate: this.state.cardDate,
            cardCVC: this.state.cardCVC,
            dateTime: new Date()
        }
        if ((Number(this.state.noOfAdult)+Number(this.state.noOfChild)+Number(this.state.noOfConcession))> 10) {
            window.alert("That is over our 10-ticket limit")
            return;
        } else {
            axios.post('http://localhost:4000/bookings/post', booking)
            .then(res => console.log(res.data));
            window.alert(JSON.stringify(booking));
        }

        this.setState({
            firstName: '',
            lastName: '',
            movie: '',
            day: '',
            time: '',
            price: '',
            noOfAdult: '',
            noOfChild: '',
            noOfConcession: '',
            cardName: '',
            cardNumber: '',
            cardDate: '',
            cardCVC: '',
            dateTime: ''
        })
    }

    render() {
        return (
            <>
                <div id='forms'>
                    <form id="payment_form" onSubmit={this.onSubmit}>

                        <h1 className='paymentHeading'>Enter your details:</h1>
                        <ul className="hidePoint">
                            <div>
                                <hr></hr>
                            </div>
                            <li>
                                <label> First Name</label>
                                <input required type="text" value={this.state.firstName} onChange={this.onChangeFirstName} placeholder="Sue" />
                            </li>
                            <li>
                                <label> Last Name</label>
                                <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} placeholder="Donym" />
                            </li>
                            <li>
                                <select className="form-control" onChange={this.onChangeMovie}>
                                    <option selected disabled hidden>Select a moo-vie</option>
                                    <option>Beauty and the Beef</option>
                                    <option>Moonsters Inc</option>
                                    <option>Dairy Movie</option>
                                    <option>Cowsablanca</option>
                                    <option>Terror on the Dairy</option>
                                    <option>The Moonions: The Rise of Gru</option>
                                    <option>Calftime</option>
                                    <option>The Cows</option>
                                </select>
                            </li>
                            <li>
                                <label> Screening </label>
                                <input type="text" value={this.state.day} onChange={this.onChangeDay} placeholder="Date" />
                                <input type="text" value={this.state.time} onChange={this.onChangeTime} placeholder="Time"/>
                            </li>
                            <li>
                                <label> Tickets: </label> <br />
                                <label>Adults {"(16+)"} </label>
                                <select className="form-control" onChange={this.onChangeAdult}>
                                    <option selected disabled hidden>Number of Adults</option>
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
                                <label>Children </label>
                                <select className="form-control" onChange={this.onChangeChild}>
                                    <option selected disabled hidden>Number of Children</option>
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
                                <select className="form-control" onChange={this.onChangeConcession}>
                                    <option selected disabled hidden>Number of Concessions</option>
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
                            </li>
                            <li>
                                <label>Name on Card</label>
                                <input type="text" value={this.state.cardName} onChange={this.onChangeCardName} id="card_number" placeholder='John M Doe'></input>
                            </li>
                            <li>
                                <label>Card Number</label>
                                <input type="text" value={this.state.cardNumber} onChange={this.onChangeCardNumber} id="card_number" placeholder="1111-2222-3333-4444"></input>
                            </li>
                            <li>
                                <label>Expiry Date</label>
                                <input type="text" value={this.state.cardDate} onChange={this.onChangeCardDate} id="expiry_date" placeholder="0627 - June 2027"></input>
                            </li>
                            <li>
                                <label>CVC</label>
                                <input type="text" value={this.state.cardCVC} onChange={this.onChangeCVC} id="cvc" placeholder="739"></input>
                            </li>
                            <div id='payBtn'>
                                <button type="submit" onClick={this.onSubmit}>Confirm Payment</button>
                            </div>
                        </ul>
                    </form>
                </div>
            </>
        )
    };
}
export default Bookings;