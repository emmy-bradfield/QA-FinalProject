import { Link } from 'react-router-dom';
import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            <div className="search-div">
                <form onSubmit={onSubmit}>
                    <input className="form-control form-control6 search-bar" placeholder="Search term" value={search} onChange={handleChange} />
                    <Link to="/moovies" className="shrink-padding">
                        <i className="fa-solid fa-magnifying-glass" />
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Search;