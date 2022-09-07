import {Link} from 'react-router-dom';
import CowsablancaImg from '../assets/cowsablanca.png';

const Cowsablanca = () =>{
    return(
        <div>
            <Link to="/listings"><i className="fa-solid fa-chevron-left in5"></i> Back</Link>
            <div className="slide-left">
                <img className="page-image" src={CowsablancaImg} />
                <div className="movie-details drop5 page-text">
                    <h1> Cowsablanca </h1>
                    <ul>
                        <li className="no-bullet">
                            <h3> Starring: </h3>
                            <ul>
                                <li><h5>My Mother</h5></li>
                                <li><h5>Dame Judy Dench</h5></li>
                                <li><h5>Billy Bull</h5></li>
                            </ul>
                        </li>
                        <li className="no-bullet">
                            <h3> Director: </h3>
                            <ul>
                                <li><h5>Ibraheem Latif</h5></li>
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

export default Cowsablanca;