import {Link} from 'react-router-dom';
import CalftimeImg from '../../assets/calftime.png';

const Calftime = () =>{
    return(
        <div>
            <Link to="/new-releases"><i className="fa-solid fa-chevron-left in5"></i> Back</Link>
            <div className="slide-left">
                <img className="page-image" src={CalftimeImg} />
                <div className="movie-details drop5 page-text">
                    <h1> Calftime </h1>
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

export default Calftime;