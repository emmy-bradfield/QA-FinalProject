import React, { Component } from 'react';

class PaymentPage extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
        this.onChangeExpDate = this.onChangeExpDate.bind(this);
        this.onChangeCvc = this.onChangeCvc.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            cardNumber: '',
            expDate: '',
            cvc: ''
        }
    }

    payment = []

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
        console.log(this.state);

    }
    onChangeCardNumber(e) {
        this.setState({
            cardNumber: e.target.value
        });
        console.log("CN changed");
    }
    onChangeExpDate(e) {
        this.setState({
            expDate: e.target.value
        });
        console.log("EXP changed");

    }
    onChangeCvc(e) {
        this.setState({
            cvc: e.target.value
        });
        console.log("CVC Changed");

    }

    onSubmit(e) {
        e.preventDefault();
    }

    addPayment() {
        const payment = [{
            fName: this.state.firstName,
            lName: this.state.lastName,
            cNumber: this.state.cardNumber,
            expiryDate: this.state.expDate,
            CVC: this.state.cvc
        }]
        console.log(payment);
        console.log("Hi");
    }


    render() {
        return (
            <>
                <div id="payment_form">
                    <form onSubmit={this.onSubmit}>
                        <div id="left_col">
                            <h3>Payment Information</h3>
                            <ul className="hidePoint">
                                <li>
                                    <label>Card Number</label>
                                    <input type="text" value={this.state.cardNumber} onChange={this.onChangeCardNumber} id="card_number" placeholder="1111-2222-3333-4444"></input>
                                </li>
                                <li>
                                    <label>Expiry Date</label>
                                    <input type="text" value={this.state.expDate} onChange={this.onChangeExpDate} id="expirty_date" placeholder="1804 - 18th April"></input>
                                </li>
                                <li>
                                    <label>CVC</label>
                                    <input type="text" value={this.state.cvc} onChange={this.onChangeCvc} id="cvc" placeholder="739"></input>
                                </li>
                            </ul>
                        </div>
                        <div id="right_col">
                            <h3>Billing Information</h3>
                            <ul className="hidePoint">
                                <li>
                                    <label>First Name</label>
                                    <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} id="first_name" placeholder="John"></input>
                                </li>
                                <li>
                                    <label>Last Name</label>
                                    <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} id="last_name" placeholder="Doe"></input>
                                </li>
                                <li>
                                    <label>Click here to pay!</label>
                                </li>
                                <div>
                                    <button type="submit" id='payBtn' onClick={this.addPayment}>Submit</button>
                                </div>
                            </ul>
                        </div>
                    </form>
                </div>
            </>
        )
    };
}
export default PaymentPage;