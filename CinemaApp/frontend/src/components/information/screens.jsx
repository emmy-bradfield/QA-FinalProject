import StandardSeats from '../../assets/standard-seats.png';
import StandardScreen from '../../assets/standard-screen.jpg';
import DeluxeSeats from '../../assets/deluxe-seats.png';
import DeluxeScreen from '../../assets/deluxe-screen.jpg';

const Screens = () => {
    return (
        <main className="center">
            <h1> Our Screens </h1>
            <div className="slide-top">
                <div className="card-subtle">
                    <h5 className="card-inner-text">Standard Screen</h5>
                    <p className="card-inner-text">Our standard screen comes with all you could need for a mind-blowing,
                        udderly unbeefable cinematic experience! Our recent refurbishment means we are able to offer you
                        the highest-quality and most luxurious moo-vie experience. Don't believe us? Take a look for
                        yourself!</p>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                                <img src={StandardSeats} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={StandardScreen} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="card-subtle">
                    <h5 className="card-inner-text">Deluxe "Directors Box" Seats</h5>
                    <p className="card-inner-text">Want a truly immersive experience? We offer deluxe Director's Box seats for many
                        of our showings. Located on the first floor of each cinema room. Housing a limited number of seats, with
                        fully emoosive surround sound speakers, additional legroom, wider and comfier seats, and an all-round mind
                        blowing experience! Oh, and did we forget to mention? The directors box boasts a ultra-wide HD 8k screen
                        - incredable! </p>
                    <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={DeluxeSeats} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={DeluxeScreen} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Screens;