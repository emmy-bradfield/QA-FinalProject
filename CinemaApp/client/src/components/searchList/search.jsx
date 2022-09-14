import { useState } from "react";

const Search = ({query, handleQuery, children}) => {

    return(
        <div>
            {children}
            <input className="form-control form-control5 search-bar" value={query} onChange={handleQuery} placeholder="search term"/>
        </div>
    )
}

export default Search;