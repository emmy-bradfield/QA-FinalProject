import {Link} from 'react-router-dom';
import DairyMovieImg from '../assets/dairy-movie.png';

const DairyMovie = () =>{
    return(
        <div>
            <Link to="/listings"><i className="fa-solid fa-chevron-left in5"></i> Back</Link>
            <div className="slide-left">
                <img className="page-image" src={DairyMovieImg} />
                <div className="movie-details drop5 page-text">
                    <h1> Dairy Movie </h1>
                    <ul>
                        <li className="no-bullet">
                            <h3> Starring: </h3>
                            <ul>
                                <li><h5>Daisy</h5></li>
                                <li><h5>Betty</h5></li>
                                <li><h5>John Cena</h5></li>
                            </ul>
                        </li>
                        <li className="no-bullet">
                            <h3> Director: </h3>
                            <ul>
                                <li><h5>Madeha Rawshon</h5></li>
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
    );
};

export default DairyMovie;