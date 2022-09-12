import { useState } from 'react';
import ListByName from './searchList/searchListByName.jsx';
import ListByDirector from './searchList/searchListByDir.jsx';

const Moovies = () => {
    const [byName, setByName] = useState(true);
    const searchController = (byName) ? <ListByName /> : <ListByDirector />

    const toggle = e => {
        if (byName === true) {
            setByName(false);
        } else if (byName === false) {
            setByName(true);
        }
    }

    const btnText = (byName) ? "Search by Director" : "Search by Title";

    return (
        <main className="stack center">
            <h1> Movie Database </h1>
            <div className="slide center2 btn-toggle-div">
                <h5 className="button-caption">Change to </h5><button className="btn-box btn-toggle" type="button" onClick={toggle}>{btnText}</button>
            </div>
            {searchController}
        </main>
    )
}

export default Moovies;