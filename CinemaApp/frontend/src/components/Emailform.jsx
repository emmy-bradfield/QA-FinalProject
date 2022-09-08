import { Component } from 'react';

class EmailForm extends Component {
    render() {
        return (
            <form className="email-form in3 drop1">
                <label className="form-text">Name:</label>
                <input className="form-control form-control2" type="text" id="name" required />
                <label className="form-text">Email Address:</label>
                <input className="form-control form-control2" type="email" id="email" required />
                <label className="form-text">Subject:</label>
                <input className="form-control form-control2" type="text" id="subject" required />
                <label className="form-text">Message:</label>
                <textarea className="form-control form-control2 message-txt" id="message" required />
                <button className="btn btn-dark" type="submit">Submit Enquirey</button>
            </form>
        );
    }
}

export default EmailForm;