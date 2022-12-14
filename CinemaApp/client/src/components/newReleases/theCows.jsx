import { Link } from 'react-router-dom';
import TheCowsImg from '../../assets/movie-posters/thecows.png';

const TheCows = () => {
    return (
        <div>
            <Link to="/new-releases"><i className="fa-solid fa-chevron-left in5"></i> Back</Link>
            <div className="slide-left">
                <img className="page-image" src={TheCowsImg} />
                <div className="movie-details drop5 page-text">
                    <h1> The Cows </h1>
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
                                <li><h5>Shahmeen Shaikh</h5></li>
                            </ul>
                        </li>
                        <li className="no-bullet">
                            <h3> Upcoming Showings: </h3>
                            <ul>
                                <li><h5> 17:00 on 16-Sep </h5></li>
                                <li><h5> 19:00 on 16-Sep </h5></li>
                                <li><h5> 20:30 on 16-Sep </h5></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TheCows;