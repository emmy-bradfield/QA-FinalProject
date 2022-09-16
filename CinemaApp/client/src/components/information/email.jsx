import { Component } from 'react';
import axios from 'axios';

class EmailForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            emailValid: false,
            subject: '',
            message: ''
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    };

    onChangeEmail(e) {
        if (e.target.value.match('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9-.]+[.][a-zA-Z]{2,}$')) {
            this.setState({
                email: e.target.value,
                emailValid: true
            })
            console.log("Email passed")
        } else {
            this.setState({
                email: e.target.value,
                emailValid: false
            })
            console.log("Email failed")
        }
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        })
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("default prevented")
        const newEmail = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        console.log("email object made")

        if(this.state.emailValid){
        axios.post("http://localhost:4000/emails/post", newEmail)
            .then(res => console.log("axios post made"));
        this.setState({
            name: '',
            email: '',
            emailValid: '',
            subject: '',
            message: ''
        })
        console.log("State reset")
        window.alert("Email successfully sent")
    } else{
        window.alert("Please enter a valid email")
    }
    }

    render() {
        return (
            <form className="email-form in3 drop1" onSubmit={this.onSubmit}>
                <label className="form-text">Name:</label>
                <input className="form-control form-control2" type="text" value={this.state.name} required onChange={this.onChangeName} />
                <label className="form-text">Email:</label>
                <input className="form-control form-control2" type="email" value={this.state.email} required onChange={this.onChangeEmail} />
                <label className="form-text">Subject:</label>
                <input className="form-control form-control2" type="text" value={this.state.subject} required onChange={this.onChangeSubject} />
                <label className="form-text">Message:</label>
                <textarea className="form-control form-control2 message-txt" value={this.state.message} required onChange={this.onChangeMessage} />
                <button className="btn btn-primary" type="submit">Submit Enquirey</button>
            </form>
        );
    }
}

export default EmailForm;