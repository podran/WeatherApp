import React from 'react'
import { useSelector } from 'react-redux';

function clickHandler(e) {
    console.log(e.currentTarget);
}

export default function Results() {
    let results = useSelector(state => state.searchResults.results);
    console.log(results);
    return (
        <ul className="results">
            {results.map((result, i) => {
                return (<li
                    key={i} 
                    onClick={clickHandler} 
                    className="resultItem"
                    data-key={result.Key}
                    >
                    {result.AdministrativeArea.ID} {result.AdministrativeArea.LocalizedName}
                    </li>)
            })}
        </ul>
    )
}
