import { Component } from 'react';
import axios from 'axios';

class Payment extends Component {
    constructor(props) {
        super(props)

        this.onChangeCardName = this.onChangeCardName.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeCardDate = this.onChangeCardDate.bind(this);
        this.onChangeCVC = this.onChangeCVC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: localStorage.getItem("REF"),
            dateTime: '',
            cardName: '',
            cardNumber: '',
            cardDate: '',
            cardCVC: ''
        }
    }

    onChangeCardName(e) {
        this.setState({
            cardName: e.target.value
        })
    }
    onChangeCardNumber(e) {
        this.setState({
            cardNumber: e.target.value
        })
    }
    onChangeCardDate(e) {
        this.setState({
            cardDate: e.target.value
        })
    }
    onChangeCVC(e) {
        this.setState({
            cardCVC: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        axios.get(`http://localhost:4000/bookings/get/${this.state.reference}`)
            .then(res => console.log(res.data))
            .then(res => console.log(res))

        const bookingPaid = {
            cardName: this.state.cardName,
            cardNumber: this.state.cardNumber,
            cardDate: this.state.cardDate,
            cardCVC: this.state.cardCVC,
            dateTime: new Date()
        }

        axios.post(`http://localhost:4000/bookings/checkout/${this.state._id}`, bookingPaid)
            .then(res => console.log(res.data));
            axios.get('http://localhost:4000/bookings/getAll')
            .then(res => {

                let movieArray = [
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]
                    ]
                ]

                let bookingArray = res.data;

                let thisMovie = e.movie;
                let movieArrayPos = 0;
                let thisDay = e.day;
                let dayArrayPos = 0;
                let thisTime = e.time;
                let timeArrayPos = 0;

                bookingArray.forEach(e => {
                    Object.keys(e).forEach(key => {
                        let totalTerrorTickets = 0;
                        let totalBeautyTickets = 0;
                        let totalMoonstersTickets = 0;
                        let totalDairyTickets = 0;
                        let totalCowsablancaTickets = 0;
                        let totalMoonionsTickets = 0;
                        let totalCalftimeTickets = 0;
                        let totalCowsTickets = 0;


                        switch(thisMovie) {
                            case "Beauty and the Beef":
                                movieArrayPos = 0;
                                break;
                            case "Moonsters Inc":
                                movieArrayPos = 1;
                                break;
                            case "Dairy Movie":
                                movieArrayPos = 2;
                                break;
                            case "Cowsablanca":
                                movieArrayPos = 3;
                                break;
                            case "Terror on the Dairy":
                                movieArrayPos = 4;
                                break;
                            case "The Moonions: Rise of Gru":
                                movieArrayPos = 5;
                                break;
                            case "Calftime":
                                movieArrayPos = 6;
                                break;
                            case "The Cows":
                                movieArrayPos = 7;
                                break;
                        }
                        switch(thisDay){
                            case "10-Sep":
                                dayArrayPos = 0;
                                break;
                            case "11-Sep":
                                dayArrayPos = 1;
                                break;
                            case "12-Sep":
                                dayArrayPos = 2;
                                break;
                            case "13-Sep":
                                dayArrayPos = 3;
                                break;
                            case "14-Sep":
                                dayArrayPos = 4;
                                break;
                            case "15-Sep":
                                dayArrayPos = 5;
                                break;
                            case "16-Sep":
                                dayArrayPos = 6;
                                break;
                            case "17-Sep":
                                dayArrayPos = 7;
                                break;
                            case "18-Sep":
                                dayArrayPos = 8;
                                break;
                            case "19-Sep":
                                dayArrayPos = 9;
                                break;
                            case "20-Sep":
                                dayArrayPos = 10;
                                break;
                        }
                        switch(thisTime) {
                            case "12:00":
                                timeArrayPos = 0;
                                break;
                            case "14:00":
                                timeArrayPos = 1;
                                break;
                            case "17:00":
                                timeArrayPos = 2;
                                break;
                            case "19:00":
                                timeArrayPos = 3;
                                break;
                            case "20:30":
                                timeArrayPos = 4;
                                break;
                            case "22:00":
                                timeArrayPos = 5;
                                break;
                            case "23:45":
                                timeArrayPos = 6;
                                break;
                        }
                        if (key === "tickets") {
                            let ticketKey = e[key];
                            Object.keys(ticketKey).forEach(key => {
                                if (e.movie == "Terror on the Dairy") {
                                    totalTerrorTickets += Number(ticketKey[key].noOfAdult);
                                    totalTerrorTickets += Number(ticketKey[key].noOfChild);
                                    totalTerrorTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalTerrorTickets;
                                }
                                if (e.movie == "Beauty and the Beef") {
                                    totalBeautyTickets += Number(ticketKey[key].noOfAdult);
                                    totalBeautyTickets += Number(ticketKey[key].noOfChild);
                                    totalBeautyTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalBeautyTickets;
                                }
                                if (e.movie == "Moonsters Inc") {
                                    totalMoonstersTickets += Number(ticketKey[key].noOfAdult);
                                    totalMoonstersTickets += Number(ticketKey[key].noOfChild);
                                    totalMoonstersTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalMoonstersTickets;
                                }
                                if (e.movie == "Dairy Movie") {
                                    totalDairyTickets += Number(ticketKey[key].noOfAdult);
                                    totalDairyTickets += Number(ticketKey[key].noOfChild);
                                    totalDairyTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalDairyTickets;
                                }
                                if (e.movie == "Cowsablanca") {
                                    totalCowsablancaTickets += Number(ticketKey[key].noOfAdult);
                                    totalCowsablancaTickets += Number(ticketKey[key].noOfChild);
                                    totalCowsablancaTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalCowsablancaTickets;
                                }
                                if (e.movie == "The Moonions: The Rise of Gru") {
                                    totalMoonionsTickets += Number(ticketKey[key].noOfAdult);
                                    totalMoonionsTickets += Number(ticketKey[key].noOfChild);
                                    totalMoonionsTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalMoonionsTickets;
                                }
                                if (e.movie == "Calftime") {
                                    totalCalftimeTickets += Number(ticketKey[key].noOfAdult);
                                    totalCalftimeTickets += Number(ticketKey[key].noOfChild);
                                    totalCalftimeTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalCalftimeTickets;
                                }
                                if (e.movie == "The Cows") {
                                    totalCowsTickets += Number(ticketKey[key].noOfAdult);
                                    totalCowsTickets += Number(ticketKey[key].noOfChild);
                                    totalCowsTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalCowsTickets;
                                }
                            })
                        }
                    }
                    )
                })
                if ((movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) > 100) {
                    window.location.replace('/tickets/SoldOut')
                    axios.delete(`http://localhost:4000/bookings/delete/${this.state._id}`)
                    .then(console.log("Record deleted as we haven't got enough tickets left."))
                    .catch((err) => console.log(err));
                } else {
                    console.log("you're good")
                }
                console.table(movieArray)
            })
            .catch((err) => console.log(err));

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
            dateTime: '',
            cardName: '',
            cardNumber: '',
            cardDate: '',
            cardCVC: ''
        })

        window.alert("Payment successful. Please press OK to continue");

        // window.location.replace("/");
    }

    render() {
        return (
            <main className="center">
                <div id='forms'>
                    <form id="payment_form2" onSubmit={this.onSubmit}>
                        <h1 className='paymentHeading'>Complete Payment</h1>
                        <ul className="hidePoint">
                            <li>
                                <label>Name on Card</label>
                                <input className="form-control form-control3" required type="text" value={this.cardName} onChange={this.onChangeCardName} id="card_number" placeholder='John M Doe'></input>
                            </li>
                            <li>
                                <label>Card Number</label>
                                <input className="form-control form-control3" required type="text" value={this.cardNumber} onChange={this.onChangeCardNumber} id="card_number" placeholder="1111-2222-3333-4444"></input>
                            </li>
                            <li>
                                <div className="slide">
                                    <div className="stack">
                                        <label>Expiry Date</label>
                                        <input className="form-control form-control4" required type="text" value={this.cardDate} onChange={this.onChangeCardDate} id="expiry_date" placeholder="0627 - June 2027"></input>
                                    </div>
                                    <div className="stack">
                                        <label>CVC</label>
                                        <input className="form-control form-control4" required type="text" value={this.cardCVC} onChange={this.onChangeCVC} id="cvc" placeholder="739"></input>
                                    </div>
                                </div>
                            </li>
                            <br />
                            <button type="submit" className="btn btn-dark btn-control">Complete Purchase</button>
                        </ul>
                    </form>
                </div>
            </main>
        );
    }
}

export default Payment;