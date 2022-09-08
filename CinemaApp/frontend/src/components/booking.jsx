import React, { Component } from 'react';
import axios from 'axios';
import { systemProps } from '@chakra-ui/react';

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
                (this.state.noOfAdult * 10) +
                (this.state.noOfChild * 5) +
                (this.state.noOfConcession * 6)
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
        if ((Number(this.state.noOfAdult) + Number(this.state.noOfChild) + Number(this.state.noOfConcession)) > 10) {
            window.alert("That is over our 10-ticket limit")
            return;
        } else {
            axios.post('http://localhost:4000/bookings/post', booking)
                .then(res => console.log(res.data));
            window.alert(JSON.stringify(booking));

            axios.get('http://localhost:4000/bookings/getAll')
                .then(res => {
                    let totalBeautyTickets = 0;
                    let totalMoonstersTickets = 0;
                    let totalDairyTickets = 0;
                    let totalCowsablancaTickets = 0;
                    let totalTerrorTickets = 0;
                    let totalMoonionsTickets = 0;
                    let totalCalftimeTickets = 0;
                    let totalCowsTickets = 0;
                    let totalAdultTickets = 0;
                    let totalChildTickets = 0;
                    let totalConcessionTickets = 0;

                    let bookingArray = res.data;
                    bookingArray.forEach(e => {
                        Object.keys(e).forEach(key => {
                            if (key === "tickets") {
                                let ticketKey = e[key];
                                Object.keys(ticketKey).forEach(key => {
                                    if (e.movie == "Terror on the Dairy") {
                                        totalTerrorTickets += Number(ticketKey[key].noOfAdult);
                                        totalTerrorTickets += Number(ticketKey[key].noOfChild);
                                        totalTerrorTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                    if (e.movie == "Beauty and the Beef") {
                                        totalBeautyTickets += Number(ticketKey[key].noOfAdult);
                                        totalBeautyTickets += Number(ticketKey[key].noOfChild);
                                        totalBeautyTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                    if (e.movie == "Moonsters Inc") {
                                        totalMoonstersTickets += Number(ticketKey[key].noOfAdult);
                                        totalMoonstersTickets += Number(ticketKey[key].noOfChild);
                                        totalMoonstersTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                    if (e.movie == "Dairy Movie") {
                                        totalDairyTickets += Number(ticketKey[key].noOfAdult);
                                        totalDairyTickets += Number(ticketKey[key].noOfChild);
                                        totalDairyTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                    if (e.movie == "Cowsablanca") {
                                        totalCowsablancaTickets += Number(ticketKey[key].noOfAdult);
                                        totalCowsablancaTickets += Number(ticketKey[key].noOfChild);
                                        totalCowsablancaTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                    if (e.movie == "The Moonions: Rise of Gru") {
                                        totalMoonionsTickets += Number(ticketKey[key].noOfAdult);
                                        totalMoonionsTickets += Number(ticketKey[key].noOfChild);
                                        totalMoonionsTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                    if (e.movie == "Calftime") {
                                        totalCalftimeTickets += Number(ticketKey[key].noOfAdult);
                                        totalCalftimeTickets += Number(ticketKey[key].noOfChild);
                                        totalCalftimeTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                    if (e.movie == "The Cows") {
                                        totalCowsTickets += Number(ticketKey[key].noOfAdult);
                                        totalCowsTickets += Number(ticketKey[key].noOfChild);
                                        totalCowsTickets += Number(ticketKey[key].noOfConcession);
                                    }
                                })
                            }
                        }
                        )
                    })
                    console.log(`Beauty and the Beef: ${totalBeautyTickets}`)
                    console.log(`Moonsters Inc: ${totalMoonstersTickets}`)
                    console.log(`Dairy Movie: ${totalDairyTickets}`)
                    console.log(`Cowsablanca: ${totalCowsablancaTickets}`)
                    console.log(`Terror on the Dairy: ${totalDairyTickets}`)
                    console.log(`The Moonions: ${totalMoonionsTickets}`)
                    console.log(`Calftime: ${totalCalftimeTickets}`)
                    console.log(`The Cows: ${totalCowsTickets}`)
                })
                .catch((err) => console.log(err))
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

                                <select className="form-control" onChange={this.onChangeDay}>
                                    <option selected disabled hidden>Select Date</option>
                                    <option>19/09/2022</option>
                                    <option>20/09/2022</option>
                                    <option>21/09/2022</option>
                                    <option>22/09/2022</option>
                                    <option>23/09/2022</option>
                                    <option>24/09/2022</option>
                                    <option>25/09/2022</option>
                                    <option>26/09/2022</option>
                                    <option>27/09/2022</option>
                                    <option>28/09/2022</option>
                                    <option>29/09/2022</option>
                                    <option>30/09/2022</option>
                                    <option>01/10/2022</option>
                                    <option>02/10/2022</option>
                                </select>


                                <select className="form-control" onChange={this.onChangeTime}>
                                    <option selected disabled hidden>Select Time</option>
                                    <option>11:00</option>
                                    <option>11:30</option>
                                    <option>12:00</option>
                                    <option>12:30</option>
                                    <option>13:00</option>
                                    <option>13:30</option>
                                    <option>14:00</option>
                                    <option>14:30</option>
                                    <option>15:00</option>
                                    <option>15:30</option>
                                    <option>16:00</option>
                                    <option>16:30</option>
                                    <option>17:00</option>
                                    <option>17:30</option>
                                    <option>18:00</option>
                                    <option>18:30</option>
                                    <option>19:00</option>
                                    <option>19:30</option>
                                    <option>20:00</option>
                                    <option>20:30</option>
                                    <option>21:00</option>
                                    <option>21:30</option>
                                    <option>22:00</option>
                                    <option>22:30</option>
                                    <option>23:00</option>
                                    <option>23:30</option>
                                    <option>00:00</option>
                                    <option>00:30</option>
                                    <option>01:00</option>
                                    <option>01:30</option>
                                </select>
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