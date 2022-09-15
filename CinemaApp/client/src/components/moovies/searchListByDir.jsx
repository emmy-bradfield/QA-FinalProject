import { useState } from "react";
import Search from "./search";
import ListTwo from "./listTwo";
import movies from '../../assets/movies.json';

const ListByDirector = () => {
    const [queryDirector, setQueryDirector] = useState('');

    const handleQueryDirector = e => {
        setQueryDirector(e.target.value);
    }

    const byQueryDirector = queryDirector=> item => !queryDirector || item.director.toLowerCase().includes(queryDirector.toLowerCase());

    const list = movies;
    const filteredListDirector = list.filter(byQueryDirector(queryDirector));

    return(
        <div className="stack">
                <div className="card">
                <br/>
                <Search query={queryDirector} handleQuery={handleQueryDirector}>By Director: </Search>
                    <div className="card-body">
                        <ListTwo list={filteredListDirector} />
                    </div>
                </div>
            </div>
    );
}

export default ListByDirector;