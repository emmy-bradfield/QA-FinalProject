import {Link} from 'react-router-dom';
import MoonstersImg from '../../assets/moo-nsters-inc.png';

const MoonsterInc = () => {
    return (
        <div>
            <Link to="/listings"><i className="fa-solid fa-chevron-left in5"></i> Back</Link>
            <div className="slide-left">
                <img className="page-image" src={MoonstersImg} />
                <div className="movie-details drop5 page-text">
                    <h1> Moonsters Inc </h1>
                    <ul>
                        <li className="no-bullet">
                            <h3> Starring: </h3>
                            <ul>
                                <li><h5>Mike Cowzowski</h5></li>
                                <li><h5>Terry Crews</h5></li>
                                <li><h5>Dame Judi Dench</h5></li>
                                <li><h5>...and many more!</h5></li>
                            </ul>
                        </li>
                        <li className="no-bullet">
                            <h3> Director: </h3>
                            <ul>
                                <li><h5>Shahmeen Shaihk</h5></li>
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

export default MoonsterInc;