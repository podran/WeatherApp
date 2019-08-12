import React from 'react'
import { useSelector } from 'react-redux';
import { NONAME } from 'dns';

function clickHandler(e) {
    console.log(e.currentTarget);
}

export default function Results(props) {
    let results = useSelector(state => state.searchResults.results);
    let style= {display: ''};
    style.display = props.display ? 'block' : 'none';
    return (
        <ul className="results">
            {results.map((result, i) => {
                return (<li
                    key={i} 
                    onClick={clickHandler} 
                    className="resultItem"
                    data-key={result.Key}
                    style={style}
                    >
                    {result.AdministrativeArea.ID} {result.AdministrativeArea.LocalizedName}
                    </li>)
            })}
        </ul>
    )
}
