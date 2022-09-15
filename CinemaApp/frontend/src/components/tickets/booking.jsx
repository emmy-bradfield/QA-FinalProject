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
        this.checkTickets = this.checkTickets.bind(this);


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
            dateTime: '',
            valid: 'true'
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

    checkTickets = (e) => {
        axios.get('http://localhost:4000/bookings/getAll')
            .then(res => {
                let movieArray = [
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ],
                    [
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]
                    ]
                ]
                
                let bookingArray = res.data;
                let movieArrayPos = 0;
                let dayArrayPos = 0;
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
                        
                        let thisMovie = e.movie;
                        let thisDay = e.day;
                        let thisTime = e.time;
        
                        switch (thisMovie) {
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
                        switch (thisDay) {
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
                        switch (thisTime) {
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
                                if (e.movie === "Terror on the Dairy") {
                                    totalTerrorTickets += Number(ticketKey[key].noOfAdult);
                                    totalTerrorTickets += Number(ticketKey[key].noOfChild);
                                    totalTerrorTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalTerrorTickets;
                                }
                                if (e.movie === "Beauty and the Beef") {
                                    totalBeautyTickets += Number(ticketKey[key].noOfAdult);
                                    totalBeautyTickets += Number(ticketKey[key].noOfChild);
                                    totalBeautyTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalBeautyTickets;
                                }
                                if (e.movie === "Moonsters Inc") {
                                    totalMoonstersTickets += Number(ticketKey[key].noOfAdult);
                                    totalMoonstersTickets += Number(ticketKey[key].noOfChild);
                                    totalMoonstersTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalMoonstersTickets;
                                }
                                if (e.movie === "Dairy Movie") {
                                    totalDairyTickets += Number(ticketKey[key].noOfAdult);
                                    totalDairyTickets += Number(ticketKey[key].noOfChild);
                                    totalDairyTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalDairyTickets;
                                }
                                if (e.movie === "Cowsablanca") {
                                    totalCowsablancaTickets += Number(ticketKey[key].noOfAdult);
                                    totalCowsablancaTickets += Number(ticketKey[key].noOfChild);
                                    totalCowsablancaTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalCowsablancaTickets;
                                }
                                if (e.movie === "The Moonions: The Rise of Gru") {
                                    totalMoonionsTickets += Number(ticketKey[key].noOfAdult);
                                    totalMoonionsTickets += Number(ticketKey[key].noOfChild);
                                    totalMoonionsTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalMoonionsTickets;
                                }
                                if (e.movie === "Calftime") {
                                    totalCalftimeTickets += Number(ticketKey[key].noOfAdult);
                                    totalCalftimeTickets += Number(ticketKey[key].noOfChild);
                                    totalCalftimeTickets += Number(ticketKey[key].noOfConcession);
                                    (movieArray[movieArrayPos][dayArrayPos][timeArrayPos]) += totalCalftimeTickets;
                                }
                                if (e.movie === "The Cows") {
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
                const checkMovieArray = [
                    "Beauty and the Beef", "Moonsters Inc", "Dairy Movie", "Cowsablanca", "Terror on the Dairy",
                    "The Moonions: The Rise of Gru", "Calftime", "The Cows"
                ]
                const checkDateArray = [
                    "10-Sep","11-Sep","12-Sep","13-Sep","14-Sep","15-Sep","16-Sep","17-Sep","18-Sep","19-Sep","20-Sep"
                ]
                const checkTimeArray = [
                    "12:00","14:00","17:00","19:00","20:30","22:00","23:45"
                ]
                movieArray.every(movie => {
                    movie.every(day => {
                        day.every(time => {
                            if ((time + Number(this.state.noOfAdult) + Number(this.state.noOfChild) + Number(this.state.noOfConcession)) > 100) {
                                if (this.state.movie == checkMovieArray[movieArrayPos] && this.state.day == checkDateArray[dayArrayPos] && this.state.time == checkTimeArray[timeArrayPos]){
                                    this.setState({ valid: "false" });
                                    return;
                                } else {
                                    this.setState({ valid: "true" });
                                }
                            } else {
                                this.setState({ valid: "true" });
                            }
                        });
                    });
                });
                console.log(movieArray)
            })
            .catch((err) => console.log(err));
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
        localStorage.setItem("day", this.state.day);
        localStorage.setItem("time", this.state.time);
        if ((Number(this.state.noOfAdult) + Number(this.state.noOfChild) + Number(this.state.noOfConcession)) > 100) {
            window.alert("That is over our 10-ticket limit")
            return;
        } else {
            axios.post('http://localhost:4000/bookings/post', booking)
                .then(this.checkTickets(e))
                .then(res => {
                    localStorage.setItem("REF", res.data._id);
                    localStorage.setItem("Customer", String(this.state.firstName + " " + this.state.lastName));
                    localStorage.setItem("Screening", String(res.data.movie + " on " + this.state.day + " at " + this.state.time));
                    let adult = '';
                    let child = '';
                    let concession = '';
                    (this.state.noOfAdult > 0) ? adult = String(this.state.noOfAdult + " x adult") : adult = '';
                    (this.state.noOfChild > 0) ? adult = String(this.state.noOfChild + " x child") : child = '';
                    (this.state.noOfConcession > 0) ? adult = String(this.state.noOfConcession + " x concession") : concession = '';
                    let ticketString = adult + child + concession;
                    localStorage.setItem("Tickets", ticketString);
                    if (this.state.valid == "true") {
                        window.location.replace("/authorise-payment")
                    } else {
                        axios.delete(`http://localhost:4000/bookings/delete/${res.data._id}`);
                        window.location.replace("/SoldOut")
                    }
                })
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
                                        <option>99</option>
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
                        <button type="submit" className="btn btn-dark btn-control"> <h3>Buy Now</h3></button>
                    </form >
                </div >
            </main >
        )
    };
}
export default Bookings;