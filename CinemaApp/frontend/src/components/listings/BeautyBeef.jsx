import {Link} from 'react-router-dom';
import BeautyBeefImg from '../../assets/beauty-and-beef.jpg';

const BeautyBeast = () => {
    return (
        <div>
            <Link to="/listings"><i className="fa-solid fa-chevron-left in5 classy-link"></i> Back</Link>
            <div className="slide-left">
                <img className="page-image" src={BeautyBeefImg} />
                <div className="movie-details drop5 page-text">
                    <h1> Beauty and the Beef </h1>
                    <ul>
                        <li className="no-bullet">
                            <h3> Starring: </h3>
                            <ul>
                                <li><h5>Emoo Watson</h5></li>
                                <li><h5>Daisy the Cow</h5></li>
                                <li><h5>Billy Bull</h5></li>
                                <li><h5>...and many more!</h5></li>
                            </ul>
                        </li>
                        <li className="no-bullet">
                            <h3> Director: </h3>
                            <ul>
                                <li><h5>Michael King</h5></li>
                            </ul>
                        </li>
                        <li className="no-bullet">
                            <h3> Upcoming Showings: </h3>
                            <ul>
                                <li><h5> hh:mm on dd-mmm </h5></li>
                                <li><h5> hh:mm on dd-mmm </h5></li>
                                <li><h5> hh:mm on dd-mmm </h5></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BeautyBeast;