import { Link } from 'react-router-dom';
import TerrorDairyImg from '../../assets/movie-posters/terrordairy.png';

const TerrorDairy = () => {
    return (
        <div>
            <Link to="/new-releases"><i className="fa-solid fa-chevron-left in5"></i> Back</Link>
            <div className="slide-left">
                <img className="page-image" src={TerrorDairyImg} />
                <div className="movie-details drop5 page-text">
                    <h1> Terror on the Dairy </h1>
                    <ul>
                        <li className="no-bullet">
                            <h3> Starring: </h3>
                            <ul>
                                <li><h5>Mr Barry Scott</h5></li>
                                <li><h5>Ibraheem Latif</h5></li>
                                <li><h5>Michael McIntire</h5></li>
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

export default TerrorDairy;