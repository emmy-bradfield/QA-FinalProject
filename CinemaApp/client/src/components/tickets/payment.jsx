import React, { Component, useRef } from 'react';
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
        const cardDeets = {
            cardName: this.state.cardName,
            cardNumber: this.state.cardNumber,
            cardDate: this.state.cardDate,
            cardCVC: this.state.cardCVC,
            dateTime: new Date()
        }

        axios.post(`http://localhost:4000/bookings/checkout/${this.state._id}`, cardDeets)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("Payment", String("Card ending: ****" + this.state.cardNumber.substring(12, 16)));
                localStorage.setItem("Date", new Date());
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
                });
                window.alert("Thank you for your purchase. Press okay to download your receipt");
                window.location.replace("/tickets/confirmed")
            }).catch((err) => console.log(err))
    };



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
                            <button type="submit" className="btn btn-control btn-primary">Complete Purchase</button>
                        </ul>
                    </form>
                </div>
            </main>
        );
    }
}

export default Payment;