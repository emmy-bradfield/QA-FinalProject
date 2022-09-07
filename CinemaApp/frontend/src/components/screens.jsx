import StandardSeats from '../assets/standard-seats.png';
import StandardScreen from '../assets/standard-screen.jpg';
import DeluxeSeats from '../assets/deluxe-seats.png';
import DeluxeScreen from '../assets/deluxe-screen.jpg';

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
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={StandardSeats} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={StandardScreen} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
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
                    <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={DeluxeSeats} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={DeluxeScreen} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Screens;