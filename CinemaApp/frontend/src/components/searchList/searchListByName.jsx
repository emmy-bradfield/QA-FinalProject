import { useState } from "react";
import Search from "./search";
import List from "./list";
import movies from '../../assets/movies.json';

const ListByName = () => {
    const [queryName, setQueryName] = useState('');

    const handleQueryName = e => {
        setQueryName(e.target.value)
    }

    const byQueryName = queryName => item => !queryName || item.name.toLowerCase().includes(queryName.toLowerCase());

    const list = movies;
    const filteredListName = list.filter(byQueryName(queryName));

    return (
        <div className="stack">
            <div className="card">
                <br />
                <Search query={queryName} handleQuery={handleQueryName}>By Name: </Search>
                <div className="card-body">
                    <List list={filteredListName} />
                </div>
            </div>
        </div>
    );
}

export default ListByName;