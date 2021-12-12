import React from 'react'
import Result from './Result'

const Results = ({results, openPopup}) => {
    return (
        <div className="results-container">
            {results.map(result => (<Result key={result.imdbID} result={result} openPopup={openPopup}/>))}
        </div>
    )
}

export default Results
