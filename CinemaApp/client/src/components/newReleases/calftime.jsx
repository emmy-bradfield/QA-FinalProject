import {Link} from 'react-router-dom';
import CalftimeImg from '../../assets/movie-posters/calftime.png';

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
                                <li><h5>Barry B Benson</h5></li>
                                <li><h5>Surprise Guest</h5></li>
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

export default Calftime;