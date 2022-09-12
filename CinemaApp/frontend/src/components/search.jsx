import {Link} from 'react-router-dom';

const Search = () => {
    return (
        <div>
            <div className="slide">
                <input className="form-control form-control6" />
                <Link to="/moovies">
                    <i className="fa-solid fa-magnifying-glass" />
                </Link>
            </div>
        </div>
    );
}

export default Search;