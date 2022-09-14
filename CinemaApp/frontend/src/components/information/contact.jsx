import React from "react";
import CinemaShot from '../../assets/cinema-external.jpg';
import EmailForm from "./Emailform";

const ContactPage = () => {
    return (
        <>
            <main className="center">
                <h1> Contact </h1>
                <br/>
                <div className="embed-form sub-component">
                    <div className="slide spread">
                        <div className="side-text center drop1">
                            <h3>Got a question? Have any concerns?</h3>
                            <p>We recommend reaching out using our email contact form - it's the quickest
                                and most efficient way of reaching us.
                            </p>

                            <h3>Want to contact our developer team?</h3>
                            <p>Our developer team can also be reached directly through the contact form.
                                Alternatively, you can contact the product lead directly on
                                shahmeen_shaikh@outlook.com </p>
                            <h3>Contact us by phone:</h3>
                            <ul>
                                <li className="no-bullet flush-list">
                                    Media Enquiries: (+44) 7777 777 777
                                </li>
                                <li className="no-bullet flush-list">
                                    Customer Support: (+44) 1249 800900
                                </li>
                                <li className="no-bullet flush-list">
                                    General: (+44) 800 1234 567
                                </li>
                            </ul>
                        </div>
                        <EmailForm />
                    </div>
                </div>
                <div className="slide spread">
                    <div className="sub-component">
                        <h2> Our Location: </h2>
                        <div className="slide spread">
                            <div>
                                <img src={CinemaShot} alt="external photograph of the cinema" />
                                <em className="wide-caption">QA Cinemas Feb-2022</em>
                            </div>
                            <br />
                            <div className="in3 center drop3">
                                <h3>Our Venue:</h3>
                                International House <br/>
                                1 St. Katharine's Way <br/>
                                London <br/>
                                E1W 1UN
                                <br/><br/>
                                <h4>Main Offices:</h4>
                                QA Cinema Glasgow<br />
                                17 Renfield Street<br />
                                Glasgow<br />
                                Scotland<br />
                                G2 5AH<br />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}


export default ContactPage;